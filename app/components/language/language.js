import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

const LanguageList = () => {
  const data = [
    { key: "1", title: "English" },
    { key: "2", title: "Igbo" },
    { key: "3", title: "Yoruba" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const selectLanguage = (key) => {
    setSelectedLanguage(key);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => selectLanguage(item.key)}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={[styles.radioButton, selectedLanguage === item.key ? styles.radioButtonSelected : null]} />
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
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#1DC9A0",
    borderWidth: 2,
  },
  radioButtonSelected: {
    backgroundColor: "#1DC9A0",
  },
});

export default LanguageList;
