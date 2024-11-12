import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SingleTransaction from "@components/transactions/SingleTransaction";
import { sampleTransactions } from "@interfaces/TransactionInterface";

const RecentTransactions = ({max, hideButton}: {max?: number, hideButton?: boolean}) => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <View className="max-h-1/5">
      {/* Header */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-2xl">
          Recent Transactions
        </Text>
        <TouchableOpacity onPress={() => navigate("TransactionsStack")} className={hideButton ? "hidden" : ""}>
          <Text className="text-zinc-500 text-sm">Details {">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <View>
        {sampleTransactions.slice(0, max ?? sampleTransactions.length).map((transaction, index) => (
          <SingleTransaction key={index} transaction={transaction} />
        ))}
      </View>
    </View>
  );
};

export default RecentTransactions;
