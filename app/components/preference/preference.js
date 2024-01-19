import React from "react";
import { FlatList, View, StyleSheet, Image, Text, SafeAreaView,TouchableOpacity } from "react-native";

const PreferenceList = () => {
  const data = [
    { key: "1", title: "Notification", imageSource: require('../../assets/back-Icon.png') },
    { key: "2", title: "Language", imageSource: require('../../assets/back-Icon.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          resizeMode="contain"
          source={item.imageSource}
          style={styles.notificationImage}
          accessibilityLabel={`${item.title} Image`}
          accessibilityRole="image"
        />
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
    width:'100%'
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
  notificationImage: {
    width: 16,
    height: 16,
    aspectRatio: 1,
  },
  emptyView: {
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    minHeight: 20,
  },
});

export default PreferenceList;
