import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeBtn from "../components/Buttons/HomeBtn";
import BrowseBtn from "../components/Buttons/BrowseBtn";
import ParkImg from "../assets/parking/ParkSvg.js";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Text style={styles.text}>Easy Parking</Text>
      </View>
      <View style={{ flex: 0.7, height: 166 }}>
        <HomeBtn />
        <BrowseBtn navigation={navigation} />
      </View>
      <View
        style={{
          flex: 1.1,
          marginBottom: 10,
          aspectRatio: 1,
          height: 270,
          width: "100%",
          justifyContent: "space-around",
          overflow: "visible",
        }}
      >
        <ParkImg style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 64,
    // lineHeight: 10,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#102B3F",
  },
  image: {
    backgroundColor: "#fff",
    // alignSelf: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
