import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { storeToken, removeToken, hasToken } from "../lib/token";

export type User = {
  _id: string;
  fullName: string;
  email: string;
  avatar?: string;
  otp?: string;
};

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;

  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  fullName: string;
  phoneNumber: string;
  otp?: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFullName: (fullName: string) => void;
  setOtp: (otp: string) => void;
  setEmailError: (error: string) => void;
  setPasswordError: (error: string) => void;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  resetError: () => void;
  validateForm: (options?: {
    checkEmail?: boolean;
    checkPassword?: boolean;
  }) => boolean;
  resetPassword: (newPassword: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,

  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  fullName: "",
  phoneNumber: "",
  otp: "",

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setFullName: (fullName) => set({ fullName }),
  setOtp: (otp) => set({ otp }),
  setEmailError: (emailError) => set({ emailError }),
  setPasswordError: (passwordError) => set({ passwordError }),

  validateForm: (options = {}) => {
    const { checkEmail = true, checkPassword = true } = options;
    const { email, password } = get();
    let valid = true;

    set({ emailError: "", passwordError: "" });

    if (checkEmail) {
      if (!email) {
        set({ emailError: "Email is required." });
        valid = false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          set({ emailError: "Please enter a valid email." });
          valid = false;
        }
      }
    }

    if (checkPassword) {
      if (!password) {
        set({ passwordError: "Password is required." });
        valid = false;
      } else if (password.length < 6) {
        set({ passwordError: "Password must be at least 6 characters." });
        valid = false;
      }
    }

    return valid;
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("/users/login", { email, password });
      const { token, user } = res.data;
      await storeToken(token);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || "Login failed",
        isLoading: false,
      });
    }
  },

  register: async (fullName, email, password) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post("/users/register", {
        name: fullName,
        email,
        password,
      });
      set({ isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || "Registration failed",
        isLoading: false,
      });
    }
  },

  verifyOtp: async (email, otp) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("/users/verify-otp", { email, otp });
      const { token, user } = res.data;
      await storeToken(token);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || "OTP Verification failed",
        isLoading: false,
      });
    }
  },

  logout: async () => {
    await removeToken();
    set({
      user: null,
      isAuthenticated: false,
      error: null,
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      fullName: "",
      phoneNumber: "",
      otp: "",
    });
  },

  fetchCurrentUser: async () => {
    set({ isLoading: true });
    try {
      if (!(await hasToken())) {
        set({ isAuthenticated: false, isLoading: false });
        return;
      }
      const res = await axiosInstance.get("/auth/me");
      set({ user: res.data, isAuthenticated: true, isLoading: false });
    } catch (err: any) {
      await removeToken();
      set({
        user: null,
        isAuthenticated: false,
        error: err?.response?.data?.message || "Unable to fetch user",
        isLoading: false,
      });
    }
  },

  resetPassword: async (newPassword) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post("/users/reset-password", {
        newPassword,
      });
      set({ isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || "Password reset failed",
        isLoading: false,
      });
    }
  },

  resetError: () => {
    set({ error: null });
  },
}));
