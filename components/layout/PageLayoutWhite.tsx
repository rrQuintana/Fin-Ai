import React from "react";
import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import { LayoutInterface } from "@interfaces/pageLayoutInterfaces";
import Animated, { FadeInUp } from "react-native-reanimated"
import ArrowBack from "@assets/icons/ArrowBack.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@components/general/BackButton";

export default function PageLayoutButton({
    children,
    title,
}: LayoutInterface) {

    const { height } = useWindowDimensions();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="w-full flex flex-row  justify-between items-center  pt-4">
                <BackButton/>
                <Animated.Text  entering={FadeInUp.duration(1000)} className={`font-bold text-black ${height > 667 ? 'text-4xl' : 'text-2xl' } `}>{title}</Animated.Text>
                <View className="mr-4"/>
                  
            </View>

            <View className="pt-7 flex-1 items-center justify-start px-6">
                {children}
            </View>
        </SafeAreaView>
    );
}


