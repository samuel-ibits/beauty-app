import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreateAccount = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Don't have an account?</Text>
      <Text style={styles.signupText}>Sign up</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:5
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFFCC',
  },
  signupText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#F2B8AD', // You can replace this with the linear gradient style if needed
  },
});

export default CreateAccount;
