import {
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import PageLayoutWhite from "@components/layout/PageLayoutWhite";
import DefaultProfileImage from "@assets/images/defaultProfile.jpeg";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "@components/general/CustomInput";
import User from "@assets/icons/User.svg";
import Lock from "@assets/icons/Lock.svg";
import Mail from "@assets/icons/Mail.svg";

export default function EditProfile() {
  const { height } = useWindowDimensions();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleSignUp(data: any) {
    alert(JSON.stringify(data));
  }

  return (
    <PageLayoutWhite title="Información de la cuenta">
      <View className="w-full flex justify-center items-center space-y-2">
        <Image
          className="rounded-full w-36 h-36 border-4"
          style={{ borderColor: "#1C759E" }}
          source={DefaultProfileImage}
        />
        <View className="w-full">
          <Text
            className={`font-bold  text-black ${
              height > 667 ? "text-4xl" : "text-2xl"
            } `}
          >
            Información basica
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="bg-red-500" contentContainerStyle={{
          paddingBottom: 200
        }}>
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
                placeholder="Correo electrónico"
                icon={Mail}
              />
            )}
          />
          {errors.username && (
            <Text className="text-start w-80 text-red-500">
              Campo requerido.
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
                placeholder="Contraseña"
                secureTextEntry
                icon={Lock}
              />
            )}
          />

          {errors.password && (
            <Text className="text-start w-80 text-red-500">
              {errors.password.type === "required" && "Campo requerido."}
              {errors.password.type === "minLength" &&
                "La contraseña debe tener al menos 8 caracteres."}
              {errors.password.type === "pattern" &&
                "La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial."}
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
                  "Las contraseñas no coinciden",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                value={value}
                onChangeText={onChange}
                placeholder="Confirmar contraseña"
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
                placeholder="Nombre Completo"
                icon={User}
              />
            )}
          />

          {errors.name && (
            <Text className="text-start w-80 text-red-500">
              Campo requerido.
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
                placeholder="Teléfono mexicano (10 dígitos)"
                icon={User}
              />
            )}
          />

          {errors.phone && (
            <Text className="text-start w-80 text-red-500">
              Campo requerido.
            </Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit(handleSignUp)}
            className="bg-finai py-2 px-4 rounded-full mt-6"
          >
            <Text className="text-white mx-20 my-2 font-medium text-xl">
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </PageLayoutWhite>
  );
}
