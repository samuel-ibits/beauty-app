import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import RBSheet from "react-native-raw-bottom-sheet";

import Unavailable from "../../components/subProfile/unavailable";
import UserInfo from "../../components/subProfile/userInfo";
import SubProfileList from "../../components/subProfile/profileFlatList";
import LanguageComponent from "../../components/subProfile/LanguageComponent";
import ButtonComponent from "../../components/buttons/buttonTwo";
import Paypopup from "../../components/popups/popuppay1";
const { width, height } = Dimensions.get("window");

const About = () => {
  const data = [
    { id: "1", component: <Unavailable /> },
    { id: "2", component: <UserInfo /> },
    { id: "3", component: <SubProfileList /> },
    { id: "4", component: <LanguageComponent /> },
    // Add more components as needed
  ];

  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const refRBSheet = useRef();

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
        // Add other styles or weights if needed
      });
      setIsFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
      />
      <RBSheet
        height={height * 0.8}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Paypopup />
      </RBSheet>
      <ButtonComponent
        text={"Book Appointment"}
        onPress={() => refRBSheet.current.open()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
});

export default About;
