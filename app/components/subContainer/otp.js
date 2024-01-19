import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TitleText from "../topography/title";
import OtpInput from "../inputs/otp/otpInput";
import ButtonMain from "../buttons/buttonTwo";
import Termsandcondition from "../clickableText/termsandconditions";
import CustomText from "../topography/textOne";
import Success from "./success-reg"; // Import the Success component

const Otp = ({ onBackArrowPress }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSocialLogin = (provider) => {
    // Implement the login logic for the selected provider
    Alert.alert(`Continue with ${provider}`);
  };

  const handleVerificationPress = () => {
    // Implement validation or other logic as needed
    // For demonstration, always set showSuccess to true
    setShowSuccess(true);
  };

  return (
    <>
      
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={onBackArrowPress}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
    

      {showSuccess ? (
        <Success />
      ) : (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.containerSub}>
            <TitleText text={"Enter 6 digit verification code"} />
            <CustomText
              text={"We have sent via SMS to +23456735367"}
              color={"#323232"}
            />
            <OtpInput />
          </View>

          <View style={styles.fullWidth}>
            <ButtonMain
              text={"Verification"}
              onPress={handleVerificationPress}
            />
            <Termsandcondition />
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 0,
    paddingVertical: 50,
    zIndex: 4,
    ...Platform.select({
      ios: {
        paddingBottom: 20, // Adjust the paddingBottom as needed
      },
      android: {
        paddingBottom: 0, // Adjust the paddingBottom as needed
      },
    }),
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
    justifyContent: "center",
    gap: 20,
  },
});

export default Otp;
