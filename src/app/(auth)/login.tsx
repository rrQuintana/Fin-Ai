import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import LargeLogo from "src/assets/images/largeLogo.svg";
import CustomInput from "../../components/general/customInput/CustomInput";
import User from "src/assets/icons/User.svg";
import Lock from "src/assets/icons/Lock.svg";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <SafeAreaView className="bg-WaTou flex-1 items-center justify-center">
      <View
        style={{ borderTopRightRadius: 70, borderTopLeftRadius: 70 }}
        className="bg-white p-4 w-screen h-screen mt-32 items-center justify-start"
      >
        <View className=" mt-10 items-center justify-center">
          <LargeLogo />
          <Text className="text-WaTou text-3xl font-semibold mt-10 mb-5">
            Inicia Sesión
          </Text>
        </View>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          placeholder="Correo electrónico"
          icon={User}
        />
        <View className="mt-10">
          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
            icon={Lock}
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/forgot-password")}
          className="mt-4 w-full justify-self-start pl-10 ml-2"
        >
          <Text className="text-WaTou">Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-WaTou py-2 px-4 rounded-full mt-16"
        >
          <Text className="text-white mx-20 my-2 font-medium text-xl">
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
        <View className="mt-20 flex-row justify-self-start">
          <Text className="text-WaTou">¿Aún no te registras </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text className="text-WaTou underline">Únete al viaje</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
