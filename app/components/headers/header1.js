import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [hasNotification, setHasNotification] = React.useState(true);

  return (
    <View
      style={{
        width: "100%",
        height: 82,
        padding: 18,
        backgroundColor:
          "linear-gradient(88.62deg, rgba(186, 130, 119, 0.1) -13.89%, rgba(242, 184, 173, 0.1) 23.66%, rgba(252, 223, 217, 0.1) 70.04%, rgba(247, 204, 196, 0.1) 93.51%)",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/dp.png")}
          style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1 }}
        />
        <View style={{ marginLeft: 11 }}>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 11,
              fontWeight: "400",
              width: 83,
              height: 17,
              color: "#323232CC",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: "600",

              color: "#323232CC",
            }}
          >
            John
          </Text>
        </View>
      </View>

      {hasNotification && (
        <View
          style={{
            position: "absolute",
            top: 35,
            right: 23,
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: "#BA8277",
            zIndex:3
          }}
        />
      )}
      <Ionicons
        name="ios-notifications-outline"
        size={25}
        color="#323232CC"
        style={{ marginLeft: "auto", marginTop: -35 }}
      />
    </View>
  );
};

export default Header;
