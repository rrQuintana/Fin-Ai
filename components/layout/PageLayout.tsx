import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { LayoutInterface } from "@interfaces/pageLayoutInterfaces";
import Location from "@assets/images/location.svg"
import Animated, {FadeInUp} from "react-native-reanimated"
export default function PageLayout({
  children,
  title,
  location,
}: LayoutInterface) {

  const { height } = useWindowDimensions();
  
  return (
    <View className="bg-white flex-1">
      <View
        style={location ? { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 } : { borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className={`bg-[#231f20] w-full ${height > 667 ? 'h-44' : 'h-24' } px-6  justify-center items-center`}
      >
        <View className="w-full items-center z-[-10]">
          <Animated.Text  entering={FadeInUp.duration(1000)} className={`font-bold text-white ${height > 667 ? 'text-4xl mt-8' : 'text-2xl mt-4' } `}>{title}</Animated.Text>
        </View>
        {location && (
          <TouchableOpacity className={`bg-white z-20 border-gray-200 border w-full absolute  ${height > 667 ? 'bottom-[-35]' : 'bottom-[-44]' } items-center justify-center h-14 rounded-3xl px-4 flex flex-row space-x-2` }>
            <Location width={20} height={20}/>
            <Text className={`text-[#231f20] font-bold ${height > 667 ? 'text-lg' : 'text-md' }`}>
              Santa Lucia, Oax
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {
        location ? (
          <View className="pt-14 flex-1 items-center justify-start">
            {children}
          </View>
        ) : (
          <View className="pt-4 flex-1 items-center justify-start">
            {children}
          </View>
        )
      }
    </View>
  );
}
