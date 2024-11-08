import React from "react";
import { View, Text, Platform } from "react-native";
import Star from "@assets/icons/star.svg";
import { PedidoCardInterface } from "@interfaces/pedidoCardInterface";

export default function PedidoCompletadoCard(pedido: PedidoCardInterface){
    return(
        <View
          className={
            Platform.OS === "ios"
              ? "bg-white rounded-3xl p-4 m-4 shadow border border-green-400"
              : "bg-white rounded-3xl p-4 m-4 shadow shadow-black border border-green-400"
          }
        >
          <View className="flex flex-row">
            <View className=" flex-1 w-1/2 justify-between">
              <View className="space-y-2 self-start">
                <Text className="text-gray-500 text-lg font-extrabold">
                  {pedido.estatus}
                </Text>
              </View>

              <View className="flex flex-row items-center space-x-3 self-start">
                <View className="flex flex-row space-x-1 items-center">
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                  <Star className="" />
                </View>
                <Text className=" text-lg">5.0</Text>
              </View>
            </View>

            <View className=" flex-1 w-1/2 justify-between">
              <View className="self-end">
                <Text className="text-[#231f20] text-right text-lg font-bold">
                  MXN ${pedido.precio}
                </Text>
              </View>

              <View className="self-end">
                <Text className="text-gray-500 text-xl mt-5 font-semibold text-right">
                  {pedido.capacidad} lts
                </Text>
                <Text className="text-gray-500 text-md text-right font-extralight">
                  {pedido.fecha}
                </Text>
              </View>
            </View>
          </View>
        </View>
    )
}