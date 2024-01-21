import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const navigation = useNavigation();

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

  const handleNotification = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Notification",
        body: "this is the body of fashion app!",
      },
      trigger: null,
    });
  };
  return (
    <ImageBackground
      source={require("../../assets/background1.png")}
      style={{ width: "100%", height: 73 }}
    >
      <View
        style={{
          width: "90%",
          height: 73,
          padding: 21,
          flexDirection: "row",
          gap: 10,
          marginLeft: 35,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 22, left: -18 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="#323232" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNotification}>
          <Text style={{ fontFamily: "Poppins" }}>Contact</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;
