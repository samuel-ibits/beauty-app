import { View, Text } from "react-native";
import React from "react";
import Header from "../components/headers/preferenceHeader";
import Component from "../components/accounts/accounts";

export default function Language() {
  return (
    <View style={{flex:1}}>
      <Header title={"Account"} />
      <Component />
    </View>
  );
}
