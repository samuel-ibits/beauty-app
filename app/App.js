import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Animated } from "react-native";
import * as Font from "expo-font";
import Screen from "./screens/Homepage";

import Popup from "./components/notificationPopUp/notificationPopUp";
import BottomNav from "./navigation/bottomTab/index";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
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
      <StatusBar />
      <BottomNav />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default App;
