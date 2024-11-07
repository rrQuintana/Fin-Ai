import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from './NavBar'
import CreditCard from './CreditCard'
import Options from './Options'
import Divider from '@/components/Divider'
import DiscoverMore from './DiscoverMore'
import RecentTransactions from './RecentTransactions'

type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView className='flex px-4'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <CreditCard />
        <Options />
        <Divider />
        <RecentTransactions />
        <Divider />
        <DiscoverMore />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home