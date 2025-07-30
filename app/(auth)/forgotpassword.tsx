import { View, Text } from "react-native";
import React, { useState } from "react";
import { Icon } from "@/components/ui/icon";
import InputField from "@/components/custom/InputField";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Add validation or API logic here if needed
    if (email.trim().length > 0) {
      router.push("/(auth)/verification");
    }
  };

  return (
    <View className="flex-1 px-8 pt-24">
      {/* Top icon */}
      <Icon />

      {/* Heading + Description */}
      <View className="mt-6 space-y-3">
        <Text className="text-4xl text-primary">Forgot Password?</Text>
        <Text className="text-primary-400">
          Enter an email associated with your account and we&apos;ll send
          instructions to reset your password.
        </Text>
      </View>

      {/* Email input */}
      <View className="mt-16">
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Button
        size="lg"
        action="primary"
        className="h-14 w-[80%] self-center rounded-full mt-16"
        onPress={handleSubmit}
      >
        <ButtonText>Send Reset Link</ButtonText>
      </Button>
    </View>
  );
};

export default ForgotPassword;
