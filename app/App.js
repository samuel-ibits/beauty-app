import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import * as Font from "expo-font";
import Slider from "./components/slider/mainSlider/slider";
import Card from "./components/cards/chat/chatListCard";
import Header from "./components/headers/profileHeader";
import Chat from "./components/chat/chat";
import UserProfileCard from "./components/user/dpAndName";
import SubProfile from "./components/subProfile/subProfile";
import NotificationPopUp from "./components/notificationPopUp/notificationPopUp";

const CustomText = ({ text, color }) => {
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
      <Header />
      <UserProfileCard
        username="Kathryn Murphy"
        profilePhotoUrl="https://randomuser.me/api/portraits/women/68.jpg"
      />
      <SubProfile />
      <NotificationPopUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "Poppins", // Use the same name used in Font.loadAsync
    fontSize: 21,
    fontWeight: "200",
    lineHeight: 28,
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default CustomText;
