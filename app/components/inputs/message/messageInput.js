import React from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatInput = () => {
  return (
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
  );
}

const styles = StyleSheet.create({
    avoidingView: {
      width: "100%",
      position:'absolute',
      bottom:0,
      height:50,
      backgroundColor:'#ffffff'
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
      borderColor: '#eee',
      borderRadius: 5,
      marginRight: 5,
    },
  });
  

  
export default ChatInput;