import { View, Text, TouchableOpacity } from "react-native";
import { CustomTouchableProps } from "@interfaces/customInputInterface";

export default function CustomTouchable({
  onPress,
  text,
  icon: Icon,
  color
}: CustomTouchableProps) {

  const backgroundColorClass = color ? `bg-${color}-100` : 'bg-gray-100';
  const iconColor = color ? `text-${color}-500` : 'text-gray-500';
  return (
    <TouchableOpacity onPress={onPress}
      className={`h-14 my-2 rounded-3xl  justify-center 
      ${backgroundColorClass}`}>
      <View className="flex flex-row items-center content-center">
        <View className="ml-5">
          {/* <Icon /> */}
        </View>
        <Text className="text-base ml-3">{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
