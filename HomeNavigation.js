import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ParkingListScreen from "./screens/ParkingListScreen";

const HomeScreenView = ({ navigation }) => {
  return (
    <>
      <HomeScreen navigation={navigation} />
    </>
  );
};

const ParkingListScreenView = ({ navigation }) => {
  return (
    <>
      <ParkingListScreen navigation={navigation} />
    </>
  );
};
const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRoute="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreenView}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ParkingList"
        component={ParkingListScreenView}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
