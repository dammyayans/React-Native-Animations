import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorAnim from "./src/components/ColorAnim";
import MovingAnim from "./src/components/InterpolateAnim";
import InterpolateAnim from "./src/components/MovingAnim";
import ScrollViewAnim from "./src/components/ScrollViewAnim";
import SetNativeProps from "./src/components/SetNativeProps";

export default function App() {
  return (
    <View style={styles.container}>
      <MovingAnim />
      {/* <ColorAnim /> */}
      {/* <ScrollViewAnim /> */}
      {/* <InterpolateAnim /> */}
      {/* <SetNativeProps /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
