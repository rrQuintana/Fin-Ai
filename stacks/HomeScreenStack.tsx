import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@pages/Home";
import Cards from "@pages/Cards";

const HomeStack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Cards" component={Cards}/>
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;
