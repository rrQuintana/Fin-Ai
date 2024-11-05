import React, { useRef, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    emoji: "🎯",
    title: "Define tus Metas Financieras",
    description: "Establece objetivos claros, como ahorrar para una casa o prepararte para el retiro. Nuestro asistente financiero te ayudará a crear un plan personalizado para alcanzar cada meta.",
  },
  {
    emoji: "🚀",
    title: "Recibe Recomendaciones Inteligentes",
    description: "Descubre productos financieros y consejos personalizados para mejorar tu situación financiera. La app analiza tus hábitos y necesidades para ofrecerte la mejor orientación.",
  },
  {
    emoji: "📊",
    title: "Monitorea tu Progreso y Mantente Enfocado",
    description: "Con herramientas de seguimiento y alertas en tiempo real, podrás ver cómo avanzas hacia tus metas y recibir recordatorios para mantenerte en el camino.",
  },
];

export default function OnboardingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      await AsyncStorage.setItem("hasLaunched", "true");
      router.replace("/home");
    }
  };

  const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
    <View className="px-4" style={{ width, height }}>
      <Text className="text-8xl font-bold mb-3 text-center">{item.emoji}</Text>
      <Text className="text-2xl font-bold mb-6 text-center">{item.title}</Text>
      <Text className="text-lg text-center px-5">{item.description}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      <View className="w-full h-2/5 bg-black" />
      <View className="w-full h-3/5 items-center bg-white rounded-t-2xl pt-12 pb-16">
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
        <View className="flex-row">
          {onboardingData.map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentIndex ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext} className="bg-black p-5 rounded-full w-11/12 mt-5 items-center">
          <Text className="text-white text-lg font-semibold">
            {currentIndex === onboardingData.length - 1 ? "Empezar" : "Siguiente"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}