import { View, Text, TouchableOpacity } from "react-native";
import { CustomTouchableProps } from "@interfaces/customInputInterface";

export default function CustomTouchable({
  onPress,
  text,
  whiteText,
  icon: Icon,
  color
}: CustomTouchableProps) {

  const backgroundColorClass = color ? `bg-[${color}]` : 'bg-gray-100';
  const iconColor = color ? `text-${color}-500` : 'text-gray-500';
  return (
    <TouchableOpacity onPress={onPress}
      className={`${whiteText ?'h-14' : 'h-16'} my-2 rounded-3xl justify-center ${backgroundColorClass}`}>
      <View className={whiteText ? `flex items-center content-center` : `flex flex-row items-center content-center`}>
        <Text className={whiteText ? `font-bold text-lg ml-3 text-white` : `text-lg ml-8`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
