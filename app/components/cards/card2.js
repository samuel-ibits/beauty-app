import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View
      style={{
        width: 70,
        height: 89,
        margin: 6,
      }}
    >
      <Image
        source={require("../../assets/dp.png")}
        style={{
          width: 63,
          height: 63,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
          alignItems: "center",
          marginTop:10
        }}
      >
        <Ionicons name="ios-notifications-outline" size={15} color="#BA8277" />
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 13,
            fontWeight: "400",
            lineHeight: 20,
            letterSpacing: 0,
            color: "#000000",
          }}
        >
          John
        </Text>
      </View>
    </View>
  );
};

export default Card;
