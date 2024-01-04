import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import CustomText from './components/topography/textOne';
import BackgroundImage from './components/background/backgroundOne';
import PaginationDots from './components/pagination/dots';
import OTPInput from './components/inputs/user/userInput';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require('./assets/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/Poppins/Poppins-Bold.ttf'),
        // Add other styles or weights if needed
      });

      setIsFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <OTPInput title={'Enter name'} placeholder={'User name'}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});