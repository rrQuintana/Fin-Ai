import React from 'react';
import { View, Text } from "react-native";
import { customViewTab } from "@assets/styles/NavBarStyles";
import { imageMapping } from "./IconsMapping";
import { CustomItemTabProps } from "@interfaces/NavBarInterfaces";

export default function CustomItemTab({ focused, iconName, labelText }: CustomItemTabProps) {
  
  const icon = imageMapping[iconName];

  return (
    <View style={{ ...customViewTab, backgroundColor: focused ? "#3E8CAF" : "#1C759E", flexDirection: 'row', alignItems: 'center' }}>
      {icon}
      {focused && <Text style={{ color: 'white', marginLeft: 8 }}>{labelText}</Text>}
    </View>
  );
}
