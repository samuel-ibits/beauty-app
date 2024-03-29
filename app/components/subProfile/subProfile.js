import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SubProfile = () => {
  return (
    <View style={styles.container}>
      <Section title="My Glam">
        <Item
          title="Appointments"
          icon={require("./../../assets/appointment.png")}
        />
      </Section>

      <Section title="Saved Lists">
        <Item title="Lists" icon={require("./../../assets/lists.png")} />
      </Section>

      <Section title="Settings">
        <Item
          title="Preferences"
          icon={require("./../../assets/preferences.png")}
        />

        <Item title="Account" icon={require("./../../assets/account.png")} />
      </Section>

      <Section title="Resources">
        <Item title="Support" icon={require("./../../assets/support.png")} />
      </Section>
    </View>
  );
};

const Section = ({ title, children }) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Item = ({ title, icon }) => (
  <TouchableOpacity style={styles.item}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image source={icon} />
      <Text style={styles.itemText}>{title}</Text>
    </View>

    <View>
      <Image source={require("./../../assets/back-Icon.png")} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    flexDirection: "column",
    padding: 10,
  },
  sectionTitle: {
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    padding: "20px 60px 20px 34px",
    fontSize: 13,
    fontFamily: "Poppins",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  itemText: {
    fontSize: 9,
    fontFamily: "Poppins",
  },
});

export default SubProfile;
