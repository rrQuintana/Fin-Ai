import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { OptionProps } from '@interfaces/optionsInterface';
import { useNavigation } from '@react-navigation/native';

const options = [
  {
    name: 'Transactions',
    icon: 'card',
    route: 'TransactionsStack'
  },
  {
    name: 'Budgets',
    icon: 'wallet',
    route: 'Budgets'
  },
  {
    name: 'Reminders',
    icon: 'notifications',
    route: 'Reminders'
  },
  {
    name: 'Chat',
    icon: 'chatbox',
    route: 'ChatStack'
  },
]

const OptionButton = ({ name, icon, onPress }: OptionProps) => {
  return (
    <TouchableOpacity className='flex items-center mr-4' onPress={onPress}>
      <View className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
        <Ionicons name={icon} size={20} />
      </View>
      <Text className='text-sm mt-2 font-medium'>{name}</Text>
    </TouchableOpacity>
  )
}


const Options = () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <View className="my-5">
      <FlatList
        data={options}
        renderItem={({ item }) => <OptionButton key={item.route} {...item} onPress={() => navigate(item.route)}/>}
        keyExtractor={item => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Options