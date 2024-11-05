import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  title?: string; // Optional title for the divider
};

const Divider = ({ title }: Props) => {
  return (
    <View className="flex items-center my-4">
      {title && (
        <Text className="text-gray-500 text-sm mb-2">{title}</Text>
      )}
      <View className="w-full border-t border-gray-300" />
    </View>
  );
};

export default Divider;
