import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

const UnavailableMessage = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

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

  const messageText = showFullMessage
    ? "Beauty is currently unavailable until Feb 4, 2024\n“I’m unavailable, but will be back soon."
    : "Beauty is currently unavailable until Feb 4, 2024";

  const handleToggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <View style={styles.title}>
          <Text style={styles.title}>User Information</Text>
        </View>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText} numberOfLines={showFullMessage ? 0 : 2}>
          {messageText}
        </Text>
        <TouchableOpacity onPress={handleToggleMessage}>
          <Text style={styles.toggleButton}>
            {showFullMessage ? "See less" : "See more"}
          </Text>
        </TouchableOpacity>
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
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
  message: {
    color: "rgba(0, 0, 0, 0.9)",
    marginTop: 7,
    fontFamily: "Poppins",
    fontSize: 12,
  },
  messageText: {
    fontFamily: "Poppins",
  },
  toggleButton: {
    color: "#007BFF",
    marginTop: 5,
    fontSize: 12,
  },
});

export default UnavailableMessage;
