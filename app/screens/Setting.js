import { View, Text } from "react-native";
import React , {useState}from "react";
import Header from "../components/headers/profileHeader";
import UserProfileCard from "../components/user/dpAndName";
import SubProfile from "../components/subProfile/subProfile";
import NotificationPopUp from "../components/notificationPopUp/notificationPopUp";

export default function Setting({ navigation }) {
  const [visible, setVisible] = useState(false); 
  return (
    <View>
      <Header onBellPress={() => setVisible(prev => !prev)} />
      <UserProfileCard
        username={"Kathryn Murphy"}
        navigation={navigation}
        profilePhotoUrl={require("./../assets/dp.png")}
      />
      <SubProfile  onBellPress={() => setVisible(prev => !prev)} />
      {visible && <NotificationPopUp />}
    </View>
  );
}
