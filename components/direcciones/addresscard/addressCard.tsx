import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { AddressInterface } from "@interfaces/AddressInterface";

export default function AddressCard({street, secondary_info} : AddressInterface) {
    return(
        <View className={Platform.OS === 'ios' ? "bg-white my-2 w-10/12 p-3 rounded-xl flex flex-row shadow" : "bg-white my-2 w-10/12 p-4 rounded-full flex flex-row shadow shadow-black"}>
            <View className="flex-auto w-3/4 ">
                <Text className="">
                    {street}
                </Text>
                <Text className="text-gray-600 ">
                    {secondary_info}
                </Text>
            </View>

            <View className="flex-auto w-1/4 items-center justify-center">
                <TouchableOpacity>
                    <Text className="text-finai text-right">
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}