import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { updatePassword } from "aws-amplify/auth";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "@components/general/CustomInput";
import Lock from "@assets/icons/Lock.svg";

export default function UpdatePassword() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleUpdatePassword() {
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await updatePassword({ oldPassword, newPassword });
      navigate("Account");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView className="bg-[#231f20] flex-1 items-center justify-center">
      <View
        className="bg-white p-4 w-screen h-screen mt-32 items-center justify-start"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <Text className="text-[#231f20] text-center text-3xl font-semibold mt-10">
          Update Password
        </Text>
        <View className="mt-6">
          <CustomInput
            value={oldPassword}
            onChangeText={setOldPassword}
            placeholder="Current Password"
            secureTextEntry
            icon={Lock}
          />
        </View>
        <View className="mt-6">
          <CustomInput
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="New Password"
            secureTextEntry
            icon={Lock}
          />
        </View>
        <View className="mt-6">
          <CustomInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm new password"
            secureTextEntry
            icon={Lock}
          />
        </View>
        <TouchableOpacity
          onPress={handleUpdatePassword}
          className="bg-[#231f20] py-2 px-4 rounded-full mt-16"
        >
          <Text className="text-white mx-28 my-2 font-medium text-xl">
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
