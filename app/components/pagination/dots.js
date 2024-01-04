import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PaginationDots = ({ activeIndex }) => {

  const renderDots = () => {
    const dots = [];
    
    for (let i = 1; i <= 4; i++) {  
      dots.push(
        <Dot 
          key={i}
          isActive={i === activeIndex} 
        />
      );
    }

    return dots;
  };

  return (
    <View style={styles.container}>
      {renderDots()}
    </View>
  );
};

const Dot = ({ isActive }) => {
  return (
    <View  
      style={[
        styles.dot, 
        isActive && styles.activeDot
      ]}
    >
      {isActive && <Gradients />}
    </View>
  );
};

const Gradients = () => {
  return (
    <LinearGradient  
      colors={['#BA8277', '#F2B8AD', '#FCDFD9', '#F7CCC4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        position: 'absolute',
        left: 0, 
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: 6
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16    
  },
  dot: {
    backgroundColor: "#FFF",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5
  },
  activeDot: {
    width: 27,
    height: 8,  
    borderRadius: 6
  }
});

export default PaginationDots;