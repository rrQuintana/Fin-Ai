// src/app/onboarding/FinalScreen.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function FinalOnboardingScreen() {
  const router = useRouter();

  const handleFinishOnboarding = () => {
    router.replace("/home"); // Redirige a la página principal
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bienvenido a la App</Text>
      <Button title="Comenzar" onPress={handleFinishOnboarding} />
    </View>
  );
}
