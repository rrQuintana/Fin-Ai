import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

const Icon = ({ positive, title, value }) => {
  return (
    <View className="flex-row items-center px-1">
      <View
        className={`w-7 h-7 rounded-full ${positive ? "bg-green-100" : "bg-red-100"} justify-center items-center mr-2`}
      >
        <Text className={`text-lg font-extrabold ${positive ? "text-green-600" : "text-red-600"}`}>
          {positive ? "+" : "-"}
        </Text>
      </View>
      <View className="flex-col">
        <Text className="text-xs font-normal text-gray-400 mb-0.5">{title}</Text>
        <Text className="text-sm font-semibold text-white">$ {value}</Text>
      </View>
    </View>
  );
};

export default function CreditCard() {
  return (
    <LinearGradient
      colors={["#12101a", "#2b2738", "#1f1c2c"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
      <View className="flex flex-col items-center bg-black/20">
        <View className="flex-1 justify-center items-center mb-3">
          <Text className="text-white text-sm text-center mb-3">{moment().format("MMMM-YYYY")}</Text>
          <Text className="text-white text-4xl font-bold text-center">$ 123,456.78</Text>
        </View>
        <View className="my-2">
          <View className="flex flex-row w-full h-1 px-12 mb-1">
            <View className="w-3/4 h-full bg-green-500" />
            <View className="w-2/4 h-full bg-zinc-500" />
          </View>
          <Text className="text-white text-xs text-center">75% de tu meta mensual</Text>
        </View>
        <View className="w-full flex flex-row justify-between mt-2 p-2 items-center">
          <Icon positive title="Ingresos" value="123,456.78" />
          <Icon positive={false} title="Gastos" value="123,456.78" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    marginBottom: 10,
  }
});