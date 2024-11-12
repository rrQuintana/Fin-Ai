import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ExpenseCategory,
  ExpenseCategoryInfo,
} from "@src/types/ExpenseCategory";
import { useNavigation } from "@react-navigation/native";
import SingleTransaction from "@components/transactions/SingleTransaction";

const sampleData = [
  {
    name: "Amazon",
    amount: 100,
    type: "Expense",
    date: "2021-09-01",
    category: ExpenseCategoryInfo[ExpenseCategory.ONLINE_SHOPPING],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Expense",
    date: "2021-09-02",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORT_AND_VEHICLES],
  },
  {
    name: "Salario",
    amount: 1000,
    type: "Ingreso",
    date: "2021-09-03",
    category: ExpenseCategoryInfo[ExpenseCategory.SAVINGS_AND_INVESTMENT],
  },
  {
    name: "Spotify",
    amount: 10,
    type: "Gasto",
    date: "2021-09-04",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2021-09-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
  {
    name: "Netflix",
    amount: 15,
    type: "Gasto",
    date: "2021-09-05",
    category: ExpenseCategoryInfo[ExpenseCategory.SUBSCRIPTIONS_AND_SERVICES],
  },
];

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
        {sampleData.slice(0, max ?? sampleData.length).map((transaction, index) => (
          <SingleTransaction key={index} transaction={transaction} />
        ))}
      </View>
    </View>
  );
};

export default RecentTransactions;
