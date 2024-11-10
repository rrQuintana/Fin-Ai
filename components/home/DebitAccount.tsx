import React from "react";
import { View, Text } from "react-native";
import { DebitAccountProps } from "@interfaces/DebitAccountInterface";

const cardColorTranslator = (color: string) => {
  switch (color) {
    case "black":
      return "bg-[#231f20]";
    case "white":
      return "bg-white";
    case "blue":
      return "bg-blue-800";
    case "green":
      return "bg-green-800";
    case "yellow":
      return "bg-yellow-800";
    case "red":
      return "bg-red-800";
    case "gray":
      return "bg-gray-800";
    default:
      return "bg-[#231f20]";
  }
};

const DebitAccount = ({ account, index }: DebitAccountProps) => {
  const color = cardColorTranslator(account.color || "black");

  function formatCurrency(amount: number | undefined) {
    if (typeof amount !== "number") {
      return "$0.00";
    }
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  }

  return (
    <View key={index} className={`${color} p-4 my-2 rounded-3xl`}>
      <View className="flex-row justify-between">
        <Text className="text-white text-2xl font-semibold">
          {account.bankName}
        </Text>
        <Text className="text-white text-2xl font-semibold">
          {formatCurrency(account.balance)}
        </Text>
      </View>
      <View className="flex-row justify-between items-center my-5">
        <Text className="text-white text-lg text-center">
          {account.accountName}
        </Text>
      </View>
    </View>
  );
};

export default DebitAccount;
