import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackgroundImage from "../components/background/backgroundOne";
import TitleHeader from "../components/topography/headerOne";
import TextOne from "../components/topography/textOne";
import ButtonMain from "../components/buttons/buttonOne";
import PaginationDots from "../components/pagination/dots";

export default function Screen2() {
  const navigation = useNavigation();

  const handleNextButtonClick = () => {
    navigation.navigate("Screen3");
  };

  return (
    <View style={styles.container}>
      <BackgroundImage source={require("../assets/image2.png")} />

      <View style={styles.holder}>
        <TitleHeader text={"Stylist selection"} color={"#FFFFFF"} />
        <TextOne
          text={
            "Stylist selection made easy , just \n select a stylist and proceed ."
          }
        />
        <PaginationDots activeIndex={2} />
        <ButtonMain text={"Next"} onPress={handleNextButtonClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  holder: {
    position: "absolute",
    bottom: 20,
    zIndex: 5,
    width: "95%",
    gap: 8,
  },
});
