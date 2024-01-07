import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const BackgroundImage = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        style={styles.background}
      />
      
      <View style={styles.overlay} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    zIndex: 1,
  },
  circle: {
    position: "absolute",
    width: 350,
    height: 350,
    top: "53%",
    left: "70%",
    backgroundColor: "#999999cc",
    backgroundBlendMode: "screen",
    borderRadius: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent", // Set the color you want for the overlay
    zIndex: 3, // Higher zIndex to be above the circle
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    position: "absolute",
    width: 350,
    height: 350,
    top: "53%",
    left: "70%",
    backgroundBlendMode: "screen",
    borderRadius: 200,
    zIndex:1
  },
});

export default BackgroundImage;
