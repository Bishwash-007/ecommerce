import { View, Text } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/custom/InputField";
import { Button, ButtonText } from "@/components/ui/button";
import OAuthButton from "@/components/custom/OAuth";
import { Link, useRouter } from "expo-router";
import { useAuthStore } from "@/hooks/useAuthstore";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

const SignUp = () => {
  const router = useRouter();
  const {
    fullName,
    email,
    password,
    setEmail,
    setPassword,
    register,
    validateForm,
    setFullName,
    setPasswordError,
    emailError,
    passwordError,
  } = useAuthStore();
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value / 4 }],
    };
  });

  const handleSignUp = async () => {
    if (!validateForm()) return;

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      await register(fullName, email, password);
      router.replace({
        pathname: "/verification",
        params: { state: "Register" },
      });
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  const handleOAuth = (provider: "google" | "apple" | "facebook") => {
    console.log(`Signing in with ${provider}`);
    //TODO: ADD OAUTH
  };

  return (
    <Animated.ScrollView
      className="px-8 pt-36 h-full flex-1"
      style={animatedStyles}
    >
      <View className="gap-2 flex flex-col mb-4">
        <Text className="text-4xl text-primary">Create</Text>
        <Text className="text-4xl text-primary">an account</Text>
      </View>

      <View className="flex gap-8 my-8 items-center">
        <InputField
          placeholder={"Enter your name"}
          value={fullName}
          onChangeText={setFullName}
        />
        <InputField
          placeholder={"Enter your email"}
          value={email}
          onChangeText={setEmail}
          errorMessage={emailError}
        />
        <InputField
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          secureToggle
          errorMessage={passwordError}
        />
        <InputField
          placeholder={"Confirm Password"}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          secureToggle
          errorMessage={passwordError}
        />
      </View>

      <Button
        size="lg"
        variant="solid"
        action="primary"
        className="w-[80%] rounded-full my-8 self-center h-14"
        onPress={handleSignUp}
      >
        <ButtonText>SIGN UP</ButtonText>
      </Button>

      <Text className="text-primary-400 text-center">or sign up with</Text>

      {/* oathn row  */}
      <View className="flex-row gap-4 justify-center my-6">
        <OAuthButton iconName="google" onPress={() => handleOAuth("google")} />
        <OAuthButton iconName="apple" onPress={() => handleOAuth("apple")} />
        <OAuthButton
          iconName="facebook"
          onPress={() => handleOAuth("facebook")}
        />
      </View>

      {/* already have an account? */}
      <Text className="text-primary-400 text-center">
        Already have an account?{" "}
        <Link href={"/(auth)/log-in"} className="text-primary underline">
          Log In
        </Link>
      </Text>
    </Animated.ScrollView>
  );
};

export default SignUp;
