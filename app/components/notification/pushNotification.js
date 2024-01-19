import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PushNotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.text}>Push notifications</Text>
        </View>
        <TouchableOpacity
          style={[styles.toggler, isEnabled ? styles.togglerActive : null]}
          onPress={toggleSwitch}
        >
          <View
            style={[styles.circle, isEnabled ? styles.circleActive : null]}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.notificationText}>
        Allow glam to send push notifications to your device
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
  },
  notificationText: {
    fontFamily: "Poppins",
    fontSize: 9,
    fontWeight: "400",
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: "left",
    color: "#383838",
  },
  toggler: {
    width: 51,
    height: 24,
    top: -2,
    borderRadius: 16,
    backgroundColor: "#12B28C",
    marginLeft: 10,
    justifyContent: "center",
    borderColor: "#eee",
    borderWidth: 1,
  },
  togglerActive: {
    backgroundColor: "#FFFFFF",
  },
  circle: {
    width: 20,
    height: 20,
    left: 29,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  circleActive: {
    backgroundColor: "#12B28C",
  },
});

export default PushNotificationToggle;
