import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@pages/Home";
import OnboardingForm from "@pages/Onboarding";

const HomeStack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;
