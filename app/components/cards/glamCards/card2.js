import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

const Card = () => {
  const [isHeartFilled, setIsHeartFilled] = React.useState(false);
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("../../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("../../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
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
    <View
      style={{
        width: 178,
        height: 118,
        borderRadius: 43,
      }}
    >
      <Image
        source={require("../../../assets/makeup2.png")}
        style={{
          width: '100%',
          height: 217,
          borderRadius:8
        }}
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 1,
          right: 1,
        }}
        onPress={() => setIsHeartFilled(!isHeartFilled)}
      >
        <View
          style={{
            width: 20,
            height: 20,
            padding: 4,
            borderRadius: 10,
            margin: 10,
            backgroundColor: "#00000042",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <AntDesign
            name={isHeartFilled ? "heart" : "hearto"}
            size={9}
            color={isHeartFilled ? "red" : "white"}
          />
        </View>
      </TouchableOpacity>

      <Text
        style={{
          width: 44,
          height: 11,
          fontFamily: "Poppins-Bold",
          fontSize: 7,
          fontWeight: "600",
          color: "#00000099",
          marginVertical:5
        }}
      >
        Style by tera
      </Text>
    </View>
  );
};

export default Card;
