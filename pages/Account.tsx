import React from "react";
import {
  Text,
  View,
  ScrollView as Scroll,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomTouchable from "@components/general/CustomTouchable";
import Edit from "@assets/icons/Edit.svg";
import Lock from "@assets/icons/Lock.svg";
import Support from "@assets/icons/Support.svg";
import LogOut from "@assets/icons/LogOut.svg";
import PinProfile from "@assets/icons/pinProfile.svg";
import { useUser } from "@hooks/useUser";
import PageLayoutButton from "@components/layout/PageLayoutButton";
import PageLayout from "@components/layout/PageLayout";
import DefaultProfileImage from "@assets/images/defaultProfile.jpeg";
import { ScrollView } from "react-native";

export default function Account() {
  const { username, email, signOut } = useUser();

  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <PageLayout title="My profile" display={true}>
      <>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center px-4 mt-5">
            <View>
              <Image
                className="rounded-full w-36 h-36 border-4"
                style={{ borderColor: "#231f20" }}
                source={DefaultProfileImage}
              />
            </View>
            <Text
              className="text-[#231f20]"
              style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}
            >
              {username || ""}
            </Text>
            <Text style={{ fontSize: 18, color: "grey", marginTop: 5 }}>
              {email || ""}
            </Text>
          </View>
          <View className="mt-10 px-4">
            <CustomTouchable
              text="Update Password"
              icon={Lock}
              onPress={() => navigate("UpdatePassword")}
            />
            <CustomTouchable text="Support" icon={Support} />
            <CustomTouchable text="Sign Out" icon={LogOut} onPress={signOut} />
          </View>
        </ScrollView>
      </>
    </PageLayout>
  );
}
