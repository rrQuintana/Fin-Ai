import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gender } from '@/logic/types/UserOnboardingData'

const CustomSelectField = ({ options, selected, onChange }: any) => {
  return (
    <View>
      {Object.values(options).map((option) => (
        <TouchableOpacity
          onPress={() => onChange(option)}
          className={`flex items-center0 mb-3 p-5 rounded-full ${selected === option ? 'bg-zinc-300' : 'bg-zinc-100'}`}>
          <Text className='tex-lg font-semibold'>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CustomSelectField