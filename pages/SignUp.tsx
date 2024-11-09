import React from "react";
import { signUp } from "aws-amplify/auth";
import {
  Text,
  View,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import User from "@assets/icons/User.svg";
import Lock from "@assets/icons/Lock.svg";
import Mail from "@assets/icons/Mail.svg";
import ArrowBack from "@assets/icons/ArrowBack.svg";
import CustomInput from "@components/general/CustomInput";


export default function SignUp() {
  type Nav = {
    navigate: (value: string, params?: { username: string }) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleSignUp() {
    const email = getValues("username");
    const phone_number = "+52" + getValues("phone");

    try {
      await signUp({
        username: email,
        password: getValues("password"),
        options: {
          userAttributes: {
            email,
            phone_number,
            name: getValues("name"),
          },
          autoSignIn: true,
        },
      });

      navigate("ConfirmEmail", { username: email });
    } catch (error: any) {
      const errorMessage = JSON.stringify(error, null, 2);
      if (Platform.OS === "ios") {
        Alert.alert("Error", errorMessage);
      } else {
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      }
    }
  }

  return (
    <View className="bg-[#231f20] flex-1 items-center justify-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={{ borderTopRightRadius: 70, borderTopLeftRadius: 70 }}
          className="bg-white w-full h-full pb-20 mt-20 items-center justify-start"
        >
          <View className="w-full flex flex-row mt-8 justify-around">
            <TouchableOpacity
              onPress={() => navigate("Login")}
              className="mt-1"
            >
              <ArrowBack />
            </TouchableOpacity>
            <Text className="text-[#231f20] text-center text-3xl font-semibold mb-2">
              Sign Up
            </Text>
            <View>
              <ArrowBack style={{ opacity: 0 }} />
            </View>
          </View>
          <Text className="text-black text-center text-md font-medium mb-6">
            Start making better financial decisions
          </Text>
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Email"
                icon={Mail}
              />
            )}
          />
          {errors.username && (
            <Text className="text-start w-80 text-red-500">
              Required field
            </Text>
          )}

          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]+$/,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Password"
                secureTextEntry
                icon={Lock}
              />
            )}
          />

          {errors.password && (
            <Text className="text-start w-80 text-red-500">
              {errors.password.type === "required" && "Required field"}
              {errors.password.type === "minLength" &&
              "Password must be at least 8 characters long."}
              {errors.password.type === "pattern" &&
              "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."}
            </Text>
          )}

          <Controller
            name="confirmpassword"
            control={control}
            rules={{
              required: true,
              validate: {
                matchesPreviousPassword: (value) =>
                  value === getValues("password") ||
                  "Passwords do not match.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Confirm Password"
                secureTextEntry
                icon={Lock}
              />
            )}
          />

          {errors.confirmpassword && (
            <Text className="text-start w-80 text-red-500">
              {errors.confirmpassword.message?.toString()}
            </Text>
          )}

          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Full Name"
                icon={User}
              />
            )}
          />

          {errors.name && (
            <Text className="text-start w-80 text-red-500">
              Required field
            </Text>
          )}

          <Controller
            name="phone"
            control={control}
            rules={{ required: true, maxLength: 10, minLength: 10 }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Mexican Phone Number (10 digits)"
                icon={User}
              />
            )}
          />

          {errors.phone && (
            <Text className="text-start w-80 text-red-500">
              Required field
            </Text>
          )}

          <Text className="text-[#231f20] w-80 mt-10 mb-4">
            By signing up, you agree to our Terms of Service and Privacy Policy{" "}
          </Text>
          <TouchableOpacity
            onPress={handleSubmit(handleSignUp)}
            className="bg-[#231f20] py-2 px-4 rounded-full mt-6"
          >
            <Text className="text-white mx-20 my-2 font-medium text-xl">
              Create Account
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
