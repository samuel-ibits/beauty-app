import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: 65,
    padding: 14,
    paddingHorizontal: 16,
    borderRadius: 9,
    backgroundColor: '#E4E4E44D',
    gap: 2,
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 14,
    textAlign: 'left',
    color: '#07070766',
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: 14, 
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'left',
    color: '#070707CC',
    width:'100%',
  }
});

export default InputField;