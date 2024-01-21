import { View, Text } from "react-native";
import React from "react";
import Header from "../components/headers/preferenceHeader";
import Component from "../components/notification/pushNotification";

export default function Notification() {
  return (
    <View style={{flex:1}}>
      <Header title={"Push Notifications"} />
      <Component />
    </View>
  );
}
