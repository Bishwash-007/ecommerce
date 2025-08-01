import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@/components/ui/icon";
import InputField from "@/components/custom/InputField";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react-native";
import { useAuthStore } from "@/hooks/useAuthstore";

const ForgotPassword = () => {
  const router = useRouter();
  const { email, setEmail, emailError, validateForm } = useAuthStore();

  const handleSubmit = () => {
    if (!validateForm({ checkPassword: false })) return;
    router.replace({
      pathname: "/verification",
      params: { state: "Password" },
    });
  };
  return (
    <View className="flex-1 px-8 pt-24  bg-white dark:bg-black">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ArrowLeft} size="xl" className="self-start mb-4" />
      </TouchableOpacity>

      <View className="mt-8 gap-4 flex flex-col items-start justify-start">
        <Text className="text-4xl text-primary">Forgot Password?</Text>
        <Text className="text-primary-400">
          Enter an email associated with your account and we&apos;ll send
          instructions to reset your password.
        </Text>
      </View>

      {/* email input */}
      <View className="mt-8">
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          errorMessage={emailError}
        />
      </View>
      <Button
        size="lg"
        action="primary"
        className="h-14 w-[80%] self-center rounded-full mt-16"
        onPress={() => handleSubmit()}
      >
        <ButtonText>Send Reset Link</ButtonText>
      </Button>
    </View>
  );
};

export default ForgotPassword;
