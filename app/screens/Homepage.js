import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";

import Header from "../components/headers/header1";
import Slider from "../components/slider/mainSlider/slider";
import TextOne from "../components/topography/intertitle1";
import Card from "../components/cards/card1";
import Card2 from "../components/cards/card2";

export default function Homepage() {
  const data = [{ id: "1" }, { id: "2" }, { id: "3" },{ id: "4" },{ id: "5" }];
  const data2 = [{ id: "1" }, { id: "2" }, { id: "3" },{ id: "4" },{ id: "5" }];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      <Header />
      <View style={{ width: "95%", gap: 10 }}>
        <Slider />

        <TextOne text={"Recently viewed and more"} color={"#000000BF"} />

        <FlatList
          data={data}
          renderItem={({ item }) => <Card />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <TextOne text={"Recently viewed and more"} color={"#000000BF"} />
       
      <FlatList  
        data={data2}
        renderItem={({item}) => <Card2 />} 
        keyExtractor={item => item.id}
        horizontal
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
});
