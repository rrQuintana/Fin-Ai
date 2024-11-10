import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import PageLayout from "@components/layout/PageLayout";
  import React, { useState } from "react";

  export default function Chat() {
    type Nav = {
      navigate: (value: string) => void;
    };
  
    const { navigate } = useNavigation<Nav>();
  
    return (
      <PageLayout title="Chat" display={true}>
        <>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View className=" px-4">
            </View>
          </ScrollView>
        </>
      </PageLayout>
    );
  }
  