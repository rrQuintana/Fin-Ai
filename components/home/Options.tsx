import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { OptionProps } from '@interfaces/optionsInterface';

const options = [
  {
    name: 'Movimientos',
    icon: 'card',
    route: 'Transactions'
  },
  {
    name: 'Presupuestos',
    icon: 'wallet',
    route: 'Budgets'
  },
  {
    name: 'Recordatorios',
    icon: 'notifications',
    route: 'Reminders'
  },
]

const OptionButton = ({ name, icon, route }: OptionProps) => {
  return (
    <TouchableOpacity className='flex items-center mr-4'>
      <View className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
        <Ionicons name={icon} size={20} />
      </View>
      <Text className='text-sm mt-2 font-medium'>{name}</Text>
    </TouchableOpacity>
  )
}


const Options = () => {
  return (
    <View className="my-5">
      <FlatList
        data={options}
        renderItem={({ item }) => <OptionButton key={item.route} {...item} />}
        keyExtractor={item => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Options