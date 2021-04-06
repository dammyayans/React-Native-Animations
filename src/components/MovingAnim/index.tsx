import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const InterpolateAnim = () => {
  const animRef = useRef(new Animated.Value(1)).current;

  const handleAnimation = () => {
    Animated.timing(animRef, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() =>
      Animated.timing(animRef, {
        toValue: 2,
        duration: 1500,
        useNativeDriver: false,
      }).start()
    );
  };

  const translateY = animRef.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });
  const opacityAnim = translateY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });
  const translateX = animRef.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    outputRange: [0, 20, -20, 30, -30, 40, -70, 0, -100],
  });
  const animatedStyle = {
    // transform: [{ translateY: animRef }],
    transform: [{ translateX }, { translateY }],
    opacity: opacityAnim,
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

export default InterpolateAnim;
