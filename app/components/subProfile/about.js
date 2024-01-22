import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList } from "react-native";
import * as Font from "expo-font";
import Unavailable from '../../components/subProfile/unavailable';
import UserInfo from '../../components/subProfile/userInfo';
import SubProfileList from "../../components/subProfile/profileFlatList";
import LanguageComponent from "../../components/subProfile/LanguageComponent";
import ButtonComponent from '../../components/buttons/buttonTwo';

const About = () => {
  const data = [
    { id: "1", component: <Unavailable /> },
    { id: "2", component: <UserInfo /> },
    { id: "3", component: <SubProfileList /> },
    { id: "4", component: <LanguageComponent /> },
    // Add more components as needed
  ];
  
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"), // Replace with the actual path to your Poppins font file
        "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"), // Replace with the actual path to your Poppins-Bold font file
        // Add other styles or weights if needed
      });

      setIsFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
   
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <View>{item.component}</View>}
      showsVerticalScrollIndicator={false}
    />
    <ButtonComponent text={'Book Aboutointment'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
     alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    width:'100%'
  },

});

export default About;
