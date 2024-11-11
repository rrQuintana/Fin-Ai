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
  isFixedSize,
  fixedSize,
}: CustomInputProps) {
  const width = fixedSize ? fixedSize : 320;
  return (
    <View className={` bg-white border-gray-200 rounded-3xl border ${isFixedSize ? 'p-4 my-2': 'flex flex-row items-center justify-evenly mt-8'} `}
      style={{
        width: !isFixedSize ? width : undefined,
      }}
    >
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={"gray"}
        className={`${isFixedSize ? '' :'w-64 h-14 px-4'}`}
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
