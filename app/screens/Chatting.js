import { View, Text } from "react-native";
import React from "react";
import ChatScreen from "../components/chat/chat";
import Header from "../components/headers/chatHeader";
import ChatInput from "../components/inputs/message/messageInput";

export default function Chatting() {
  return (
    <>
      <ChatScreen />
      <ChatInput />
    </>
  );
}
