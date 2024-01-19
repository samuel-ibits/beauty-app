import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const Termsandcondition = ({ onPress }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("./../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
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
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>By verifying you agree to </Text>
      <Text style={styles.signupText}>Terms & condition of Glamhub</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    // bottom: 30,
    // position: "absolute",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: "300",
    lineHeight: 20,
    textAlign: "center",
    color: "#000000",
  },
  signupText: {
    fontFamily: "Poppins-Bold",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center",
    color: "#000000", // You can replace this with the linear gradient style if needed
  },
});

export default Termsandcondition;
