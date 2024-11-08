import React from "react";
import { View, Text, TouchableOpacity, Platform, useWindowDimensions} from "react-native";
import { PiPaCardInterface } from "@interfaces/pipaCardInterfaces";
import Fire from "@assets/icons/Fire.svg"
export default function PipaCard({ capacidad, currency, price, best_seller = false }: PiPaCardInterface) {
  const { height } = useWindowDimensions();

  return (
    <View className={Platform.OS === 'ios' ? 'bg-white rounded-3xl p-4 m-4 shadow' : 'bg-white rounded-3xl p-4 m-4 shadow shadow-black'}>
      <View className='flex flex-row flex-wrap'>
        <Text className={`text-gray-500 ${height > 667 ? 'text-4xl' : 'text-lg'} font-bold w-1/2 p-2`}>{`${capacidad} lts`}</Text>
        <Text className={`text-WaTou text-right ${height > 667 ? 'text-4xl' : 'text-lg'} font-semibold w-1/2 p-2`}>{`${currency} $${price}`}</Text>
      </View>
      <View className='h-4 bg-gray-200 rounded-full my-3'>
        <View className='h-4 bg-WaTou rounded-full' style={{width: `${capacidad/100}%`}} />
      </View>
      <View className="flex flex-row">
      {best_seller ? (
        <View className="w-1/2 p-2 flex flex-row items-center">
          <Fire width={15} height={15} />
          <Text className={`text-WaTou ${height > 667 ? 'text-4xl' : 'text-md'}`}> Más Pedido</Text>
        </View>
      ) : (
        <View className="w-1/2 p-2"></View>
      )}
        <TouchableOpacity  className={`bg-WaTou ${height > 667 ? 'p-2' : 'p-2'} rounded-xl w-1/2 items-center justify-center`}>
          <Text className='text-white text-center font-semibold'>Pedir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
