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
import DebitAccount from "@components/home/DebitAccount";
import { DebitAccountInterface } from "@interfaces/DebitAccountInterface";

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
    color: "blue",
  },
  {
    bankName: "American Express",
    type: "Charge",
    cardName: "Platinum Card",
    usedCredit: "$12,300",
    statementClosingDate: 29,
    paymentDueDate: 9,
    color: "gray",
  },
];

const accounts: DebitAccountInterface[] = [
  {
    bankName: "Chase",
    accountName: "Checking",
    balance: "$14,000",
    color: "blue",
  },
  {
    bankName: "Bank of America",
    accountName: "Savings",
    balance: "$20,000",
  },
  {
    bankName: "Wells Fargo",
    accountName: "Checking",
    balance: "$12,300",
    color: "red",
  },
];

export default function Cards() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const [selectedOption, setSelectedOption] = useState("Cards");

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
          <Text className="text-[#231f20] text-center text-2xl font-semibold">
            {selectedOption}
          </Text>
          {/* Add new card */}
          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Text className="text-[#231f20] text-3xl">+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row justify-center my-5 border-black border rounded-3xl">
            <TouchableOpacity
              className="flex-1 items-center py-2 rounded-l-3xl"
              style={{
                backgroundColor:
                  selectedOption === "Cards" ? "#231f20" : "#ffffff",
              }}
              onPress={() => setSelectedOption("Cards")}
            >
              <Text
                style={{
                  color: selectedOption === "Cards" ? "#ffffff" : "#231f20",
                }}
                className=" text-lg font-semibold"
              >
                Cards
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 items-center py-2 rounded-r-3xl"
              style={{
                backgroundColor:
                  selectedOption === "Accounts" ? "#231f20" : "#ffffff",
              }}
              onPress={() => setSelectedOption("Accounts")}
            >
              <Text
                style={{
                  color: selectedOption === "Accounts" ? "#ffffff" : "#231f20",
                }}
                className=" text-lg font-semibold"
              >
                Accounts
              </Text>
            </TouchableOpacity>
          </View>
          {selectedOption === "Cards" &&
            cards.map((card, index) => (
              <CreditCard key={index} card={card} index={index} />
            ))}
          {selectedOption === "Accounts" &&
            accounts.map((account, index) => (
              <DebitAccount key={index} account={account} index={index} />
            ))}
            
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
