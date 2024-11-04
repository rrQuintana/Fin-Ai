import React, { useRef, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    title: "Define tus Metas Financieras",
    description: "Establece objetivos claros, como ahorrar para una casa o prepararte para el retiro. Nuestro asistente financiero te ayudará a crear un plan personalizado para alcanzar cada meta.",
  },
  {
    title: "Recibe Recomendaciones Inteligentes",
    description: "Descubre productos financieros y consejos personalizados para mejorar tu situación financiera. La app analiza tus hábitos y necesidades para ofrecerte la mejor orientación.",
  },
  {
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
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
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
        <View style={{ flexDirection: "row" }}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentIndex ? "black" : "gray",
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? "Empezar" : "Siguiente"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: height * 0.4,
    backgroundColor: "black",
  },
  content: {
    position: "absolute",
    top: height * 0.35,
    width: width,
    height: height * 0.65,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 50,
  },
  slide: {
    width: width,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 35,
    width: width - 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
