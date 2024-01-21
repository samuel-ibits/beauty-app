import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        <ScrollView style={styles.chatMessages}>
          <View style={[styles.message, styles.sentMessage]}>
            <Text>Hi there, how are you doing?</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/68.jpg",
              }}
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                borderWidth: 1,
              }}
            />
            <Text style={[styles.message, styles.receivedMessage]}>
              I'm good, just working on some react native, this is pretty cool
              project and i enjoy building it. where are you from
            </Text>
          </View>
          <View style={[styles.message, styles.sentMessage]}>
            <Text>Really?</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >

          </View>
         
        
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/68.jpg",
              }}
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                borderWidth: 1,
              }}
            />
            <Text style={[styles.message, styles.receivedMessage]}>
              I'm good, just working on some react native, this is pretty cool
              project and i enjoy building it. where are you from
            </Text>
          </View>
        </ScrollView>

      
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 10,
    minHeight: height - 120
  },
  avoidingView: {
    width: "100%",
  },

  message: {
    width: "fit-content",
    height: "fit-content",
    maxWidth: "80%",
    padding: 10,
    borderRadius: 16,
    marginVertical: 10,
  },
  chatMessages: {
    overflow: "scroll",
    flex: 1,
  },
  sentMessage: {
    backgroundColor: "#99999936",
    marginLeft: "auto",
  },

  receivedMessage: {
    backgroundColor: "#eeeeee",
    marginRight: "auto",
  },

});

export default ChatScreen;
