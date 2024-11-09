import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tabBarOptions } from "@assets/styles/NavBarStyles";
import CustomItemTab from "@components/navbar/CustomItemTab";
import { ViewStyle } from "react-native";
import HomeScreenStack from "@stacks/HomeScreenStack";
import AccountScreenStack from "@stacks/AccountScreenStack";
import MapsScreenStack from "@stacks/TransactionsScreenStack";
import { useOnboardingStatus } from "src/hooks/useOnboardingStatus";
import OnboardingForm from "@pages/Onboarding";
import { setOnboardingStatus } from "@hooks/useOnboardingStatus";

const OnboardingStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isFirstLaunch = useOnboardingStatus();

  if (isFirstLaunch === null) return null;

  return isFirstLaunch ? (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen name="Onboarding">
      {() => <OnboardingForm completeOnboarding={setOnboardingStatus} />}
      </OnboardingStack.Screen>
    </OnboardingStack.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="HomeScreenStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabBarOptions as ViewStyle,
        tabBarItemStyle: { height: 59 },
      }}
    >
      <Tab.Screen
        name="AccountStack"
        component={AccountScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab
              focused={focused}
              iconName={"person"}
              labelText="Profile"
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab
              focused={focused}
              iconName={"money"}
              labelText="Finances"
            />
          ),
        }}
      />
      <Tab.Screen
        name="TransactionsStack"
        component={MapsScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab
              focused={focused}
              iconName={"pin"}
              labelText="Transactions"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
