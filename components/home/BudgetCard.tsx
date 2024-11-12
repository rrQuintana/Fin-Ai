import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconProps } from "@interfaces/FinancialCardInterface";
import moment from "moment";
import { userCreditInterface } from "@interfaces/userInterface";

const Icon = ({ positive, title, value }: IconProps) => {
  return (
    <View className="flex-row items-center px-1 w-full justify-center">
      <View
        className={`w-7 h-7 rounded-full ${positive ? "bg-gray-100" : "bg-red-100"
          } justify-center items-center mr-2`}
      >
        <Text
          className={`text-lg font-extrabold ${positive ? "text-black" : "text-red-600"
            }`}
        >
          {positive ? "$" : "-"}
        </Text>
      </View>
      <View className="flex">
        <Text className="text-xs font-normal text-gray-400">
          {title}
        </Text>
        <Text className="text-sm font-semibold text-white">$ {value}</Text>
      </View>
    </View>
  );
};

export default function BudgetCard({ userCredit }: { userCredit: userCreditInterface }) {
  const creditUsedPercentage =
    (parseInt(userCredit.usedCredit.replace("$", "")) /
      parseInt(userCredit.creditLimit.replace("$", ""))) *
    100;

  return (
    <LinearGradient
      colors={["#12101a", "#2b2738", "#1f1c2c"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
      <View className="flex items-center bg-black/20 w-full">
        <View className="flex justify-center items-center mt-5 mb-3">
          <Text className="text-white text-sm text-center mb-3">
            {moment().format("MMMM-YYYY")}
          </Text>
          <Text className="text-white text-xs text-center">
            Total budget: ${userCredit.creditLimit}
          </Text>
          <Text className="text-white text-4xl font-bold text-center">
            ${userCredit.usedCredit}
          </Text>
        </View>
        <View className="w-full">
          <View className="flex-row h-2 w-full bg-gray-600 rounded-full overflow-hidden">
            <View
              className={`${creditUsedPercentage < 50
                ? "bg-green-500"
                : creditUsedPercentage < 80
                  ? "bg-yellow-500"
                  : "bg-red-500"
                }`}
              style={{
                width: `${creditUsedPercentage}%`,
              }}
            />
          </View>
          <Text className="text-white text-xs text-center mt-2">
            {`${creditUsedPercentage.toFixed(2)}%`} of your monthly budget
          </Text>
          <View className="w-full flex flex-row justify-between mt-2 mb-5 items-center">
            <Icon positive title="Remaining" value={userCredit.currentExpenses} />
          </View>
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
  },
});
