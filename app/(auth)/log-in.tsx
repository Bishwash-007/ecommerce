import { View, Text } from "react-native";
import React from "react";
import InputField from "@/components/custom/InputField";
import { Button, ButtonText } from "@/components/ui/button";
import OAuthButton from "@/components/custom/OAuth";
import { Link, useRouter } from "expo-router";
import { useAuthStore } from "@/hooks/useAuthstore";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

const LogIn = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    login,
    validateForm,
    emailError,
    passwordError,
  } = useAuthStore();

  const router = useRouter();
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value / 20 }],
    };
  });

  const handleSignIn = async () => {
    if (!validateForm()) return;

    try {
      await login(email, password);
      router.replace("/home");
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleOAuth = (provider: "google" | "apple" | "facebook") => {
    console.log(`Signing in with ${provider}`);
    //TODO: ADD OAUTH
  };

  return (
    <Animated.View className="flex-1 px-8 pt-36" style={animatedStyles}>
      <View className="mb-4 space-y-1 flex flex-col items-start justify-start">
        <Text className="text-4xl text-primary">Log into</Text>
        <Text className="text-4xl text-primary">your account</Text>
      </View>

      <View className="my-8 gap-8">
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          errorMessage={emailError}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          errorMessage={passwordError}
          secureToggle
        />
      </View>

      <Link href="/forgotpassword" asChild>
        <Text className="text-primary-400 self-end mb-4">Forgot Password?</Text>
      </Link>

      <Button
        size="lg"
        variant="solid"
        action="primary"
        className="h-14 w-[80%] self-center rounded-full my-6"
        onPress={handleSignIn}
      >
        <ButtonText>LOG IN</ButtonText>
      </Button>

      <Text className="text-primary-400 text-center">or sign up with</Text>

      <View className="flex-row gap-4 justify-center my-6">
        <OAuthButton iconName="google" onPress={() => handleOAuth("google")} />
        <OAuthButton iconName="apple" onPress={() => handleOAuth("apple")} />
        <OAuthButton
          iconName="facebook"
          onPress={() => handleOAuth("facebook")}
        />
      </View>

      <Text className="text-primary-400 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/(auth)/sign-up" className="text-primary underline">
          Sign Up
        </Link>
      </Text>
    </Animated.View>
  );
};

export default LogIn;
