import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeBtn = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("ParkingList");
      }}
    >
      <Icon name="book" size={30} color="#fff" />
      <Text style={styles.text}>Browse parking list</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6750A4",
    height: 58,
    maxHeight: 58,
    minHeight: 58,
    width: 270,
    borderRadius: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
  },
});

export default HomeBtn;
