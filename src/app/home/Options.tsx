import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const options = [
  {
    name: 'Cuenta',
    icon: 'person',
    route: 'Account'
  },
  {
    name: 'Categorías',
    icon: 'list',
    route: 'Categories'
  },
  {
    name: 'Metas',
    icon: 'pizza',
    route: 'Goals'
  },
  {
    name: 'Configuración',
    icon: 'settings',
    route: 'Settings'
  },
  {
    name: 'Metas',
    icon: 'pizza',
    route: 'Goals'
  },
  {
    name: 'Configuración',
    icon: 'pizza',
    route: 'Settings'
  }
]

const OptionButton = ({ name, icon, route }) => {
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