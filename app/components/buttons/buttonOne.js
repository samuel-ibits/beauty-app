import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        colors={[
          "rgba(186, 130, 119, 0.3)",
          "rgba(242, 184, 173, 0.3)",
          "rgba(252, 223, 217, 0.3)",
          "rgba(247, 204, 196, 0.3)",
          "rgba(255, 255, 255, 0.3)",
        ]}
        style={styles.buttonGradient}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "95%",
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  buttonGradient: {
    flex: 1,
    borderRadius: 12,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 19.5,
  },
});

export default CustomButton;
