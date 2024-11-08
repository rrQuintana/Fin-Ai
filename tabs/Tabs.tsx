import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabBarOptions } from "@assets/styles/NavBarStyles";
import CustomItemTab from "@components/navbar/CustomItemTab";
import { ViewStyle } from "react-native";
import HomeScreenStack from "@stacks/HomeScreenStack";
import AccountScreenStack from "@stacks/AccountScreenStack";
import MapsScreenStack from "@stacks/MapsScreenStack";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreenStack"
   
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabBarOptions as ViewStyle,
        tabBarItemStyle:{height:59},
      }}
    >
      <Tab.Screen
        name="AccountStack"
        component={AccountScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab focused={focused} iconName={"person"} labelText="Perfil" />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab focused={focused} iconName={"home"} labelText="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="MapsStack"
        component={MapsScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab focused={focused} iconName={"pin"} labelText="Mapa" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
