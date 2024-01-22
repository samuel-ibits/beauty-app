import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfileCard = ({ username, profilePhotoUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Profile");
      }}
    >
      <Image source={profilePhotoUrl} style={styles.profilePhoto} />
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 21,
    paddingRight: 28,
    paddingBottom: 20,
    paddingLeft: 31,
    backgroundColor: "#FFFFFF33",
  },
  profilePhoto: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
  },
  username: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
    marginLeft: 10, // Adjust the margin as needed
  },
});

export default UserProfileCard;
