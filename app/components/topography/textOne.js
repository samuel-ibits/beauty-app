import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

const CustomText = ({ text, color }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./../../assets/Poppins/Poppins-Bold.ttf"),
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
      <Text style={[styles.text, { color: color || "#FFFFFF" }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.5,
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default CustomText;
