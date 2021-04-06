import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

interface Config {
  toValue: number;
  duration?: number;
}
const ColorAnim = () => {
  const animRef = useRef(new Animated.Value(1)).current;
  // const handleAnimation = () => {
  //   Animated.timing(animRef, {
  //     toValue: 1,
  //     duration: 1500,
  //     useNativeDriver: false,
  //   }).start(() => {
  //     Animated.timing(animRef, {
  //       toValue: 0,
  //       duration: 1500,
  //       useNativeDriver: false,
  //     }).start();
  //   });
  // };

  const handleAnimation = () => {
    Animated.spring(animRef, {
      toValue: 2,
      tension: 160,
      friction: 2,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animRef, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  // const boxinterp = animRef.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["red", "green"],
  // });

  const boxinterp = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    // backgroundColor: boxinterp,
    transform: [
      {
        // rotate: boxinterp,
        scale: animRef,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text>ss</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});

export default ColorAnim;
