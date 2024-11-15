import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CreditCardProps } from "@interfaces/CreditCardInterface";

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
      return "bg-slate-500";
    default:
      return "bg-[#231f20]";
  }
};

const CreditCard = ({ card, index, onPress }: CreditCardProps) => {
  let creditUsedPercentage = 0;
  const formatCurrency = (amount: number) => {
    return `$${amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };
  const color = cardColorTranslator(card?.color || "black");

  if (card?.type === "Credit" && card?.creditLimit) {
    creditUsedPercentage = (card?.usedCredit / card?.creditLimit) * 100;
  }

  return (
    <TouchableOpacity
      key={index}
      className={`${color} p-4 my-2 rounded-3xl`}
      onPress={onPress}
    >
      <View className="flex-row justify-between">
        <Text className="text-white text-xl font-semibold">
          {card?.bankName}
        </Text>
        <Text className="text-white text-xl font-semibold">
          {formatCurrency(card?.usedCredit)}
        </Text>
      </View>
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white text-lg text-center">
          {card?.cardName} - {card?.type}
        </Text>
        <Text className="text-white text-md font-semibold text-center">
          {card?.creditLimit ? formatCurrency(card?.creditLimit) : ""}
        </Text>
      </View>
      {card?.type === "Credit" ? (
        <View className="my-2">
          <View className="flex-row h-2 w-full bg-gray-600 rounded-full overflow-hidden">
            <View
              className={`${
                creditUsedPercentage < 50
                  ? "bg-green-500"
                  : creditUsedPercentage < 80
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{
                width: `${creditUsedPercentage}%`,
              }}
            />
          </View>
          <Text className="text-white text-xs text-center mt-1">
            {`${creditUsedPercentage.toFixed(2)}%`} of your card limit
          </Text>
        </View>
      ) : (
        <Text className="text-white text-xs text-center mt-1">
          No credit limit
        </Text>
      )}
      <View className="mt-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white text-lg font-semibold">
            Statement Closing Date:
          </Text>
          <Text className="text-white text-lg">
            {card?.statementClosingDate}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-lg font-semibold">
            Payment Due Date:
          </Text>
          <Text className="text-white text-lg">{card?.paymentDueDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCard;
