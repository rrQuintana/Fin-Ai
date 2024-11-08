import { View, TextInput } from "react-native";
import { CustomInputProps } from "./types";

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon: Icon,
  className = "",
  ...props
}: CustomInputProps) {
  return (
    <View className={`bg-white border-gray-200 rounded-3xl border w-80 flex flex-row items-center justify-evenly mt-10 ${className}`}>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor="gray"
        className="w-64 h-14 px-4"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      <Icon />
    </View>
  );
}