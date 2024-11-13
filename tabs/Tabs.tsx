import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tabBarOptions } from "@assets/styles/NavBarStyles";
import CustomItemTab from "@components/navbar/CustomItemTab";
import { ViewStyle } from "react-native";
import HomeScreenStack from "@stacks/HomeScreenStack";
import AccountScreenStack from "@stacks/AccountScreenStack";
import TransactionsScreenStack from "@stacks/TransactionsScreenStack";
import ChatScreenStack from "@stacks/ChatScreenStack";
import OnboardingForm from "@pages/Onboarding";
import { useOnboardingStatus } from "@hooks/useOnboardingStatus";

const OnboardingStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { isFirstLaunch, completeOnboarding } = useOnboardingStatus();

  if (isFirstLaunch === null) return null;

  return isFirstLaunch ? (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen name="Onboarding">
        {() => <OnboardingForm completeOnboarding={completeOnboarding} />}
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
              isFirst
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
        component={TransactionsScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab
              focused={focused}
              iconName={"stock"}
              labelText="Tran..."
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomItemTab
              focused={focused}
              iconName={"chat"}
              labelText="Chat"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
