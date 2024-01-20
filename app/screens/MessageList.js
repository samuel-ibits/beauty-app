import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "./../components/headers/preferenceHeader";
import SearchInput from "./../components/inputs/search/search";
import ChatCard from "./../components/cards/chat/chatListCard";

export default function MessageListComponent() {
  const chats = [
    {
      id: "1",
      image: require("../assets/dp.png"),
      name: "John Doe",
      status: "Pending",
    },
    {
      id: "2",
      image: require("../assets/dp2.png"),
      name: "Jane Smith",
      status: "Sent",
    },
    {
      id: "3",
      image: require("../assets/dp3.png"),
      name: "Jane Smith",
      status: "Sent",
    },
  ];
  return (
    <View style={{ alignItems: "center" }}>
      <Header title={"Messages"} />
      <SearchInput />
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatCard image={item.image} name={item.name} status={item.status} />
        )}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}
