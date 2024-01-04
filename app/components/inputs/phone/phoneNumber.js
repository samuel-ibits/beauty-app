import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

export default function PhoneNumber() {
  const phoneInputRef = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [value, setValue] = useState("");

  return (
    <View>
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={value}
        defaultCode="NG"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
    </View>
  );
}
