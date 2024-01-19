import React from "react";
import { StyleSheet, Text, View, FlatList, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MyFlatList = () => {
  const data = [
    { key: "1", text: "Item 1", imageSource: require("../../assets/bg-brown.png") },
    { key: "2", text: "Item 2", imageSource: require("../../assets/bg-brown.png") },
    { key: "3", text: "Item 3", imageSource: require("../../assets/bg-brown.png") },
    { key: "4", text: "Item 3", imageSource: require("../../assets/bg-brown.png") },
    { key: "5", text: "Item 3", imageSource: require("../../assets/bg-brown.png") },
    { key: "6", text: "Item 3", imageSource: require("../../assets/bg-brown.png") },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <LinearGradient
        style={styles.imageBackground}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]}
      >
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          source={item.imageSource}
        >
          <View style={styles.iconWrapper}>
            <Image
              style={styles.iconImage}
              resizeMode="cover"
              source={require("../../assets/appoint-Icon.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.sessionText, styles.labelTypo]}>Upcoming session</Text>
            <Text style={[styles.label, styles.labelTypo]}>
              Lorem ipsum dolor sit amet consectetur. Turpis porta cras neque morbi mi egestas
              tellus dui.
            </Text>
          </View>
          <Text style={[styles.nowText, styles.nowPosition]}>Now</Text>
        </ImageBackground>
      </LinearGradient>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: "100%",
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageBackground: {
    borderRadius: 10,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
    justifyContent:'space-around'
  },
  iconWrapper: {
    marginBottom: 10,
    backgroundColor:'#FFFFFF69',
    width:46,
    height:46,
    borderRadius:46/2,
    justifyContent:'center',
    alignItems:'center',
   
  },
  iconImage: {
    width: 18,
    height: 18,
  },
  textContainer: {
    alignItems: "left",
    width:'65%'
  },
  labelTypo: {
    color: "#FFF",
    textAlign: "left",
    fontFamily: "Poppins", // Your font family
  },
  nowPosition: {
    fontSize: 12,
    marginTop: -65,
    color: "#53EB3A",
    fontFamily: "Poppins",
    marginRight:10
    
  },
  sessionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    color: "#EEE",
    fontSize: 12,
    lineHeight: 18,
  },
});

export default MyFlatList;
