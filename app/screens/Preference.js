import { View, Text } from "react-native";
import React from "react";
import Header from "../components/headers/preferenceHeader";
import Prefer from "../components/preference/preference";

export default function Preference() {
  return (
    <View style={{flex:1}}>
      <Header title={"Preferences"} />
      <Prefer />
    </View>
  );
}
