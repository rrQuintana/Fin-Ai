import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const RecentActivity = ({data}: {data: any}) => {
  return (
    <View className='max-h-1/5'>
      {/* Header */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-lg">Actividad reciente</Text>
      </View>

      <View>
        {data.map((transaction: any, index: any) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row items-center justify-between p-3 mb-3 bg-white rounded-3xl shadow-sm"
          >
            <View className="bg-zinc-200 p-3 rounded-full items-center justify-center">
              <Ionicons
                name={transaction.category.icon as keyof typeof Ionicons.glyphMap}
                size={20}
                color="black"
              />
            </View>

            <View className="flex-1 ml-3">
              <Text className="text-sm font-medium">{transaction.category?.name}</Text>
              <Text className="text-md">{transaction.name}</Text>
            </View>

            <Text className={`${transaction.type === 'Gasto' ? 'text-red-500' : 'text-green-500'} font-semibold text-right`}>{transaction.type === 'Gasto' ? '-' : '+'} ${transaction.amount}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default RecentActivity