import { View, TextInput } from "react-native";
import { CustomInputProps } from "@interfaces/customInputInterface";

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon: Icon,
  keyboardType,
  inputMode,
  fixedSize,
}: CustomInputProps) {
  return (
    <View className={`bg-white border-gray-200 rounded-3xl border ${fixedSize ? 'p-4 my-2': 'w-80 flex flex-row items-center justify-evenly mt-8'} `}>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={"gray"}
        className={`${fixedSize ? '' :'w-64 h-14 px-4'}`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        inputMode={inputMode}
      />
      {Icon && <Icon />}
    </View>
  );
}
