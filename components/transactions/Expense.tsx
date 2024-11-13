import { View, Text } from 'react-native';
import React from 'react';
import { groupExpencesByCategory } from '@src/utils/groupTransactions';

const Expense = ({ data, transactions }: {data: any, transactions: any}) => {

  const formatCurrency = (amount: number) => {
    return `$${amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const groupedExpenses = groupExpencesByCategory(transactions);

  return (
    <View className="px-2 mt-2">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-lg">Monthly Expenses</Text>
      </View>
      <Text className="text-4xl font-semibold">{formatCurrency(parseInt(data?.usedCredit.replace("$", "")))}</Text>
      <View className="my-6">
      {groupedExpenses.slice(0, 4).map((category, index) => (
          <View key={index} className="mb-2 flex flex-row justify-between">
        <Text className="text-sm font-semibold text-gray-700">{category.categoryName}</Text>
        <Text className="text-sm font-semibold text-blue-600">
          {category.totalAmount}
        </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Expense;