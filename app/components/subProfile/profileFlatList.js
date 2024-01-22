import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

const data = [
  {
    id: "1",
    iconSource: require("./../../assets/map-Icon.png"),
    firstText: "From",
    secondText: "Lagos Nigeria (17:20)",
  },
  {
    id: "2",
    iconSource: require("./../../assets/user-Icon.png"),
    firstText: "Member since",
    secondText: "April 2021",
  },
  {
    id: "3",
    iconSource: require("./../../assets/chat-Icon.png"),
    firstText: "Average response time",
    secondText: "4 hours",
  }, {
    id: "4",
    iconSource: require("./../../assets/paper-airplane.png"),
    firstText: "Recent work",
    secondText: "About 2 hours ago",
  },
  {
    id: "5",
    iconSource: require("./../../assets/eye-Icon.png"),
    firstText: "Last active",
    secondText: "20m ago",
  },
  // Add more data items as needed
];

const ListItem = ({ iconSource, firstText, secondText }) => (
  <View style={styles.item}>
    <Image source={iconSource} style={styles.icon} />
    <View style={{marginLeft:10}}>
      <Text style={styles.firstText}>{firstText}</Text>
      <Text style={styles.secondText}>{secondText}</Text>
    </View>
  </View>
);

const MyFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItem {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    top: 3,
    left: 4,
    marginRight: 10,
  },
  firstText: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#0000004D",
    marginRight: 10,
  },
  secondText: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
});

export default MyFlatList;
