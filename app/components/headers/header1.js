import React from "react";
import { View, Image, Text, ImageBackground, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NotificationPopup from './../notificationPopUp/notificationPopUp';


const Header = ({User, onPress}) => {
  const [hasNotification, setHasNotification] = React.useState(true);

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: 82,
        padding: 18,
        backgroundColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        position: 'fixed', // or 'absolute' based on your layout requirements
        zIndex: 4,
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
           Hi,{User}
          </Text>
        </View>
      </View>

    
      <Ionicons
        name="ios-notifications-outline"
        size={25}
        color="#323232CC"
        style={{ marginLeft: "auto", marginTop: -35,borderRadius:25/2,padding:10 }}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default Header;
