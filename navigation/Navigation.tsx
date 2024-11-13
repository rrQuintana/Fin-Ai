import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { Amplify } from "aws-amplify";
import { getCurrentUser } from 'aws-amplify/auth';
import amplifyconfig from "@src/amplifyconfiguration.json";
import Tabs from "@tabs/Tabs";
import LoginScreenStack from "@stacks/LoginScreenStack";
import { Hub } from 'aws-amplify/utils';

Amplify.configure(amplifyconfig);

const Stack = createNativeStackNavigator();

export function Navigation() {
  const [user, setUser] = useState(undefined as any);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data: any) => {
      if (data.payload.event === 'signedIn' || data.payload.event === 'signedOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          user ? (
            <Stack.Screen name="HomeStack" component={Tabs} />
          ) : (
            <>
              <Stack.Screen name="LoginStack" component={LoginScreenStack} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
