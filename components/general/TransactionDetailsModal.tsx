import React from 'react';
import { Modal, Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Transaction } from '@src/utils/groupTransactions';
import Ionicons from "@expo/vector-icons/Ionicons";

// Define the screen dimensions to limit the modal size
const { height } = Dimensions.get('window');

const TransactionDetailsModal = ({ transaction, visible, onClose }: { transaction?: Transaction, visible: boolean, onClose: () => void }) => {
  if (!transaction) {
    return null;
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none" // No animation by default
      onRequestClose={onClose} // Close when touched outside the modal
    >
      <View className="flex-1 justify-end items-center bg-black/50 bg-opacity-50">
        <Animated.View className="w-full h-[92%] bg-white rounded-2xl p-6 shadow-xl">
          {/* Modal Header */}
            <Text className="mb-6 text-3xl font-semibold text-center">Transaction Details</Text>

          {/* Transaction Info Section */}
          <View className="space-y-6">
            {/* Category and Icon */}
            <View className="flex-row items-center space-x-4 mx-auto">
              <View className="bg-gray-100 p-4 rounded-full justify-center items-center">
                <Ionicons name={transaction.category.icon as keyof typeof Ionicons.glyphMap} size={30} color="black" />
              </View>
              <Text className="text-xl font-semibold">{transaction.category.name}</Text>
            </View>

            {/* Transaction Name */}
            <View>
              <Text className="text-2xl font-bold text-gray-800">{transaction.name}</Text>
            </View>

            {/* Transaction Amount */}
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-medium text-gray-600">Amount:</Text>
              <Text className={`text-2xl font-bold ${transaction.type === "Gasto" ? 'text-red-600' : 'text-green-600'}`}>
                {transaction.type === "Gasto" ? "-" : "+"} ${transaction.amount}
              </Text>
            </View>

            {/* Transaction Date */}
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-medium text-gray-600">Date:</Text>
              <Text className="text-lg text-gray-700">{transaction.date}</Text>
            </View>
          </View>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} className="bg-blue-600 p-4 rounded-lg items-center mt-auto">
            <Text className="text-white font-bold">Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default TransactionDetailsModal;
