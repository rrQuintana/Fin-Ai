import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const data = [
  {
    title: 'Cuentas',
    description: 'Administra tus cuentas',
    icon: '🏦',
  },
  {
    title: 'Tarjetas',
    description: 'Administra tus tarjetas',
    icon: '💳',
  },
  {
    title: 'Transferencias',
    description: 'Realiza transferencias',
    icon: '💸',
  },
  {
    title: 'Pagos',
    description: 'Realiza pagos',
    icon: '💰',
  },
]

const Card = ({ title, description, icon }) => {
  return (
    <View>
      <View className='w-64 h-64 bg-gray-200 rounded-lg mr-4'>
        <View className="h-1/2 bg-black rounded-t-md flex items-center justify-center">
          <Text className='text-2xl'>{icon}</Text>
        </View>
        <View className="h-1/2 p-3">
          <Text className='text-lg font-semibold'>{title}</Text>
          <Text className='text-gray-500'>{description}</Text>
        </View>
      </View>
    </View>
  )
}

const DiscoverMore = (props: Props) => {
  return (
    <View>
      <Text className='text-2xl font-semibold mb-3'>Descubre más</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card key={item.title} {...item} />}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default DiscoverMore

const styles = StyleSheet.create({})