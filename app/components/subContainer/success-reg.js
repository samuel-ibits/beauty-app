import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the AntDesign icon
import TitleText from "../topography/headerOne";
import OtpInput from "../inputs/otp/otpInput";
import ButtonMain from "../buttons/buttonTwo";
import Termsandcondition from "../clickableText/termsandconditions";
import CustomText from "../topography/textOne";
import Signin from "./signinReg"; // Import the Signin component

const Successful = ({ onBackArrowPress }) => {
  const handleSocialLogin = (provider) => {
    // Implement the login logic for the selected provider
    Alert.alert(`Continue with ${provider}`);
  };

  const [showArrow, setShowArrow] = useState(true);
  const [showSignin, setShowSignin] = useState(false);

  const handleContinuePress = () => {
    // Handle any logic needed before showing the Signin component
    setShowSignin(true);
    // You can also hide the arrow if needed
    setShowArrow(false);
  };

  return (
    <>
      {showArrow && (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={onBackArrowPress}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      )}
      <KeyboardAvoidingView style={styles.container}>
        {showSignin ? (
          <Signin />
        ) : (
          <View style={styles.containerSub}>
            <Image
              source={require("./../../assets/Frame165.png")}
              style={styles.image}
            />
            <TitleText text={"Successful!"} color={"#050505"} />
            <CustomText
              text={
                "Your business account is ready, your customers \n are waiting!"
              }
              color={"#323232"}
            />
          </View>
        )}

        {!showSignin && (
          <View style={styles.fullWidth}>
            <ButtonMain text={"Continue"} onPress={handleContinuePress} />
          </View>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 50,
    zIndex: 4,
  },
  containerSub: {
    alignItems: "center",
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
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75, // Half of the width and height for a circular image
  },
});

export default Successful;
