import { View, Text } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/custom/InputField";
import { Button, ButtonText } from "@/components/ui/button";
import OAuthButton from "@/components/custom/OAuth";
import { Link } from "expo-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 px-8 pt-36 h-full">
      {/* Heading */}
      <View className="mb-4 space-y-1">
        <Text className="text-4xl text-primary">Log into</Text>
        <Text className="text-4xl text-primary">your account</Text>
      </View>

      {/* Input Fields */}
      <View className="my-8 gap-8">
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <Link href="/forgotpassword" className="text-primary-400 self-end mb-4">
        Forgot Password?
      </Link>

      {/* Login Button */}
      <Button
        size="lg"
        variant="solid"
        action="primary"
        className="h-14 w-[80%] self-center rounded-full my-6"
      >
        <ButtonText>LOG IN</ButtonText>
      </Button>

      {/* OAuth Options */}
      <Text className="text-primary-400 text-center">or sign up with</Text>
      <View className="flex-row gap-4 justify-center my-6">
        <OAuthButton iconName="google" />
        <OAuthButton iconName="apple" />
        <OAuthButton iconName="facebook" />
      </View>

      {/* Sign Up Redirect */}
      <Text className="text-primary-400 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/(auth)/sign-up" className="text-primary underline">
          Sign Up
        </Link>
      </Text>
    </View>
  );
};

export default LogIn;
