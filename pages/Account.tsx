import React from "react";
import { Text, View, ScrollView as Scroll, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomTouchable from "@components/general/CustomTouchable";
import Edit from "@assets/icons/Edit.svg";
import Lock from "@assets/icons/Lock.svg";
import Support from "@assets/icons/Support.svg";
import LogOut from "@assets/icons/LogOut.svg";
import PinProfile from "@assets/icons/pinProfile.svg";
import { useUser } from "@hooks/useUser";
import PageLayoutButton from "@components/layout/PageLayoutButton";
import DefaultProfileImage from "@assets/images/defaultProfile.jpeg"

export default function Account() {
  const { username, email, signOut } = useUser();

  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <PageLayoutButton title="Mi perfil">
      <Scroll className='w-5/6 mt-4 flex-1' showsVerticalScrollIndicator={false} contentInset={{ bottom: 100, top: 0 }}>
        <View className="items-center ">
          <View>
            <Image
              className="rounded-full w-36 h-36 border-4"
              style={{borderColor : "#1C759E" }}
              source={DefaultProfileImage}
            />
            <View className="absolute bottom-0 right-0">
              <TouchableOpacity className="bg-finai rounded-2xl px-2 py-1"
                onPress={() => console.log('Cambiar Foto')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Cambiar</Text>
              </TouchableOpacity>

            </View>
          </View>
          <Text className='text-finai' style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{username || "Usuario"}</Text>
          <Text style={{ fontSize: 18, color: 'grey', marginTop: 5 }}>{email || "Correo no disponible"}</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <CustomTouchable text="Editar Perfil" icon={Edit} onPress={() => navigate("EditProfile")} />
          <CustomTouchable text="Cambiar Contraseña" icon={Lock} onPress={() => navigate("UpdatePassword")} />
          <CustomTouchable text="Soporte" icon={Support} />
          <CustomTouchable text="Dirección" icon={PinProfile} onPress={() => navigate("Address")} />
          <CustomTouchable text="Cerrar sesión" icon={LogOut} color="red" onPress={signOut} />
        </View>
      </Scroll>
    </PageLayoutButton>
  );
}
