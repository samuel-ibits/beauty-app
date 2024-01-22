import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  EvilIcons,
} from "react-native-vector-icons";
import { BlurView } from "expo-blur";
import HomeScreen from "./../../screens/Homepage";
import MessageScreen from "./../stack/chattingStack";
import SearchScreen from "./../../screens/Search";
import ProfileScreen from "../stack/settingStack";

import HomeHeader from "./../../components/headers/header1";
import MessageHeader from "../../components/headers/defaultHeader";
import SearchHeader from "./../../components/headers/searchHeader1";
import ProfileHeader from "./../../components/headers/profileHeader";

const Tab = createBottomTabNavigator();

const Home = () => (
  <>
    <HomeHeader User={'Jane titilola sule'}/>
    <HomeScreen />
  </>
);

const Message = () => (
  <>
    <MessageScreen />
  </>
);

const Search = () => (
  <>
    <SearchHeader />
    <SearchScreen />
  </>
);

const Profile = () => (
  <>
   
    <ProfileScreen />
  </>
);

const getTabBarIcon = (route, focused, color) => {
  let iconName;

  switch (route.name) {
    case "Home":
      // MaterialCommunityIcons
      iconName = focused ? "home" : "home-outline";
      return <MaterialCommunityIcons name={iconName} size={19} color={color} />;
    case "Message":
      // FontAwesome
      iconName = focused ? "send" : "send-o";
      return <FontAwesome name={iconName} size={14} color={color} />;
    case "Search":
      // EvilIcons
      iconName = "search";
      return <EvilIcons name={iconName} size={18} color={color} />;
    case "ProfilePage":
      // FontAwesome
      iconName = focused ? "user-circle" : "user-circle-o";
      return <FontAwesome name={iconName} size={18} color={color} />;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "rgba(169, 169, 169, 0.5)",
          tabBarIcon: ({ color, size, focused }) => {
            return getTabBarIcon(route, focused, color, size);
          },
          tabBarLabel: "",
        })}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Tab.Screen
          name="Message"
          options={{ headerShown: false }}
          component={Message}
        />
        <Tab.Screen
          name="Search"
          options={{ headerShown: false }}
          component={Search}
        />
        <Tab.Screen
          name="ProfilePage"
          options={{ headerShown: false }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
