// IntroStack.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OtpStack from "../../components/subContainer/otp";
import SignupStack from "../../components/subContainer/signup";
import SuccessStack from "../../components/subContainer/success-reg";

const Stack = createStackNavigator();

const subContainerStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Otp" component={OtpStack} />
        <Stack.Screen name="Signup" component={SignupStack} />
        <Stack.Screen name="Success" component={SuccessStack} />
      </Stack.Navigator>
  );
};

export default subContainerStack;
