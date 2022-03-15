import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ParkItem = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.7,
          padding: 15,
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Parking Name</Text>
        <Text style={{ fontSize: 15, marginVertical: 5 }}>300 m</Text>
        <Text style={{ fontSize: 16 }}>Total Spots : 1000</Text>
        <Text style={{ fontSize: 16 }}>Available : 90</Text>
        <Text style={{ fontSize: 16 }}>Estimated : 70</Text>
      </View>
      <View
        style={{
          flex: 0.7,
          flexDirection: "row",
          alignSelf: "center",
          //   marginTop: 0,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#A06CD5",
            width: 60,
            height: 60,
            flex: 0.6,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Icon name="map-pin" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#A06CD5",
            width: 60,
            height: 60,
            flex: 0.6,
            marginHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Icon name="location-arrow" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 20,
    width: "88%",
    borderWidth: 1,
    borderColor: "#5E469B",
    borderRadius: 20,
    flexDirection: "row",
  },
});

export default ParkItem;
