import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface CustomRadioProps {
  option1: string;
  option2: string;
  isSmall?: boolean;
  onPressOption1: () => void;
  onPressOption2: () => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  option1,
  option2,
  isSmall,
  onPressOption1,
  onPressOption2,
}) => {
  const [selectedOption, setSelectedOption] = useState(option1);

  return (
    <View className={`flex-row justify-center ${isSmall ? "my-3" : "my-4"} border-black border rounded-3xl`}>
      <TouchableOpacity
        className={`flex-1 items-center py-2 rounded-l-3xl ${isSmall ? "text-sm" : "text-lg"}`}
        style={{
          backgroundColor: selectedOption === option1 ? "#231f20" : "#ffffff",
        }}
        onPress={() => {
          setSelectedOption(option1);
          onPressOption1();
        }}
      >
        <Text
          style={{
            color: selectedOption === option1 ? "#ffffff" : "#231f20",
          }}
          className={`${isSmall ? "text-sm" : "text-lg font-semibold"}`}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-1 items-center py-2 rounded-r-3xl ${isSmall ? "text-sm" : "text-lg"}`}
        style={{
          backgroundColor: selectedOption === option2 ? "#231f20" : "#ffffff",
        }}
        onPress={() => {
          setSelectedOption(option2);
          onPressOption2();
        }}
      >
        <Text
          style={{
            color: selectedOption === option2 ? "#ffffff" : "#231f20",
          }}
          className={`${isSmall ? "text-sm" : "text-lg font-semibold"}`}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadio;
