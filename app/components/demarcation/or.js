import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import * as Font from "expo-font";
const OrDemarcation = () => {
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
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.orText}>or</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    width:57,
    height: 1,
    backgroundColor: '#050505',
  },
  orText: {
    marginHorizontal: 10,
    color: '#050505',
    fontFamily: "Poppins",
    fontWeight:'400'
  },
});

export default OrDemarcation;
