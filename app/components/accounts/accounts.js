import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons or any other icon library you are using

const AccountInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account info</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Annette Black</Text>
        <Text style={styles.infoTextSub}>Full name</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>annet*******@example.com</Text>
        <Text style={styles.infoTextSub}>Email</Text>
      </View>

      <TouchableOpacity style={styles.section}>
        <Text style={styles.sectionTitle}>Wallet</Text>

        <Image source={require("../../assets/back-Icon.png")} />
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account management</Text>
      </View>

      <TouchableOpacity style={styles.actionItem}>
        <Text style={styles.actionText2}>Deactivation and Deletion</Text>
        <Image source={require("../../assets/back-Icon.png")} />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.actionItem}>
       <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', gap:5}}>
       <Image style={{width:18,height:16, objectFit:'contain'}} source={require("../../assets/logout-Icon.png")} />
        <Text style={styles.actionText}>Logout</Text>
       </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    maxWidth: "100%",
    width: "100%",
  },
  section: {
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: 13,
    textAlign: "center",
  },
  infoItem: {
    border: "0.5px solid rgba(14, 14, 15, 0.05)",
    padding: 23,
    width: "100%",
    color: "#00000080",
  },
  infoText: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Poppins",
    fontSize: 12,
  },
  infoTextSub: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Poppins",
    fontSize: 8,
  },
  icon: {
    // Adjust the styles for your icon
  },
  actionItem: {
    alignItems: "center",
    border: "0.5px solid rgba(14, 14, 15, 0.05)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
  },
  actionText: {
    color: "#D64532",
    fontFamily: "Poppins",
    fontSize: 9,
  },
  actionText2: {
    color: "#222",
    fontFamily: "Poppins",
    fontSize: 9,
  },
  divider: {
    backgroundColor: "rgba(6, 6, 6, 0.02)",
    minHeight: 20,
    width: "100%",
  },
});

export default AccountInfo;
