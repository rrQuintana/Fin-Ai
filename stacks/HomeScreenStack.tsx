import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@pages/Home";
import Cards from "@pages/Cards";
import CalendarScreen from "@pages/CalendarScreen";
import Budgets from "@pages/Budgets";

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
      <HomeStack.Screen name="Calendar" component={CalendarScreen}/>
      <HomeStack.Screen name="Budgets" component={Budgets}/>
    </HomeStack.Navigator>
  );
}

export default HomeScreenStack;
