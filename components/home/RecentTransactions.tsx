import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ExpenseCategory,
  ExpenseCategoryInfo,
} from "@src/types/ExpenseCategory";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const sampleData = [
  {
    name: "Amazon",
    amount: 100,
    type: "Gasto",
    date: "2021-09-01",
    category: ExpenseCategoryInfo[ExpenseCategory.COMPRAS_EN_LINEA],
  },
  {
    name: "Uber",
    amount: 50,
    type: "Gasto",
    date: "2021-09-02",
    category: ExpenseCategoryInfo[ExpenseCategory.TRANSPORTE_Y_VEHICULOS],
  },
  // {
  //   name: "Salario",
  //   amount: 1000,
  //   type: "Ingreso",
  //   date: "2021-09-03",
  //   category: ExpenseCategoryInfo[ExpenseCategory.AHORRO_E_INVERSION],
  // },
  // {
  //   name: "Spotify",
  //   amount: 10,
  //   type: "Gasto",
  //   date: "2021-09-04",
  //   category: ExpenseCategoryInfo[ExpenseCategory.SUSCRIPCIONES_Y_SERVICIOS],
  // },
  // {
  //   name: "Netflix",
  //   amount: 15,
  //   type: "Gasto",
  //   date: "2021-09-05",
  //   category: ExpenseCategoryInfo[ExpenseCategory.SUSCRIPCIONES_Y_SERVICIOS],
  // },
];

const RecentTransactions = () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <View className="max-h-1/5">
      {/* Header */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-lg">Actividad reciente</Text>
        <TouchableOpacity onPress={() => navigate("TransactionsStack")}>
          <Text className="text-zinc-500 text-sm">Ver detalles {">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <View>
        {sampleData.map((transaction, index) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row items-center justify-between p-3 mb-3 bg-white rounded-lg shadow-sm"
          >
            {/* Category Icon */}
            <View className="bg-zinc-200 p-3 rounded-full items-center justify-center">
              <Ionicons
                name={
                  transaction.category.icon as keyof typeof Ionicons.glyphMap
                }
                size={20}
                color="black"
              />
            </View>

            {/* Transaction Details */}
            <View className="flex-1 ml-3">
              <Text className="text-sm font-medium">
                {transaction.category.name}
              </Text>
              <Text className="text-md">{transaction.name}</Text>
            </View>

            {/* Amount */}
            <Text
              className={`${
                transaction.type === "Gasto" ? "text-red-500" : "text-green-500"
              } font-semibold text-right`}
            >
              {transaction.type === "Gasto" ? "-" : "+"} ${transaction.amount}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RecentTransactions;
