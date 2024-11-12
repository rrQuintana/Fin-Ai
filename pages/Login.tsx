import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LargeLogo from "@assets/images/largeLogo.svg";
import CustomInput from "@components/general/CustomInput";
import User from "@assets/icons/User.svg";
import Lock from "@assets/icons/Lock.svg";
import Landing from "./Landing";
import { useOnboardingStatus } from "@hooks/useOnboardingStatus";

export default function Login() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  const [pivote, setPivote] = useState(false);

  const isFirstLaunch = useOnboardingStatus();

  if (isFirstLaunch && !pivote) {
    return (<Landing setPivote={setPivote} />);
  }

  return (
    <SafeAreaView className="bg-[#231f20] flex-1 items-center justify-center">
      <View
        style={{ borderTopRightRadius: 70, borderTopLeftRadius: 70 }}
        className="bg-white p-4 w-screen h-screen mt-32 items-center justify-start"
      >
        <View className=" mt-10 items-center justify-center">
          <LargeLogo />
          <Text className="text-[#231f20] text-3xl font-semibold mt-10 mb-5">
            Better finances
          </Text>
        </View>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          placeholder="Email"
          icon={User}
        />
        <View className="mt-6">
          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            icon={Lock}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigate("ForgotPassword")}
          className="mt-4 w-full justify-self-start pl-10 ml-2"
        >
          <Text className="text-[#231f20]">Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-[#231f20] py-2 px-4 rounded-full mt-16"
        >
          <Text className="text-white mx-28 my-2 font-medium text-xl">
            Login
          </Text>
        </TouchableOpacity>
        <View className="mt-20 flex-row justify-self-start">
          <Text className="text-[#231f20]">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text className="text-[#231f20] underline">Join FinAI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
