import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = () => {

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    const handleChange = (index) => {
      if (index < inputs.length - 1) {
        inputs[index + 1].current.focus(); 
      }
    };
  
    return (
      <View style={styles.container}>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <TextInput
              key={index} 
              style={styles.otpBox}
              ref={inputs[index]}
              maxLength={1} 
              keyboardType="number-pad"
              onChange={() => handleChange(index)}  
            />
          ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%',
      paddingHorizontal:10
    },
    otpBox: {
      width: 77,
      height: 79,
      padding: 5,
      paddingHorizontal: 16, 
      borderRadius: 23,
      backgroundColor: '#DCDCDC4D',
      borderWidth: 0,
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
    },
  });

export default OTPInput;
