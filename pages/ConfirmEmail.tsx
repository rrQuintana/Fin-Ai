import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { autoSignIn, confirmSignUp } from 'aws-amplify/auth';
import Email from "@assets/images/emailConfirmation.svg"

export default function ConfirmEmail() {
  const route = useRoute();
  const { username } = route.params as { username: string };
const [confirmationCode, setConfirmationCode] = useState('');

  async function handleAutoSignIn() {
    try {
      await autoSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignUpConfirmation() {
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username,
        confirmationCode
      });

    if (isSignUpComplete) {
        handleAutoSignIn();
    }
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  return (
    <SafeAreaView className="bg-gray-400 flex-1 items-center justify-center">
      <View className="flex bg-[#231f20] rounded-t-3xl p-4 w-screen h-screen mt-32 items-center justify-start">
        <Text className="text-white text-center text-4xl font-semibold mt-16">
          Confirma tu correo
        </Text>
        <Text className="text-white text-center text-base font-regular mt-12">
          Hemos enviado el código de confirmación a {username}
        </Text>
        <TextInput
          value={confirmationCode}
          onChangeText={setConfirmationCode}
          className="bg-[#231f20] w-80 h-14 border-b-2 border-white text-center text-white text-lg rounded-xl my-10 px-4"
          placeholder="Código de confirmación"
          placeholderTextColor='#D0D0D0'
          maxLength={6}
        />
        <TouchableOpacity onPress={handleSignUpConfirmation} className="bg-white py-2 px-4 rounded-full mt-6">
          <Text className="text-[#231f20] mx-20 my-1 font-medium text-xl">Confirmar</Text>
        </TouchableOpacity>
        <Email style={{ position: 'absolute', bottom:64, right: 8 }} />
      </View>
    </SafeAreaView>
  );
}
