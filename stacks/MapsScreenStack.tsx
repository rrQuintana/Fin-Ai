import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Maps from "@pages/Otros";

const MapsStack = createNativeStackNavigator();

function MapsScreenStack() {
  return (
    <MapsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapsStack.Screen name="Maps" component={Maps} />
    </MapsStack.Navigator>
  );
}

export default MapsScreenStack;
