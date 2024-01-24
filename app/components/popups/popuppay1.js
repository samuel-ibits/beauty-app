import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from "react-native";
import CustomButton from "../buttons/buttonTwo";
import Popup2 from '../popups/popuppay2'
const { width , height} = Dimensions.get("window");

function AppointmentScheduler() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSetAppointment = () => {
    // Show Popup2
    setPopupVisible(true);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Book Appointment</Text>
          <Text style={styles.sectionSubtitle}>Select Date</Text>
          <View style={styles.datePicker}>
            {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((day, index) => (
              <TouchableOpacity key={index} style={styles.dayContainer}>
                <Text style={styles.dayText}>{day}</Text>
                <Text style={styles.dateText}>13</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time</Text>
          <View style={styles.timePicker}>
            <Text style={styles.timeText}>Morning</Text>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {[8, 9, 10, 11].map((hour, index) => (
                <TouchableOpacity key={index} style={styles.timeSlot}>
                  <Text style={styles.timeSlotText}>{`${hour}:30`}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.timeText}>Afternoon</Text>
            <View style={{ width: "100%", flexDirection: "row" }}>
              {[12, 13, 14, 15].map((hour, index) => (
                <TouchableOpacity key={index} style={styles.timeSlot}>
                  <Text style={styles.timeSlotText}>{`${hour}:30`}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>

     <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
     <CustomButton
        text={"Set appointment"}
        onPress={handleSetAppointment}
      />
     </View>

{isPopupVisible && <Popup2 onClose={() => setPopupVisible(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: width,
    flexDirection: "column",
    alignItems: "start",
    padding: 10,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: "90%",
    justifyContent: "space-between",
  },
  section: {
    marginTop: 26,
  },
  sectionTitle: {
    color: "rgba(50, 50, 50, 0.80)",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 15,
  },
  sectionSubtitle: {
    color: "rgba(50, 50, 50, 0.30)",
    fontSize: 13,
    marginTop: 8,
  },
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  dayContainer: {
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  dayText: {
    color: "rgba(7, 7, 7, 0.80)",
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins",
  },
  dateText: {
    color: "rgba(7, 7, 7, 0.80)",
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins",
  },
  timePicker: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 18,
    gap: 15,
  },
  timeText: {
    color: "rgba(50, 50, 50, 0.30)",
    alignSelf: "stretch",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  timeSlot: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(7, 7, 7, 0.60)",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingHorizontal: 18,
  },
  timeSlotText: {
    color: "rgba(7, 7, 7, 0.80)",
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  actionButton: {
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    alignSelf: "stretch",
    margin: "267px 0 44px",
    padding: "16px 60px",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  actionButtonText: {
    color: "#FFF",
  },
});

export default AppointmentScheduler;
