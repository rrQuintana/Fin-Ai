import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transactions from "@pages/Transactions";

const TransactionsStack = createNativeStackNavigator();

function TransactionsScreenStack() {
  return (
    <TransactionsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TransactionsStack.Screen name="Transactions" component={Transactions} />
    </TransactionsStack.Navigator>
  );
}

export default TransactionsScreenStack;
