import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const Portfolio = () => {
  const data = [
    { id: "1", title: "Custom Style 1", likes: 5, imageUrl: require("./../../assets/makeupuser.png") },
    { id: "2", title: "Custom Style 2", likes: 8, imageUrl: require("./../../assets/makeupuser.png") },
    { id: "3", title: "Custom Style 3", likes: 2, imageUrl: require("./../../assets/makeupuser.png") },
    { id: "4", title: "Custom Style 4", likes: 9, imageUrl: require("./../../assets/makeupuser.png") },
    // Add more data items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item.imageUrl} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.likes}>
        <View style={styles.icon}>
          <Image source={require("./../../assets/Group.png")} style={styles.squares} />
        </View>
        <Text style={{ fontWeight: 400, fontFamily: "Poppins", marginLeft: 10 }}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        These are some of the style Beauty did so that you can
        <Text>{"\n"}</Text>get a better understanding of experience.
      </Text>

      <TouchableOpacity style={styles.sharePortfolio}>
        <View style={styles.materialSymbolsShare}>
          <Image source={require("./../../assets/material-symbols_share.png")} style={styles.vector} />
        </View>
        <Text style={styles.shareText}>Share Portfolio</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gallery}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    padding: 1,
    alignItems:'center'
  },
  text: {
    color: "rgba(6, 6, 6, 0.63)",
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "300",
    lineHeight: 20,
    textAlign: "justify",
    padding:10,
    width: width - 20
  },
  sharePortfolio: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 18,
    marginTop: 20,
    width: width - 20
  },
  materialSymbolsShare: {
    width: 16,
    height: 16,
  },
  vector: {
    width: 12,
    height: 13.33,
  },
  shareText: {
    color: "black",
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 20,
  },
  gallery: {
    width:'100%',
    marginTop: 20,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: width/2.2,
    height: 250,
    backgroundColor: "rgba(6, 6, 6, 0.05)",
    marginBottom: 20,
    alignSelf: "center",
    marginRight:10
  },
  title: {
    marginTop: 10,
    color: "black",
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 20,
    paddingLeft:10

  },
  likes: {
    flexDirection: "row",
    padding:10,
  },
  icon: {
    width: 16,
    height: 16,
  },
  squares: {
    width: 16,
    height: 14,
  },
  image: {
    width: "100%",
    height: "75%",
  },
});

export default Portfolio;
