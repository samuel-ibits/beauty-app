import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the AntDesign icon
import TitleText from "../topography/title";
import User from "../inputs/user/userInput";
import ButtonMain from "../buttons/buttonTwo";
import Termsandcondition from "../clickableText/termsandconditions";
import CustomText from "../topography/textOne";

const signin = ({ onBackArrowPress }) => {


  return (
    <>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={onBackArrowPress}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerSub}>
          <TitleText text={"Enter your name"} />
          <CustomText text={"Please enter your full name"} color={"#323232"} />
          <User title={"First name"} placeholder={"Hohn"} />
          <User title={"Last name"} placeholder={"Doe"} />
        </View>

        <View style={styles.fullWidth}>
          <ButtonMain text={"Continue"} />
          <Termsandcondition />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    paddingVertical: 50,
    zIndex: 4,
  },
  containerSub: {
    alignItems: "flex-start",
    width: "100%",
    gap: 10,
    paddingHorizontal: 20,
  },
  arrowContainer: {
    position: "absolute",
    top: 65,
    left: 20,
    zIndex: 4,
  },
  fullWidth: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
});

export default signin;
