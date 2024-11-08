import { View, TextInput } from "react-native";
import { CustomInputProps } from "@interfaces/customInputInterface";

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon: Icon,
}: CustomInputProps) {
  return (
    <View className="bg-white border-gray-200 rounded-3xl border w-80 flex flex-row items-center justify-evenly mt-10">
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={"gray"}
        className=" w-64 h-14 px-4"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Icon />
    </View>
  );
}