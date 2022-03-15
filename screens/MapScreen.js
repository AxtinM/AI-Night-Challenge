import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.mapScreen}>
      <Text>MapScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapScreen: {},
});

export default MapScreen;
