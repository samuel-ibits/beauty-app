import React, { useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import PaginationDots from "./PaginationDots";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: "1", imageUrl: require("./path/to/image1.jpg") },
    { id: "2", imageUrl: require("./path/to/image2.jpg") },
    { id: "3", imageUrl: require("./path/to/image3.jpg") },
    { id: "4", imageUrl: require("./path/to/image4.jpg") },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={item.imageUrl} style={styles.image} />
    </View>
  );

  const keyExtractor = (item) => item.id;

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

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
      <PaginationDots activeIndex={activeIndex + 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 371,
    height: 194,
    borderRadius: 10,
    overflow: "hidden",
  },
  slide: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Slider;
