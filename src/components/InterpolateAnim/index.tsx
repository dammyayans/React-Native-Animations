import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { interpolateNumber, interpolateRgb } from "d3-interpolate";
const MovingAnim = () => {
  const animRef = useRef(new Animated.Value(0)).current;
  const viewRef = useRef(null);

  useEffect(() => {
    const positionInterpolate = interpolateNumber(0, 300);
    const colorInterpolate = interpolateRgb(
      "rgb(233,234,211)",
      "rgb(213,134,211)"
    );
    animRef.addListener(({ value }) => {
      const position = positionInterpolate(value);
      const color = colorInterpolate(value);
      const style = [
        {
          transform: [{ translateY: position }],
          backgroundColor: color,
        },
      ];
      viewRef.current?.setNativeProps({
        style: style,
      });
    });
  }, []);
  //   const handleAnimation = () => {
  //     Animated.timing(animRef, {
  //       toValue: 300,
  //       duration: 350,
  //       useNativeDriver: false,
  //     }).start(() =>
  //       Animated.timing(animRef, {
  //         toValue: 0,
  //         useNativeDriver: false,
  //       }).start()
  //     );
  //   };

  const handleAnimation = () => {
    Animated.timing(animRef, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => animRef.setValue(0));
  };
  const bgColor = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(233,234,211)", "rgb(213,134,211)"],
  });
  const translateY = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });
  const animatedStyle = {
    transform: [{ translateY }],
    // transform: [{ scale: animRef }],
    backgroundColor: bgColor,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        {/* <Animated.View style={[styles.box, animatedStyle]}>
          <Text>ss</Text>
        </Animated.View> */}
        <View style={styles.box} ref={viewRef} />
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

export default MovingAnim;
