import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from './NavBar'
import CreditCard from './CreditCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 15 }}>
      <NavBar />
      <CreditCard />
    </SafeAreaView>
  )
}

export default Home