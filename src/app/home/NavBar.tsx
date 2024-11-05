import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
      <View>
        <Text style={{ fontSize: 15, color: 'gray', marginBottom: 10 }}>
          Bienvenido
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          USUARIO
        </Text>
      </View>
      <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'gray' }} />
    </View>
  )
}

export default NavBar