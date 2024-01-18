import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import CustomButton from "../../buttons/buttonTwo";

function CreditCardDetailsForm(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
     

      <View style={styles.inputContainer}>
        <TextInput style={styles.label} placeholder="Cardholder Name" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.label} placeholder="Card Number" />
      </View>

      <View style={styles.inputContainer2}>
        <View style={styles.row}>
          <View style={styles.expiryContainer}>
            <TextInput style={styles.label} placeholder="Expiration Date" />
          </View>

          <View style={styles.expiryContainer}>
            <TextInput style={styles.label} placeholder="CVC" />
          </View>
        </View>
      </View>
      <CustomButton text={"Pay"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },

  inputContainer: {
    marginTop: 16,
    width: "100%",
    padding: 12,
    borderRadius: 6,
    backgroundColor: "rgba(228, 228, 228, 0.30)",
    justifyContent: "center",
    alignItems: "start",
  },

  inputContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:15
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "rgba(7, 7, 7, 0.70)",
    fontSize: 11,
  },

  expiryContainer: {
    width: "49%",
    marginTop: 16,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "rgba(228, 228, 228, 0.30)",
    justifyContent: "center",
    alignItems: "start",
  },
});

export default CreditCardDetailsForm;
