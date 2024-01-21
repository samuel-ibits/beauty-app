import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-search"
        size={15}
        color="#010101"
        style={styles.icon}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#3232324D"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(238, 238, 238, 0.5)",
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginTop:-10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "400",
    height: "100%",
  },
});

export default SearchBar;
