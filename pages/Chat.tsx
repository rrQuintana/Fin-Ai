import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import React, { useState, useRef } from "react";
import CustomInput from "@components/general/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useUser } from "@hooks/useUser";

const MockChat = [
  {
    id: 1,
    sender: "User",
    message: "Hello!",
  },
  {
    id: 2,
    sender: "FinAI",
    message: "Hi there! How can I help you today?",
  },
  {
    id: 3,
    sender: "User",
    message: "I need to know if I can afford a new car.",
  },
  {
    id: 4,
    sender: "FinAI",
    message: "Based on your budget, I would recommend saving up for a few more months before making a decision.",
  },
];

export default function Chat() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(MockChat);
  const { username } = useUser();

  // Create a reference for the ScrollView
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = () => {
    // Add the user's message to the chat
    setChat((prevChat) => [
      ...prevChat,
      {
        id: prevChat.length + 1,
        sender: "User",
        message: newMessage,
      },
    ]);
    setNewMessage("");

    // Scroll to the end after the user's message
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Add the FinAI's response with a delay
    setTimeout(() => {
      setChat((prevChat) => [
        ...prevChat,
        {
          id: prevChat.length + 1,
          sender: "FinAI",
          message: "You're welcome!",
        },
      ]);

      // Scroll to the end after the FinAI's reply
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 500);
  };

  return (
    <PageLayout title="FinAI Chat" display={true}>
      <>
        <View style={{ height: "85%" }}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 10,
            }}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
          >
            {chat.map((chat) => (
                <View
                key={chat.id}
                className={`mb-5 py-4 px-4 mx-4 rounded-3xl ${
                  chat.sender === "User" ? "self-end bg-[#231f20]" : "self-start bg-gray-300"
                }`}
                >
                <Text
                className={`${chat.sender === "User" ? "text-right text-gray-200" : "text-left"}`}
                >{`${chat.sender}: ${chat.message}`}</Text>
                </View>
            ))}
          </ScrollView>
          <View className="flex-row border-t border-gray-200 px-5">
            <CustomInput
              placeholder="Type your message here..."
              onChangeText={(text) => setNewMessage(text)}
              value={newMessage}
              fixedSize={280}
            />
            <TouchableOpacity
              className="bg-black rounded-3xl w-14 h-14 mt-8 items-center justify-center ml-4"
              onPress={handleSendMessage}
            >
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    </PageLayout>
  );
}
