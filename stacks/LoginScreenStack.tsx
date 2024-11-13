import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import ForgotPassword from "@pages/ForgotPassword";
import ConfirmEmail from "@pages/ConfirmEmail";
import ConfirmResetPassword from "@pages/ConfirmResetPassword";

const LoginStack = createNativeStackNavigator();

function LoginScreenStack() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStack.Screen name="ConfirmResetPassword" component={ConfirmResetPassword}/>
    </LoginStack.Navigator>
  );
}

export default LoginScreenStack;
