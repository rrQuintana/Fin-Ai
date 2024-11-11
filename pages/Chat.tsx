import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import React, { useState, useRef } from "react";
import CustomInput from "@components/general/CustomInput";
import CustomTouchable from "@components/general/CustomTouchable";
import Ionicons from "@expo/vector-icons/Ionicons";

const MockChat = [
  {
    id: 1,
    sender: "User",
    message: "Hello!",
  },
  {
    id: 2,
    sender: "Bot",
    message: "Hi there! How can I help you today?",
  },
  {
    id: 3,
    sender: "User",
    message: "I need help with my account.",
  },
  {
    id: 4,
    sender: "Bot",
    message: "Sure! Please provide me with your account number.",
  },
  {
    id: 5,
    sender: "User",
    message: "123456789",
  },
  {
    id: 6,
    sender: "Bot",
    message: "Thank you! Please wait a moment.",
  },
  {
    id: 7,
    sender: "User",
    message: "I need help with my recent transactions.",
  },
  {
    id: 8,
    sender: "Bot",
    message: "Sure! Please wait a moment.",
  },

];

export default function Chat() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(MockChat);

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

    // Add the bot's response with a delay
    setTimeout(() => {
      setChat((prevChat) => [
        ...prevChat,
        {
          id: prevChat.length + 1,
          sender: "Bot",
          message: "I'm sorry, I'm not able to help you with that.",
        },
      ]);

      // Scroll to the end after the bot's reply
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 500);
  };

  return (
    <PageLayout title="Chat" display={true}>
      <>
        <View style={{ height: "85%" }}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 100,
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
