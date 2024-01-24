import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import * as Font from "expo-font";
const Header = ({onPress}) => {
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
        <TouchableOpacity onPress={onPress} style={{padding:10}}>
          <Image
            source={require("../../assets/bell-icon.png")}
            style={{
              width: 20,
              height: 20,
              zIndex: 4,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;
