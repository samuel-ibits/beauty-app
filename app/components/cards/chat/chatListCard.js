import React from "react";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");

const ChatCard = ({ image, name, status, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width * 0.9,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ddddddee",
        borderWidth: 1,
        marginVertical: 5,
      }}
    >
      <Image
        source={image} // Use the image prop directly
        style={{ width: 42, height: 42, borderRadius: 21, borderWidth: 1 }}
      />
      <View style={{ marginLeft: 12 }}>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 11,
            fontWeight: "400",
            width: 88,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 9,
            fontWeight: "400",
            color: "#00000099",
            height: 13,
          }}
        >
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
