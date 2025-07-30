import React, { useState } from "react";
import { TextInput, TextInputProps, View, Pressable, Text } from "react-native";
import { CircleAlert, Eye, EyeOff } from "lucide-react-native";
import { Icon } from "../ui/icon";

type InputFieldProps = TextInputProps & {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureToggle?: boolean;
  errorMessage?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  secureToggle = false,
  errorMessage,
  ...props
}) => {
  const [hidden, setHidden] = useState<boolean>(secureTextEntry || false);

  const toggleVisibility = () => setHidden(!hidden);

  return (
    <View>
      <View className="border-b-hairline border-primary-50 self-start w-full flex-row items-center">
        <TextInput
          className="flex-1 text-primary"
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureToggle ? hidden : secureTextEntry}
          {...props}
        />
        {secureToggle && (
          <Pressable onPress={toggleVisibility} className="px-2">
            {hidden ? (
              <Icon as={EyeOff} size="md" color="#888" />
            ) : (
              <Icon as={Eye} size="md" color="#888" />
            )}
          </Pressable>
        )}
      </View>

      {errorMessage && (
        <View className="flex flex-row items-center justify-start gap-2">
          <Icon as={CircleAlert} size="sm" color="red" />
          <Text className="text-red-500 my-2">{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default InputField;
