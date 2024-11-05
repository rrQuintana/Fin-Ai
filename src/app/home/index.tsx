import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from './NavBar'
import CreditCard from './CreditCard'
import Options from './Options'
import Divider from '@/components/Divider'
import DiscoverMore from './DiscoverMore'

type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView className='flex px-4'>
      <NavBar />
      <CreditCard />
      <Options />
      <Divider />
      <DiscoverMore />
    </SafeAreaView>
  )
}

export default Home