import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import InputField from "@/components/custom/InputField";

const Verification = () => {
  const [email, setEmail] = useState("");
  return (
    <View className="pt-24 flex-1 px-8">
      <Icon />
      <View className="flex flex-col gap-4">
        <Text className="text-4xl text-primary">Verification code</Text>
        <Text className="text-primary-400">
          Please enter the verification code sent to your email.
        </Text>
      </View>

      <View className="mt-16">
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
    </View>
  );
};

export default Verification;
