import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { LayoutInterface } from "@interfaces/pageLayoutInterfaces";
export default function PageLayout({
  children,
  title,
  display,
}: LayoutInterface) {

  const { height } = useWindowDimensions();
  
  return (
    <View className="bg-white h-screen overflow-hidden">
      <View
        style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className={`bg-[#231f20] w-full h-32 px-6 justify-center items-center ${!display ? 'hidden' : ''}`}
      >
        <View className="w-full items-center">
          <Text className={`font-bold text-white ${height > 667 ? 'text-4xl mt-8' : 'text-2xl mt-4' } `}>{title}</Text>
        </View>
      </View>
      <View className="pt-4">
        {children}
      </View>
    </View>
  );
}
