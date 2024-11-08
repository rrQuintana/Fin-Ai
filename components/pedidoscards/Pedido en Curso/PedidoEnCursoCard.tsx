import React from "react";
import { View, Text, Platform } from "react-native";
import { PedidoCardInterface } from "@interfaces/pedidoCardInterface";
import DestinationMarker from "@assets/icons/destinationMarker-Green.svg";
import DashedLine from "@assets/icons/dashed-line.svg";
import WatouLogo from "@assets/images/logoPlainBG.svg"

export default function PedidoEnCursoCard(pedido: PedidoCardInterface) {
  return (
        <View
          className={
            Platform.OS === "ios"
              ? "bg-white rounded-3xl p-4 m-4 shadow border border-[#CAE817]"
              : "bg-white rounded-3xl p-4 m-4 shadow shadow-black border border-[#CAE817]"
          }
        >
          <View className="flex flex-row">
            <View className="flex justify-between w-3/5 space-y-5">
              <View className="self-start space-y-2">
                <Text className="text-green-500 text-lg font-extrabold">
                  {pedido.estatus}
                </Text>
                <View className=" flex flex-row items-center">
                  <View className="bg-WaTou h-5 w-5 rounded-full"></View>
                  <DashedLine width={100}/>
                  <DestinationMarker />
                </View>
              </View>

              <View className="self-start flex flex-row items-center space-x-2">
                <WatouLogo width={28} height={28}/>
                <Text className="text-gray-500">Conductor: Jorge</Text>
              </View>
            </View>

            <View className="flex w-2/5 justify-between">
              <View className="self-end">
                <Text className="text-WaTou text-right text-lg font-bold">
                  MXN ${pedido.precio}
                </Text>
              </View>

              <View className="self-end">
                <Text className="text-gray-500 text-xl font-semibold text-right">
                  {pedido.capacidad} lts
                </Text>
                <Text className="text-gray-500 text-md text-right font-extralight">
                  {pedido.fecha}
                </Text>
              </View>
            </View>
          </View>
        </View>
  );
}
