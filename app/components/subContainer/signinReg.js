import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the AntDesign icon
import TitleText from "../topography/title";
import User from "../inputs/user/userInput";
import ButtonMain from "../buttons/buttonTwo";
import Termsandcondition from "../clickableText/termsandconditions";
import CustomText from "../topography/textOne";

const Signin = ({ onBackArrowPress }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={onBackArrowPress}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.containerSub}>
          <TitleText text={"Enter your name"} />
          <CustomText
            text={"Please enter your full name"}
            color={"#323232"}
          />
          <User title={"First name"} placeholder={"John"} />
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
    height: 630,
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-around",
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

export default Signin;
