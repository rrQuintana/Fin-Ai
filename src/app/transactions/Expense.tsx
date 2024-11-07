import { View, Text } from 'react-native';
import React from 'react';
import { calculateBalance, groupExpencesByCategory } from '@/logic/utils/gropuTransactions';

const Expense = ({ data }) => {
  // Calcular el balance total
  const total = calculateBalance(data);
  const categories = groupExpencesByCategory(data);

  return (
    <View className="px-2">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-lg">Estado del mes</Text>
      </View>
      <Text className="text-4xl font-semibold">{total}</Text>
      <View className="my-6">
        {categories.map((category, index) => (
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
