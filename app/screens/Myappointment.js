import { View, Text } from "react-native";
import React from "react";
import Header from "../components/headers/defaultHeader";
import AppointmentCard from "../components/appointments/appointmentCard";

export default function Myappointment() {
  const data = [
    {
      key: "1",
      text: "Item 1",
      imageSource: require("../assets/bg-brown.png"),
      title: "Upcoming session",
      status: "Now",
      body:'Lorem ipsum dolor sit amet consectetur. Turpis porta crass dui.'
    },
    {
      key: "2",
      text: "Item 2",
      imageSource: require("../assets/bg-brown.png"),
      title: "Session Just Done",
      status: "Later",
      body:'Lorem ipsum dolor sit amet consectetur. Turpis porta llus dui.'
    },
    {
      key: "3",
      text: "Item 3",
      imageSource: require("../assets/bg-brown.png"),
      title: "Upcoming",
      status: "Pending",
      body:'Lorem ipsum dolor sit amet consectetur. Turpis porta mi egestastellus dui.'
    },
    // Add more items as needed
  ];

  return (
    <View style={{ height: "100%" }}>
      <Header title={"My appointments"} />
      <AppointmentCard data={data} />
    </View>
  );
}
