import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import { OnboardFlow } from 'react-native-onboard';
import { Image } from "react-native";
import LargeLogo from "@assets/images/largeLogo.svg";
import { useRef, useState } from "react";


export default function Landing({ setPivote }: { setPivote: (value: boolean) => void }) {


  const { width, height } = Dimensions.get("window");

  const onboardingData = [
    {
      emoji: "🎯",
      title: "Define Your Financial Goals",
      description: "Set clear objectives, such as saving for a house or preparing for retirement. Our financial assistant will help you create a personalized plan to achieve each goal.",
    },
    {
      emoji: "🚀",
      title: "Receive Smart Recommendations",
      description: "Discover financial products and personalized advice to improve your financial situation. The app analyzes your habits and needs to offer you the best guidance.",
    },
    {
      emoji: "📊",
      title: "Monitor Your Progress and Stay Focused",
      description: "With tracking tools and real-time alerts, you can see how you are progressing towards your goals and receive reminders to stay on track.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      setPivote(true)
    }
  };

  const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
    <View className="px-4" style={{ width }}>
      <Text className="text-7xl font-bold mb-3 text-center">{item.emoji}</Text>
      <Text className="text-2xl font-bold mb-2 text-center">{item.title}</Text>
      <Text className="text-lg text-center px-5">{item.description}</Text>
    </View>
  );

  return (
    <View className="flex bg-[#231f20]">
      <View className="w-full h-2/5 bg-[#231f20] justify-center items-center p-16">
        <Image source={require('../assets/images/logo.png')} className="w-full h-full mt-10" />
      </View>
      <View className="w-full h-3/5 items-center bg-white rounded-t-3xl py-12">
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={(event) => {
            const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(slideIndex);
          }}
        />
        <View className="flex-row mb-5">
          {onboardingData.map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentIndex ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext} className="bg-black p-5 rounded-full w-11/12 mt-auto items-center">
          <Text className="text-white text-lg font-semibold">
            {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}