import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const SocialLoginButton = ({ provider, onPress }) => {
  const getIcon = () => {
    switch (provider) {
      case "google":
        return (
          <Image
            source={require("../../assets/google.png")}
            style={styles.iconImage}
          />
        ); // Google color: #DB4437
      case "facebook":
        return <FontAwesome name="facebook" size={24} color="#1877F2" />; // Facebook color: #1877F2
      case "apple":
        return <FontAwesome5 name="apple" size={24} color="#000" />; // Apple color: Black
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => onPress(provider)}
    >
      <View style={styles.iconContainer}>{getIcon()}</View>
      <Text style={styles.buttonText}>
        {provider
          ? `Continue with ${provider.charAt(0).toUpperCase()}${provider.slice(
              1
            )}`
          : "Unknown Provider"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "95%",
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#00000033",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 45,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  buttonText: {
    color: "#333333cc",
    fontSize: 13,
    fontWeight: "400",
  },
});

export default SocialLoginButton;
