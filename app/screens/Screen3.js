// Screen1.js

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BackgroundImage from "../components/background/backgroundOne";
import TitleHeader from "../components/topography/headerOne";
import TextOne from "../components/topography/textOne";
import ButtonMain from "../components/buttons/buttonOne";
import PaginationDots from "../components/pagination/dots";
import CreateAccount from "../components/clickableText/createAccount";
import Signup from "../components/subContainer/signup";
import Signin from "../components/subContainer/signin";
import SubContainerStack from "../navigation/stack/subContainerStack";

export default function Screen3() {
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [isSigninVisible, setSigninVisible] = useState(false);

  const handleCreateAccountClick = () => {
    setSignupVisible(true);
  };

  const handleSignupBackArrowPress = () => {
    setSignupVisible(false);
  };

  const handleSignInClick = () => {
    setSigninVisible(!isSigninVisible);
  };

  const handleSignInBackArrowPress = () => {
    setSigninVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <BackgroundImage source={require("../assets/image3.png")} />

        <View style={styles.holder}>
          <TitleHeader text={"Ease of payment"} color={"#FFFFFF"} />
          <TextOne
            text={
              "Stylist selection made easy, just \n select a stylist and proceed."
            }
          />
          <PaginationDots activeIndex={3} />
          <ButtonMain text={"Sign in"} onPress={handleSignInClick} />
          <CreateAccount onPress={handleCreateAccountClick} />
        </View>
      </View>
      {isSignupVisible && (
        <Signup onBackArrowPress={handleSignupBackArrowPress} />
      )}
      {isSigninVisible && (
        <Signin onBackArrowPress={handleSignInBackArrowPress} />
      )}
    </>
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
    zIndex: 4,
    width: "95%",
    gap: 20,
  },
});
