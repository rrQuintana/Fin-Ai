import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "@pages/Account";
import UpdatePassword from "@pages/UpdatePassword";

const AccountStack = createNativeStackNavigator();

function AccountScreenStack() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="UpdatePassword" component={UpdatePassword}/>
    </AccountStack.Navigator>
  );
}

export default AccountScreenStack;
