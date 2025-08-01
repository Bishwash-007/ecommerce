import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import InputField from "@/components/custom/InputField";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ArrowLeft, CheckCircle } from "lucide-react-native";
import { useAuthStore } from "@/hooks/useAuthstore";
import { Modal, ModalBackdrop, ModalContent } from "@/components/ui/modal";
import { Box } from "@/components/ui/box";

const NewPassword = () => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const {
    password,
    setPassword,
    passwordError,
    setPasswordError,
    validateForm,
  } = useAuthStore();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleVerify = () => {
    const isValid = validateForm({ checkEmail: false });

    if (!isValid) return;

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      router.push("/(auth)/log-in");
    }, 1500);
  };

  return (
    <View className="flex-1 px-8 pt-24 bg-white dark:bg-black">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ArrowLeft} size="xl" className="self-start mb-4" />
      </TouchableOpacity>

      <View className="mt-6">
        <Text className="text-4xl font-semibold text-primary">
          Create new password
        </Text>
        <Text className="text-base text-primary-400 mt-2">
          Please enter a new password for your account.
        </Text>
      </View>

      <View className="flex gap-6 mt-12">
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          secureToggle
          errorMessage={passwordError}
        />

        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text: string) => setConfirmPassword(text)}
          secureTextEntry
          secureToggle
          errorMessage={passwordError}
        />
      </View>

      <View className="mt-16">
        <Button
          size="lg"
          action="primary"
          className="h-14 w-full rounded-full"
          onPress={handleVerify}
        >
          <ButtonText className="text-base font-semibold">VERIFY</ButtonText>
        </Button>
      </View>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        className="rounded-2xl"
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[305px] items-center">
          <View className="my-2">
            <Text className="text-md text-primary text-center">
              your password has been changed successfully
            </Text>
          </View>
          <View className="my-4">
            <Box className="w-[64px] h-[64px] rounded-full bg-background-success items-center justify-center">
              <Icon as={CheckCircle} className="stroke-success-600" size="xl" />
            </Box>
          </View>
        </ModalContent>
      </Modal>
    </View>
  );
};

export default NewPassword;
