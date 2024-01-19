import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LanguageComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Languages</Text>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/solar-user.png')} // Replace with your actual image source
          style={styles.icon}
        />
        <Text style={styles.languageText}>English and Yoruba</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF", // Set your desired background color
    borderRadius: 8,
    marginBottom: 10,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  languageText: {
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
  },
});

export default LanguageComponent;
