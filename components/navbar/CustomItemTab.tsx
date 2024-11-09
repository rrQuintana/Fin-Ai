import React from 'react';
import { View, Text } from "react-native";
import { customViewTab } from "@assets/styles/NavBarStyles";
import { imageMapping } from "./IconsMapping";
import { CustomItemTabProps } from "@interfaces/NavBarInterfaces";

export default function CustomItemTab({ focused, iconName, labelText }: CustomItemTabProps) {
  
  const icon = imageMapping[iconName];

  return (
    <View style={{ ...customViewTab, backgroundColor: focused ? "#403e3e" : "#231f20", flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
      {icon}
      {focused && <Text style={{ color: 'white', marginLeft: 3 }}>{labelText}</Text>}
    </View>
  );
}
