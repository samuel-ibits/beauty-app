import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TitleText from "../topography/title";
import PhoneNumber from "../inputs/phone/phoneNumber";
import ButtonMain from "../buttons/buttonTwo";
import OrDemarcation from "../demarcation/or";
import SocialLoginButton from "../buttons/loginWith";
import Termsandcondition from "../clickableText/termsandconditions";
import Otp from "./otp"; // Import the Otp component
import Successful from "./success-reg"; // Import the Successful component

const Signup = ({ onBackArrowPress }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [showSuccessful, setShowSuccessful] = useState(false);

  const handleSocialLogin = (provider) => {
    // Implement the login logic for the selected provider
    Alert.alert(`Continue with ${provider}`);
  };

  const handleSignUpPress = () => {
    // Implement validation or other logic as needed
    if (phoneNumber.trim() !== "") {
      setShowOtp(true);
    } else {
      Alert.alert("Please enter a valid phone number.");
    }
  };

  const handleBackArrowPress = () => {
    if (showOtp) {
      // If Otp is visible, go back to PhoneNumber
      setShowOtp(false);
    } else if (showSuccessful) {
      // If Successful is visible, handle back press logic for Successful
      // For example, navigate to another screen or handle it as needed
      setShowSuccessful(false);
    } else {
      // If PhoneNumber is visible, trigger the provided onBackArrowPress function
      onBackArrowPress();
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={handleBackArrowPress}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showOtp ? (
          <Otp onBackArrowPress={() => setShowOtp(false)} />
        ) : showSuccessful ? (
          <Successful onBackArrowPress={() => setShowSuccessful(false)} />
        ) : (
          <View style={styles.containerSub}>
            <TitleText text={"Enter phone number"} />
            <PhoneNumber
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <ButtonMain text={"Sign up"} onPress={handleSignUpPress} />
            <OrDemarcation />
            <SocialLoginButton
              provider="google"
              onPress={() => handleSocialLogin("Google")}
            />
            <SocialLoginButton
              provider="facebook"
              onPress={() => handleSocialLogin("Facebook")}
            />
            <SocialLoginButton
              provider="apple"
              onPress={() => handleSocialLogin("Apple")}
            />
          </View>
        )}

        {/* Conditionally render Termsandcondition based on showOtp state */}
        {!showOtp && !showSuccessful && (
          <View>
            <Termsandcondition />
          </View>
        )}
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
    ...Platform.select({
      ios: {
        paddingBottom: 20, // Adjust the paddingBottom as needed
      },
      android: {
        paddingBottom: 20, // Adjust the paddingBottom as needed
      },
    }),
  },
  containerSub: {
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  arrowContainer: {
    position: "absolute",
    top: 65,
    left: 20,
    zIndex: 4,
  },
});

export default Signup;
