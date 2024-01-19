import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <ImageBackground
      source={require("../../assets/background1.png")}
      style={{ width: "100%", height: 133 }}
    >
      <View
        style={{
          width: "100%",
          height: 133,
          padding: 21,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 325,
          backgroundColor:
            "linear-gradient(88.62deg, rgba(186, 130, 119, 0.1) -13.89%, rgba(242, 184, 173, 0.1) 23.66%, rgba(252, 223, 217, 0.1) 70.04%, rgba(247, 204, 196, 0.1) 93.51%), linear-gradient(173.54deg, rgba(255, 255, 255, 0) 5.09%, rgba(255, 255, 255, 0.2) 83.47%)",
        }}
      >
        <TouchableOpacity style={{ position: "absolute", top: 23, left: 28 }}>
          <Ionicons name="arrow-back" size={25} color="#323232" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 22,
            fontWeight: "600",
            color: "#323232",
            textAlign: "center",
          }}
        >
          Explore
        </Text>

        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 11,
            fontWeight: "400",
            color: "#323232",
            textAlign: "center",
          }}
        >
          Explore beautiful make up artists around naija
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
