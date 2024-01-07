import React from "react";
import { ImageBackground, View } from "react-native";
import SearchBar from "../inputs/search/search";

const Header = () => {
  return (
    <ImageBackground 
      source={require('../../assets/background1.png')} 
      style={{width: '100%', height: 133}}
    >
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' , 
      }}>
        <SearchBar />
      </View>
    </ImageBackground>
  );
};

export default Header;