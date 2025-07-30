import React from "react";
import { TextInput, View } from "react-native";

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View className="border-b-hairline border-primary-50 self-start w-full">
      <TextInput
        placeholderClassName="text-xs text-primary-50"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputField;
