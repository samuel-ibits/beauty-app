import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons"; 

const UserProfileCard = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./../../assets/Poppins/Poppins-Bold.ttf"),
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
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://randomuser.me/api/portraits/women/8.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>@ambeauty</Text>
      </View>
      <View style={styles.ratingContainer}>
      <FontAwesome name="star" size={8} color="#FBBC05" />
        <View style={styles.ratingTextContainer}>
          <Text style={styles.ratingText}>5.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:-35,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 68,
    borderWidth: 1,
  },
  header: {
    marginTop: 10,
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  subheader: {
    marginTop: 4,
  },
  subheaderText: {
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#47484A",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
 
  ratingTextContainer: {
    marginLeft: 4,
  },
  ratingText: {
    fontFamily: "Poppins",
    fontSize: 8,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: "#FBBC05",
  },
});

export default UserProfileCard;
