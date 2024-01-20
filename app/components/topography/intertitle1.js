import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

const CustomText = ({ text, color }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Inter: require("./../../assets/Inter/Inter-Regular.ttf"),
        "Inter-Bold": require("./../../assets/Inter/Inter-SemiBold.ttf"),
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

  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,  
    letterSpacing: 0,
    textAlign: 'left'
  },
});

export default CustomText;
