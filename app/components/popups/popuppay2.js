import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import CustomButton from "../buttons/buttonTwo";
import InputOne from "../inputs/sectionInputDebit/index";
const { width , height} = Dimensions.get("window");


function AppointmentScheduler() {
  const [checked, setChecked] = React.useState("none"); // Track the active radio button
  const [showInput, setShowInput] = React.useState(true);

  const handleRadioPress = (value) => {
    setChecked(value);
    setShowInput(value === "debitCredit");
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Make payment</Text>
        <Text style={styles.sectionSubtitle}>Select payment method</Text>

        <View style={styles.shadow}>
          <View style={styles.radio}>
            <RadioButton
              color={"black"}
              value="debitCredit"
              status={checked === "debitCredit" ? "checked" : "unchecked"}
              onPress={() => handleRadioPress("debitCredit")}
            />
            <Text style={styles.text}>Debit / Credit card</Text>
          </View>

          {showInput && <InputOne />}
        </View>

        <View style={styles.shadow}>
          <View style={styles.radio}>
            <RadioButton
              color={"black"}
              value="bank"
              status={checked === "bank" ? "checked" : "unchecked"}
              onPress={() => handleRadioPress("bank")}
            />
            <Text style={styles.text}>Bank transfer</Text>
          </View>

          {checked === "bank" && <CustomButton text={"Pay"} />}
        </View>

        <View style={styles.shadow}>
          <View style={styles.radio}>
            <RadioButton
              color={"black"}
              value="ussd"
              status={checked === "ussd" ? "checked" : "unchecked"}
              onPress={() => handleRadioPress("ussd")}
            />
            <Text style={styles.text}>USSD</Text>
          </View>

          {checked === "ussd" && <CustomButton text={"Pay"} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: width,
    flexDirection: "column",
    alignItems: "start",
    padding: 15,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: height * 0.78,
    justifyContent: "space-between",

  },
  
  sectionTitle: {
    color: "rgba(50, 50, 50, 0.80)",
    fontSize: 16,
    fontWeight: "700",
    
  },
  sectionSubtitle: {
    color: "rgba(50, 50, 50, 0.30)",
    fontSize: 13,
   
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems:'center',
    borderRadius:10
  },
  shadow: {
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderColor:'#eee',
    borderWidth:1,
    padding:10,
    justifyContent:'center',
    borderRadius:10
  }
});

export default AppointmentScheduler;
