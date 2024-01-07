import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundImage from '../components/background/backgroundOne';
import TitleHeader from '../components/topography/headerOne';
import TextOne from '../components/topography/textOne';
import ButtonMain from '../components/buttons/buttonOne';
import PaginationDots from '../components/pagination/dots';

const Stack = createStackNavigator();

const Screen1 = () => {
  const navigation = useNavigation();

  const handleNextButtonClick = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <BackgroundImage source={require('../assets/image1.png')} />

      <View style={styles.holder}>
        <TitleHeader text={'Welcome to Glamhub !'} color={'#FFFFFF'} />
        <TextOne text={'Discover the beauty of personalized \n styling services.'} />
        <PaginationDots activeIndex={1} />
        <TouchableOpacity>
          <ButtonMain text={'Next'} onPress={handleNextButtonClick} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  holder: {
    position: 'absolute',
    bottom: 20,
    zIndex: 4,
    width: '95%',
    gap: 8,
  },
});

export default Screen1;
