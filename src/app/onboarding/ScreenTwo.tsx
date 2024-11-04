import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreenTwo() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Onboarding 2</Text>
      <Button title="Siguiente" onPress={() => router.push("/onboarding/ScreenThree")} />
    </View>
  );
}
