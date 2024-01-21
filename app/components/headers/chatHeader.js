import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Header = ({ route, username, lastSeen, phoneNum }) => {
  const { userId, userName, userImage , userStatus} = route.params;

  const navigation = useNavigation();
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./../../assets/Poppins/Poppins-Bold.ttf"),
      });
      setIsFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }
  const handleCall = () => {
    let phoneNumber = phoneNum;
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
        <TouchableOpacity
          style={{ position: "absolute", top: 22, left: -18 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
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
            source={userImage}
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
              {userName}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 9,
                fontWeight: "400",
                color: "#00000099",
              }}
            >
              {userStatus}
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
