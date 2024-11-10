import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CreditCard from "@components/home/CreditCard";
import { CreditCardInterface } from "@interfaces/CreditCardInterface";

const cards: CreditCardInterface[] = [
  {
    bankName: "Bank of America",
    type: "Credit",
    cardName: "Travel Rewards",
    usedCredit: "$14,000",
    creditLimit: "$32,000",
    statementClosingDate: 25,
    paymentDueDate: 15,
  },
  {
    bankName: "Chase",
    type: "Credit",
    cardName: "Freedom Unlimited",
    usedCredit: "$20,000",
    creditLimit: "$55,000",
    statementClosingDate: 20,
    paymentDueDate: 10,
  },
  {
    bankName: "Wells Fargo",
    type: "Debit",
    cardName: "Everyday Checking",
    usedCredit: "$1,000",
    creditLimit: "N/A",
    statementClosingDate: 29,
    paymentDueDate: 9,
  },
];

export default function Cards() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <SafeAreaView className="bg-[#231f20] flex-1 items-center justify-center">
      <View
        className="bg-white p-4 w-screen h-screen mt-32"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <View className="flex-row items-center justify-between px-4 my-5">
          <TouchableOpacity
            onPress={() => navigate("Home")}
            className="w-10 h-10 items-center justify-center"
          >
            <Text className="text-[#231f20] text-3xl">←</Text>
          </TouchableOpacity>
          <Text className="text-[#231f20] text-center text-3xl font-semibold">
            Cards
          </Text>
          <Text className="w-10 h-10 opacity-0"></Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {cards.map((card, index) => (
            <CreditCard key={index} card={card} index={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
