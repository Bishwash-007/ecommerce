import { View, Text } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/custom/InputField";
import { Button, ButtonText } from "@/components/ui/button";
import OAuthButton from "@/components/custom/OAuth";
import { Link } from "expo-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View className="px-8 pt-36 h-full flex-1">
      <View className="gap-2 flex flex-col mb-4">
        <Text className="text-4xl text-primary">Create</Text>
        <Text className="text-4xl text-primary">your account</Text>
      </View>

      <View className="flex gap-8 my-8 items-center">
        <InputField
          placeholder={"Enter your name"}
          value={name}
          onChangeText={setName}
        />
        <InputField
          placeholder={"Enter your email"}
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
        />
        <InputField
          placeholder={"Confirm Password"}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <Button
        size="lg"
        variant="solid"
        action="primary"
        className="w-[80%] rounded-full my-8 self-center h-14"
      >
        <ButtonText>SIGN UP</ButtonText>
      </Button>

      <Text className="text-primary-400 text-center">or sign up with</Text>

      {/* oathn row  */}
      <View className="flex flex-row gap-4 rounded-full self-center my-8">
        <OAuthButton iconName="google" />
        <OAuthButton iconName="apple" />
        <OAuthButton iconName="facebook" />
      </View>

      {/* already have an account? */}
      <Text className="text-primary-400 text-center">
        Already have an account?{" "}
        <Link href={"/(auth)/log-in"} className="text-primary underline">
          Log In
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;
