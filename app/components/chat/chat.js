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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 180}
          style={styles.avoidingView}
        >
          <View style={styles.chatInput}>
            <TextInput placeholder="Message..." style={styles.input} />

            <TouchableOpacity>
              <Ionicons name="send" size={18} color="#585858" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "95%",
    padding: 10,
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
  chatInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    width: '85%',
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 5,
  },
});

export default ChatScreen;
