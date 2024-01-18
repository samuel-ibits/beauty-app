import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Font from "expo-font";

const UnavailableMessage = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Inter-Regular font file
        "Poppins-bold": require("./../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Inter-Medium font file
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
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={require("../../assets/unavailable.png")}
          style={styles.image}
        />
        <View style={styles.title}>
          <Text style={styles.title}>Unavailable</Text>
        </View>
      </View>
      <View style={styles.message}>
        <Text style={styles.message}>
          Beauty is currently unavailable until Feb 4, 2024
        </Text>
      </View>
      <View>
        <Text  style={styles.message2}>“I’m unavailable, but will be back soon.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    borderRadius: 6,
    boxShadow: "4px 3px 7.5px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    display: "flex",
    maxWidth: 366,
    flexDirection: "column",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  header: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
    flexDirection: "row",
  },
  image: {
    display: "flex",
    width: 16,
    height: 16,
    maxWidth: "100%",
    flexDirection: "column",
  },
  title: {
    color: "#000",
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: "Poppins-bold",
    fontSize: 14,
  },
  message: {
    color: "rgba(0, 0, 0, 0.9)",
    marginTop: 7,
    fontFamily: "Poppins",
    fontSize: 12,
  },
  message2: {
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: 7,
    fontFamily: "Poppins",
    fontSize: 12,
  },
});

export default UnavailableMessage;
