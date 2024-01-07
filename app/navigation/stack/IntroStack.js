// IntroStack.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../../screens/Screen1"; // Capitalized 'Screen1'
import Screen2 from "../../screens/Screen2"; // Capitalized 'Screen2'
import Screen3 from "../../screens/Screen3"; // Capitalized 'Screen2'

const Stack = createStackNavigator();

const IntroStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IntroStack;
