import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../headers/defaultHeader";
import { useNavigation } from "@react-navigation/native";
const Notifcation = () => {
  const navigation = useNavigation();
  const onPress = (screen) => {
    navigation.navigate(screen);
  };
  const data = [
    {
      key: "1",
      title: "Push notifications",
      imageSource: require("../../assets/back-Icon.png"),
      onPress: () => onPress("PushNotification"),
    },
    {
      key: "2",
      title: "Email notifications",
      imageSource: require("../../assets/back-Icon.png"),
      onPress: () => onPress("EmailNotification"),
    },
    {
      key: "3",
      title: "Notifications sound",
      imageSource: require("../../assets/back-Icon.png"),
      onPress: () => onPress("SoundNotification"),
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Notifcation"} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={item.onPress}>
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
        )}
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

export default Notifcation;
