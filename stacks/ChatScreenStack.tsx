import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "@pages/Chat";

const ChatStack = createNativeStackNavigator();

function ChatScreenStack() {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

export default ChatScreenStack;
