import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

const ProfileSection = ({ title, imageSource, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={isActive ? styles.activeContainer : styles.inactiveContainer}>
      <View style={styles.header}>
        <Text style={isActive ? styles.activeTitle : styles.inactiveTitle}>{title}</Text>
        <Image
          resizeMode="contain"
          source={{ uri: imageSource }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const MyComponent = () => {
  const [activeSection, setActiveSection] = useState("About");
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

  const handleSectionPress = (section) => {
    setActiveSection(section);
  };

  if (!isFontLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
      <ProfileSection
        title="About"
        imageSource="https://cdn.builder.io/api/v1/image/assets/TEMP/19169f099208f61e0de1a2e75294454683f395e2037207e22501de9afa92f0c6?apiKey=807cd1f152a44bb6925dabff630279c1&"
        isActive={activeSection === "About"}
        onPress={() => handleSectionPress("About")}
      />
      <ProfileSection
        title="Portfolio"
        imageSource="https://your-portfolio-image-url"
        isActive={activeSection === "Portfolio"}
        onPress={() => handleSectionPress("Portfolio")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    gap: 1,
    flexDirection:'row'
  },
  header: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  activeContainer: {
    borderColor:'#000',
    borderBottomWidth:2
  },
  inactiveContainer: {},
  activeTitle: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins",
  },
  inactiveTitle: {
    color: "rgba(6, 6, 6, 0.30)",
    alignSelf: "center",
    marginVertical: "auto",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Poppins",
  },
  image: {
    borderWidth: 2,
    borderColor: "#000",
    alignSelf: "center",
    position: "relative",
  },
});

export default MyComponent;
