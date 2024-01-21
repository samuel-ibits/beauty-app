import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const Card = () => {
  const [isHeartSelected, setIsHeartSelected] = React.useState(false);

  return (
    <View
      style={{
        width: width / 2.3,
        height: 247,
        padding: 0,
        borderRadius: 8,
        margin: 12,
        marginHorizontal: 4,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 3,
      }}
    >
      <Image
        source={require("../../assets/face.png")}
        style={{
          width: width / 2.3,
          height: 180,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Image
          source={require("../../assets/dp.png")}
          style={{ width: 34, height: 34, borderRadius: 17 }}
        />
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            John
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 8,
              fontWeight: "400",
              color: "#0000004D",
            }}
          >
            Makeup Artist
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setIsHeartSelected(!isHeartSelected)}
          style={{ marginLeft: "auto" }}
        >
          <Ionicons
            name={isHeartSelected ? "heart" : "heart-outline"}
            size={20}
            color={isHeartSelected ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 12,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 8,
                fontWeight: "500",
                color: "#FBBC05",
              }}
            >
              <Ionicons name="star" size={8} color="#FBBC05" />
              4.8
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 6,
              fontWeight: "400",
              color: "#0000004D",
              marginLeft: 5,
            }}
          >
            from
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
            }}
          >
            $200
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
