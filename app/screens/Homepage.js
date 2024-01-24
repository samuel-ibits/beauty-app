import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../components/headers/header1";
import Slider from "../components/slider/mainSlider/slider";
import TextOne from "../components/topography/intertitle1";
import Card from "../components/cards/card1";
import Card2 from "../components/cards/card2";
import NotificationPopUp from "../components/notificationPopUp/notificationPopUp";
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get("window");

const notifications = [
  {
    id: "1",
    title: "You have a new message",
    description: "John sent you a message. Check it out!",
    time: "2 minutes ago",
    image: require("../assets/bell.png"),
  },
  {
    id: "2",
    title: "New friend request",
    description: "Jane wants to connect with you. Accept or ignore?",
    time: "5 minutes ago",
    image: require("../assets/bell.png"),
  },
  {
    id: "3",
    title: "New friend request",
    description: "Jane wants to connect with you. Accept or ignore?",
    time: "5 minutes ago",
    image: require("../assets/bell.png"),
  },
  {
    id: "4",
    title: "New friend request",
    description: "Jane wants to connect with you. Accept or ignore?",
    time: "5 minutes ago",
    image: require("../assets/bell.png"),
  },

  // Add more notification items as needed
];

const handleSeeAllNotifications = (navigation) => {
  navigation.navigate("NotificationPopup");
};
export default function Homepage({ navigation }) {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
  const data2 = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
  const [showNotifications, setShowNotifications] = useState(false);
  const refRBSheet = useRef();

  return (
   <>
    <Header onPress={() => refRBSheet.current.open()} User={"Adalumo Tolu"}/>
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      <View style={{ width: "95%", gap: 10 }}>
        <Slider />

        <TextOne text={"Recently viewed and more"} color={"#000000BF"} />

        <FlatList
          data={data}
          renderItem={({ item }) => <Card />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <TextOne text={"Recently viewed and more"} color={"#000000BF"} />

        <FlatList
          data={data2}
          renderItem={({ item }) => <Card2 />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <RBSheet
        height={height * 0.67}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <FlatList
          data={notifications}
          renderItem={({ item }) => (
            <Notification
              key={item.id}
              {...item}
              onPress={() => handleSeeAllNotifications()}
            />
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <TouchableOpacity
              style={styles.seeAllContainer}
              data={notifications}
              onPress={() => handleSeeAllNotifications(navigation)}
            >
              <Text style={styles.seeAllText}>See All Notifications</Text>
            </TouchableOpacity>
          }
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </RBSheet>
    </ScrollView></>
  );
}

const Notification = ({ title, description, time, image, onPress }) => (
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
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },

  title: {
    fontWeight: "400",
    fontSize: 13,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "95%",
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 25,
    alignSelf: "center",
    borderRadius: 8,
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
  seeAllContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
  },
  seeAllText: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#007AFF",
  },
});
