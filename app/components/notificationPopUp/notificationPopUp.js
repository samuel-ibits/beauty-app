import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
const NotificationPopUp = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("./../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
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
    <ScrollView style={styles.container}>
      

      <Text style={styles.title}>Notifications</Text>

      <Notification
        image={require("../../assets/bell.png")}
        title="You have been scheduled for tomorrow"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas tellus dui."
        time="Now"
      />
       <Notification
        image={require("../../assets/bell.png")}
        title="You have been scheduled for tomorrow"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas tellus dui."
        time="Now"
      />
       <Notification
        image={require("../../assets/bell.png")}
        title="You have been scheduled for tomorrow"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas tellus dui."
        time="Now"
      />

      <Notification
        image={require("../../assets/bell.png")}
        title="You have been scheduled for tomorrow"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas tellus dui."
        time="2 days ago"
      />
      <Notification
        image={require("../../assets/bell.png")}
        title="You have been scheduled for tomorrow and another for friday and"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas tellus dui."
        time="2 days ago"
      />
      <View style={styles.divider} />
    </ScrollView>
  );
};

const Notification = ({ title, description, time, image }) => (
  <View style={styles.notification}>
    <View style={styles.image}>
      <Image source={image} />
    </View>

    <View style={{ width: "70%" }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>

    <Text style={styles.time}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 34,
    paddingHorizontal: 7,
    backgroundColor: "#fff",
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 520,
    elevation:3,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    width:'100%',
    paddingHorizontal:10,
    marginVertical:10
  },
  time: {
    fontSize: 9,
    color: "#777",
    fontFamily: "Poppins",
    width:45,
  },
  description: {
    fontFamily: "Poppins",
    width:'100%',
  },
  image: {
    backgroundColor: "#07070714",
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  divider:{
    height:30
  }
  // other styles
});

export default NotificationPopUp;
