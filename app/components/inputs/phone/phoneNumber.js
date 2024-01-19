import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import * as Font from "expo-font";

export default function PhoneNumber({ value, onChangeText }) {
  const phoneInputRef = useRef(null);
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("./../../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
        // Add other styles or weights if needed
      });

      setIsFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={value}
        defaultCode="NG"
        layout="first"
        onChangeText={onChangeText}
        withDarkTheme
        withShadow
        containerStyle={styles.phoneInputContainer}
        textInputStyle={styles.phoneInputText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  phoneInputContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "100%",
  },
  phoneInputText: {
    fontSize: 13,
    color: "#333",
    fontFamily: "Poppins",
  },
});
