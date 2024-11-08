import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { resetPassword, type ResetPasswordOutput } from "aws-amplify/auth";
import { useNavigation } from "@react-navigation/native";
import Email from "@assets/images/emailConfirmation.svg";

export default function ForgotPassword() {
  type Nav = {
    navigate: (value: string, params?: { username: string }) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [username, setUsername] = useState("");

  async function handleResetPassword() {
    try {
      const output = await resetPassword({ username });
      handleResetPasswordNextSteps(output);
      navigate("ConfirmResetPassword", { username: username });
    } catch (error) {
      console.log(error);
    }
  }

  function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        console.log("Successfully reset password.");
        break;
    }
  }

  return (
    <SafeAreaView className="bg-gray-400 flex-1 items-center justify-center">
      <View className="bg-[#231f20] p-4 w-screen h-screen mt-32 items-center justify-start" style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
        <Text className="text-white text-center text-4xl font-semibold mt-10">
          ¿Olvidó su contraseña?
        </Text>
        <TextInput
          className="bg-[#231f20] w-80 h-14 border-b-2 border-white text-center text-white text-lg my-10 px-4"
          placeholder="Correo electrónico"
          placeholderTextColor="#D0D0D0"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity onPress={handleResetPassword} className="bg-white py-2 px-4 rounded-full mt-6">
          <Text className="text-[#231f20] mx-20 my-1 font-medium text-xl">
            Enviar
          </Text>
        </TouchableOpacity>
        <Email style={{ position: "absolute", bottom: 64, right: 8 }} />
      </View>
    </SafeAreaView>
  );
}
