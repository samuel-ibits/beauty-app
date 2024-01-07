import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
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
  const handleCall = () => {
    let phoneNumber = "08146139334";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${phoneNumber}`;
    } else {
      phoneNumber = `telprompt:${phoneNumber}`;
    }

    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Phone number is not available");
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <ImageBackground
      source={require("../../assets/background1.png")}
      style={{ width: "100%", height: 73 }}
    >
      <View
        style={{
          width: "100%",
          height: 73,
          padding: 21,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 35,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={{ position: "absolute", top: 22, left: -18 }}>
          <Ionicons name="arrow-back" size={25} color="#323232" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: -50,
            gap: 5,
          }}
        >
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
            style={{ width: 42, height: 42, borderRadius: 21, borderWidth: 1 }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 11,
                fontWeight: "600",
                color: "#323232",
                lineHeight: 13,
              }}
            >
              Leslie Alexander
            </Text>

            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 9,
                fontWeight: "400",
                color: "#00000099",
              }}
            >
              Active 1 min ago
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleCall}>
          <Image
            source={require("../../assets/call-icon.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;
