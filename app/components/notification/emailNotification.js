import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

const EmailList = () => {
  const data = [
    { key: "1", title: "Inbox messages" },
    { key: "2", title: "Appointment messages" },
    { key: "3", title: "Appointment updates" },
  ];

  const [toggleStates, setToggleStates] = useState({
    "1": false,
    "2": false,
    "3": false,
  });

  const toggleSwitch = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={[styles.toggler, toggleStates[item.key] ? styles.togglerActive : null]}
          onPress={() => toggleSwitch(item.key)}
        >
          <View style={[styles.circle, toggleStates[item.key] ? styles.circleActive : styles.circleInactive]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        style={styles.flatList}
      />
      <View style={styles.emptyView}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    width: "100%",
  },
  flatList: {
    width: "100%",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: "rgba(14, 14, 15, 0.05)",
    paddingVertical: 16,
    paddingHorizontal: 31,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: 9,
    lineHeight: 13,
  },
  emptyView: {
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    minHeight: 20,
  },
  toggler: {
    width: 51,
    height: 24,
    top: -2,
    borderRadius: 16,
    marginLeft: 10,
    justifyContent: "center",
    borderColor: "#eee",
    borderWidth: 1,
    backgroundColor:'#C7C7CC'
  },
  togglerActive: {
    backgroundColor: "#12B28C",
  },
  circle: {
    width: 20,
    height: 20,
    left: 29,
    borderRadius: 10,
    backgroundColor:'#fff'
  },
  circleActive: {
    backgroundColor: "#fff",
  },
  circleInactive: {
    backgroundColor: "#fff",
    left: 0,
  },
});

export default EmailList;
