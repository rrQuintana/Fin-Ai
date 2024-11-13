import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import React, { useState, useRef, useEffect } from "react";
import CustomInput from "@components/general/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useUser } from "@hooks/useUser";
import { useLLM, LLAMA3_2_1B_URL, ChatMessage } from "react-native-executorch";

export default function Chat() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const { navigate } = useNavigation<Nav>();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(MockChat);
  const { username } = useUser();

  // Create a reference for the ScrollView
  const scrollViewRef = useRef<ScrollView>(null);

  const [userInput, setUserInput] = useState("");
  const llama = useLLM({
    modelSource: LLAMA3_2_1B_QLORA_URL,
    tokenizerSource: require("../assets/tokenizer.bin"),
    contextWindowLength: 6,
  });
  const textInputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (llama.response && !llama.isModelGenerating) {
      appendToMessageHistory(llama.response, "ai");
    }
  }, [llama.response, llama.isModelGenerating]);

  const appendToMessageHistory = (input: string, role: SenderType) => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: input, from: role },
    ]);
  };

  const sendMessage = async () => {
    appendToMessageHistory(userInput.trim(), "user");
    setUserInput("");
    textInputRef.current?.clear();
    try {
      await llama.generate(userInput);
    } catch (e) {
      console.error(e);
    }
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
            {chatHistory.length ? (
            <View>
              <Messages
                chatHistory={chatHistory}
                llmResponse={llama.response}
                isModelGenerating={llama.isModelGenerating}
              />
            </View>
          ) : (
            <View>
              <Text className="mb-5 py-4 px-4 mx-4 rounded-3xl">Hello!</Text>
              <Text className="mb-5 py-4 px-4 mx-4 rounded-3xl">
                What can I help you with?
              </Text>
            </View>
          )}
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
              onPress={(text: string) => setUserInput(text)}
            >
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    </PageLayout>
  );
}
