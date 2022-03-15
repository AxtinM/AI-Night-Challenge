import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ParkingListScreen from "./screens/ParkingListScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import MapScreen from "./screens/MapScreen";
export default function App() {
  // return <HomeScreen />;

  return (
    <MapScreen />
    // <NavigationContainer theme={{ colors: { background: "#ffff" } }}>
    //   <HomeNavigation />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
