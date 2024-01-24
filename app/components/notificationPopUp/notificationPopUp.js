import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import Header from "../headers/defaultHeader";
const { width, height } = Dimensions.get("window");
import * as Font from "expo-font";

const NotificationPopUp = ({ navigation }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("./../../assets/Poppins/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./../../assets/Poppins/Poppins-SemiBold.ttf"),
      });

      setIsFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  const notifications = [
    {
      id: "1",
      title: "You have a new message",
      description: "John sent you a message. Check it out!",
      time: "2 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "2",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "5 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "3",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "5 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "4",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "5 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "5",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "6",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "7",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "8",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "9",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "10",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    {
      id: "11",
      title: "New friend request",
      description: "Jane wants to connect with you. Accept or ignore?",
      time: "15 minutes ago",
      image: require("../../assets/bell.png"),
    },
    // Add more notification items as needed
  ];
  return (
    <>
    <Header/>
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Notification
          title={item.title}
          description={item.description}
          time={item.time}
          image={item.image}
        />
      )}
      style={styles.container}
    />
    </>
  );
};

const Notification = ({ title, description, time, image }) => (
  <View style={styles.notification}>
    <View style={styles.image}>
      <Image source={image} style={{ width: 20, height: 20 }} />
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
    paddingHorizontal: 7,
    backgroundColor: "#eeeeee",
    width: "100%",
    height: '100%',
  },
  title: {
    fontWeight: "400",
    fontSize: 13,
    fontFamily: "Poppins-SemiBold",
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "95%",
    marginVertical: 5,
    backgroundColor: "#fff",
    padding:25,
    alignSelf:'center',
    borderRadius:8

  },
  time: {
    fontSize: 8,
    color: "#777",
    fontFamily: "Poppins",
    width: 45,
  },
  description: {
    fontFamily: "Poppins",
    width: "100%",
    color: "#7D7D7D",
    fontSize: 11,
  },
  image: {
    backgroundColor: "#07070714",
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationPopUp;
