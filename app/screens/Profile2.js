import { View, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "../components/headers/profileHeader2";
import UserProfileCard from "../components/user/profileNameandusername";
import ActiveView from "../components/subProfile/activeAbout";
import About from "../components/subProfile/about";
import Portfolio from "../components/subProfile/portfolio";

export default function Profile2() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <UserProfileCard
        username={"Kathryn Murphy"}
        profilePhotoUrl={require("./../assets/dp.png")}
      />
      <ActiveView 
       activeTab={activeTab}
       setActiveTab={setActiveTab}
     />
      {activeTab === 'About' && <About/>}

{activeTab === 'Portfolio' && <Portfolio/>}
    </View>
  );
}
