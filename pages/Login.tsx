import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Modal
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LargeLogo from "@assets/images/largeLogo.svg";
import CustomInput from "@components/general/CustomInput";
import User from "@assets/icons/User.svg";
import Lock from "@assets/icons/Lock.svg";
import Landing from "./Landing";
import { useOnboardingStatus } from "@hooks/useOnboardingStatus";
import CustomTouchable from "@components/general/CustomTouchable";

export default function Login() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      setMfaModal(false);
      await signIn({ username, password });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  const [pivote, setPivote] = useState(false);
  const [mfaModal, setMfaModal] = useState(false);
  const [mfaCode, setMfaCode] = useState("");

  const showMfaModal = () => {
    setMfaModal(true);
  }

  const isFirstLaunch = useOnboardingStatus();

  if (isFirstLaunch && !pivote) {
    return (<Landing setPivote={setPivote} />);
  }

  return (
    <SafeAreaView className="bg-[#231f20] flex-1 items-center justify-center ">
      <Modal
              visible={mfaModal}
              animationType="fade"
              transparent={true}
              onRequestClose={() => setMfaModal(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                  }}
                  className=" rounded-3xl"
                >
                  <Text className="text-2xl text-center font-bold mb-6">
                    Multi-Factor Authentication
                  </Text>
                  <Text className="text-base text-center mb-4 px-2">
                    Please enter the verification code provided by your Authenticator app
                  </Text>
                  <CustomInput
                    value={mfaCode}
                    onChangeText={setMfaCode}
                    placeholder="Verification code"
                    isFixedSize={true}
                    keyboardType="number-pad"
                  />
                  <CustomTouchable
                    color="#231f20"
                    text="Verify"
                    whiteText={true}
                    onPress={handleSignIn}
                  />
                </View>
              </View>
            </Modal>
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
          onPress={showMfaModal}
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
