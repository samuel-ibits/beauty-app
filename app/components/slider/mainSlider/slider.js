import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions,StatusBar } from "react-native";
import PaginationDots from "../../pagination/dotSlider";
const { width } = Dimensions.get("window");

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: "1", imageUrl: require("../../../assets/slide.png") },
    { id: "2", imageUrl: require("../../../assets/slide.png") },
    { id: "3", imageUrl: require("../../../assets/slide.png") },
    { id: "4", imageUrl: require("../../../assets/slide.png") },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>

      <StatusBar />

      <Image source={item.imageUrl} style={styles.image} />
    </View>
  );

  const keyExtractor = (item) => item.id;


  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []); // Empty dependency array indicates no dependencies


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
      />
      <PaginationDots activeIndex={activeIndex + 1} totalImages={data.length}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 194,
    borderRadius: 10,
    gap:10,
    marginBottom:40,
    marginTop:20
  },
  slide: {
    width: width * 0.95,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Slider;
