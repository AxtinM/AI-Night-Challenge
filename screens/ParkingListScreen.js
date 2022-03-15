import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ParkItem from "../components/ParkItem";
import HomeBtn from "../components/Buttons/HomeBtn";
import Icon from "react-native-vector-icons/FontAwesome";

const ParkingComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // borderWidth: 3,
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            // borderWidth: 1,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ParkItem />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ParkingListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={30} color="#A06CD5" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View
          style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
        >
          {[1, 2, 3, 4, 5, 6].map((elem, i) => (
            <ParkingComponent key={i} />
          ))}
        </View>
        <View style={{ height: 120 }}></View>
      </ScrollView>
      <View
        style={{
          flex: 0.17,
          paddingTop: 18,
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
        }}
      >
        <HomeBtn style={{ elevation: 10 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    marginTop: 40,
    width: "100%",
    height: "100%",
    paddingBottom: 200,
  },
  btn: {
    height: 70,
    width: 70,
    backgroundColor: "#E2CFEA",
    alignItems: "flex-end",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
    right: "31%",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 6,
  },
});

export default ParkingListScreen;
