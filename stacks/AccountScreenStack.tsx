import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "@pages/Account";
import UpdatePassword from "@pages/UpdatePassword";
import Address from "@pages/Address";
import EditProfile from "@pages/EditProfile";

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
      <AccountStack.Screen name="Address" component={Address}/>
      <AccountStack.Screen name="EditProfile" component={EditProfile}/>
    </AccountStack.Navigator>
  );
}

export default AccountScreenStack;
