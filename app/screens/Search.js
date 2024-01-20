import { View, FlatList } from "react-native";
import Header from "../components/headers/searchHeader1";
import Card1 from "../components/cards/glamCards/card1";
import Card2 from "../components/cards/glamCards/card2";
import Card3 from "../components/cards/glamCards/card3";

export default function Explore() {
  const cards = [
    {
      id: "1",
      card: <Card1 image={require("../assets/makeup1.png")} />,
    },
    {
      id: "2",
      card: <Card1 image={require("../assets/makeup2.png")} />,
    },
    {
      id: "3",
      card: <Card1 image={require("../assets/makeup3.png")} />,
    },
    {
      id: "4",
      card: <Card1 image={require("../assets/makeup1.png")} />,
    },
    {
      id: "5",
      card: <Card1 image={require("../assets/makeup2.png")} />,
    },
    {
      id: "6",
      card: <Card1 image={require("../assets/makeup2.png")} />,
    },
    //...
  ];

  return (
    <View style={{ gap: 10, alignItems: "center", flex: 1 }}>
      <Header />

      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <View style={{ flexGrow: 1 }}>{item.card}</View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        style={{ marginTop: -40 }}
      />
    </View>
  );
}
