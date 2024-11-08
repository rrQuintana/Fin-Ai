import React from "react";
import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import { LayoutInterface } from "@interfaces/pageLayoutInterfaces";
import Animated, { FadeInUp } from "react-native-reanimated"
import ArrowBack from "@assets/icons/ArrowBack.svg";
import BellNotification from "@assets/icons/bellNotification.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageLayoutButton({
    children,
    title,
    dontShowArrow = false,
}: LayoutInterface & { dontShowArrow?: boolean }) {

    const { height } = useWindowDimensions();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="w-full flex flex-row  justify-between items-center  pt-4">
                <TouchableOpacity className="ml-8" style={{ opacity: dontShowArrow ? 0 : 1 }}>
                    <ArrowBack />
                </TouchableOpacity>
                <Animated.Text entering={FadeInUp.duration(1000)} className={`font-bold text-[#231f20] ${height > 667 ? 'text-4xl' : 'text-2xl' } `}>{title}</Animated.Text>
                <TouchableOpacity className=" mr-8">
                    <BellNotification />
                </TouchableOpacity>
            </View>

            <View className="pt-7 flex-1 items-center justify-start">
                {children}
            </View>
        </SafeAreaView>
    );
}


