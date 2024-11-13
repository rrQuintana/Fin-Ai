import React from 'react'
import { View, Text } from 'react-native'
import SingleTransaction from './SingleTransaction';
import { TransactionInterface } from '@interfaces/TransactionInterface';

const RecentActivity = ({data}: {data: TransactionInterface[]}) => {
  return (
    <View className='max-h-1/5'>
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-lg">
          Recent Transactions
        </Text>
      </View>

      <View>
        {data.map((transaction: any, index: any) => (
          <SingleTransaction key={index} transaction={transaction} />
        ))}
      </View>
    </View>
  )
}

export default RecentActivity