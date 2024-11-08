import {
    Text,
    SafeAreaView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useRoute, useNavigation } from "@react-navigation/native";
  import { useState } from "react";
  import {
    confirmResetPassword
  } from 'aws-amplify/auth';
  import Email from "@assets/images/emailConfirmation.svg"
  
  export default function ConfirmEmail() {
    const route = useRoute();
    const { username } = route.params as { username: string };

    type Nav = {
        navigate: (value: string) => void;
    };

    const { navigate } = useNavigation<Nav>();
    const [confirmationCode, setConfirmationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function handleConfirmResetPassword() {
        try {
            await confirmResetPassword({ username, confirmationCode, newPassword });
            navigate("Login");
        } catch (error) {
          console.log(error);
        }
      }
      
    return (
      <SafeAreaView className="bg-gray-400 flex-1 items-center justify-center">
      <View className="bg-WaTou p-4 w-screen h-screen mt-32 items-center justify-start" style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
          <Text className="text-white text-center text-3xl font-semibold mt-10">
            Restaura tu contraseña
          </Text>
          <Text className="text-white text-center text-base font-regular mt-6">
            Hemos enviado el código de confirmación a {username}
          </Text>
          <TextInput
            value={confirmationCode}
            onChangeText={setConfirmationCode}
            className="bg-Watou w-80 h-14 border-b-2 border-white text-center text-white text-lg my-6 px-4"
            placeholder="Código de confirmación"
            placeholderTextColor='#D0D0D0'
            maxLength={6}
          />
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword}
            className="bg-Watou w-80 h-14 border-b-2 border-white text-center text-white text-lg my-4 px-4"
            placeholder="Nueva contraseña"
            placeholderTextColor='#D0D0D0'
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handleConfirmResetPassword} className="bg-white py-2 px-4 rounded-full mt-6">
            <Text className="text-WaTou mx-20 my-1 font-medium text-xl">Confirmar</Text>
          </TouchableOpacity>
          <Email style={{ position: 'absolute', bottom:64, right: 8 }} />
        </View>
      </SafeAreaView>
    );
  }
  