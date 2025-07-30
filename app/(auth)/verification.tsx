import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

const OTP_LENGTH = 6;

const Verification: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);
  const isComplete = code.every((digit) => digit.length === 1);

  const focusInput = useCallback((index: number) => {
    inputs.current[index]?.focus();
  }, []);

  const handleChange = useCallback(
    (text: string, index: number) => {
      const newCode = [...code];
      const value = text.replace(/[^0-9]/g, "");

      if (!value) return;

      newCode[index] = value;
      setCode(newCode);

      if (index < OTP_LENGTH - 1) {
        focusInput(index + 1);
      } else {
        Keyboard.dismiss();
      }
    },
    [code, focusInput]
  );

  const handleKeyPress = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
        focusInput(index - 1);
      }
    },
    [code, focusInput]
  );

  return (
    <View className="flex-1 px-8 pt-24">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon as={ArrowLeft} size="xl" className="self-start mb-4" />
      </TouchableOpacity>

      <View className="mt-8 gap-4 flex flex-col items-start justify-start">
        <Text className="text-4xl text-primary">Verification code</Text>
        <Text className="text-primary-400">
          Please enter the 6-digit code sent to your email.
        </Text>
      </View>

      <View className="flex flex-row justify-center mt-8">
        {code.map((digit, i) => (
          <TextInput
            key={i}
            ref={(ref) => {
              inputs.current[i] = ref;
            }}
            value={digit}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            keyboardType="numeric"
            maxLength={1}
            className="border-hairline h-14 w-14 text-center m-1 rounded-sm"
            returnKeyType="done"
          />
        ))}
      </View>

      <View className="self-start">
        <Text className="text-primary-400 text-center mt-16">
          Resend in <Text>0:00s</Text>
        </Text>
      </View>
      {isComplete && (
        <Button
          size="lg"
          action="primary"
          className="h-14 w-[80%] self-center rounded-full mt-16"
          onPress={() => router.push("/(auth)/password")}
        >
          <ButtonText>VERIFY</ButtonText>
        </Button>
      )}
    </View>
  );
};

export default Verification;
