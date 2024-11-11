import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { BudgetItem, budgetItems } from 'mocks/butget';

type Props = {}

const BudgetItemComponent = ({ title, limit, spent }: BudgetItem) => {
  const progress = (spent / limit) * 100;

  // Determinamos el color de la barra según el porcentaje de gasto
  const progressColor =
    progress < 50 ? "bg-emerald-500" : progress < 80 ? "bg-yellow-500" : "bg-red-500";

  return (
    <View className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <View className="flex flex-row justify-between mb-2">
        <View>
          <Text className="text-zinc-800 text-lg font-bold">{title}</Text>
          <Text className="text-zinc-500 text-sm">Total Budget: ${limit}</Text>
        </View>
        <View>
          <Text className="text-zinc-500 text-sm">Remaining</Text>
          <Text className="text-lg font-semibold text-right text-emerald-600">${limit - spent}</Text>
        </View>
      </View>

      <View className="relative mt-2 h-4 rounded-full bg-zinc-200">
        <View
          style={{ width: `${progress}%` }}
          className={`absolute h-full rounded-full ${progressColor}`}
        />
      </View>

      <View className="flex flex-row justify-between mt-1">
        <Text className="text-xs text-zinc-500">Spent: ${spent}</Text>
        <Text className="text-xs text-zinc-500">{Math.round(progress)}%</Text>
      </View>
    </View>
  );
};

const Budgets = (props: Props) => {
  const navigation = useNavigation();

  const totalLimit = budgetItems.reduce((acc, budget) => acc + budget.limit, 0);
  const totalSpent = budgetItems.reduce((acc, budget) => acc + budget.spent, 0);
  const totalRemaining = budgetItems.reduce((acc, budget) => acc + budget.remaining, 0);

  const progress = (totalSpent / totalLimit) * 100;

  const progressColor =
    progress < 50 ? 'bg-emerald-500' : progress < 80 ? 'bg-yellow-500' : 'bg-red-500';


  return (
    <SafeAreaView className='flex flex-1'>
      <View className="flex flex-row justify-between px-3 items-center border border-transparent border-b-zinc-300">
        <Ionicons name='arrow-back' size={24} color='black' onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
          Budgets
        </Text>
        <Ionicons name='arrow-back' size={24} color='transparent' />
      </View>
      <ScrollView className="p-3 space-y-5 flex-1 mb-12" showsVerticalScrollIndicator={false}>
        <View className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <Text className="text-lg font-semibold">Your activity</Text>

          <View className="w-full px-4 py-3 rounded-lg">
            <Text className="font-bold text-lg text-zinc-800">General Overview</Text>
            <View className="relative mt-2 h-4 rounded-full bg-zinc-200">
              <View
                style={{ width: `${progress}%` }}
                className={`absolute h-full rounded-full ${progressColor}`}
              />
            </View>
          </View>

          <View className="flex flex-row justify-between mt-2">
            <View>
              <Text className="text-zinc-700">Total Spent Budget</Text>
              <Text className="text-lg font-semibold">${totalSpent}</Text>
            </View>
            <View>
              <Text className="text-zinc-700">Total Remaining</Text>
              <Text className="text-lg font-semibold text-right">${totalRemaining}</Text>
            </View>
          </View>
        </View>

        <View className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <Text className='text-2xl font-semibold'>Getting high!</Text>
          <Text className='text-lg'>You are getting high on your budget. You have spent all your budget for this month.</Text>
        </View>

        <View>
          {
            budgetItems.map((item, index) => (
              <BudgetItemComponent key={index} {...item} />
            ))
          }
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Budgets