import React, { useRef } from "react";
import { View, StyleSheet, Animated, ScrollView } from "react-native";

const ScrollViewAnim = () => {
  const animRef = useRef(new Animated.Value(0)).current;

  const boxinterp = animRef.interpolate({
    inputRange: [0, 3000],
    outputRange: ["blue", "yellow"],
  });

  const animatedStyle = {
    backgroundColor: boxinterp,
  };
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animRef,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        <Animated.View style={[styles.content, animatedStyle]}></Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});

export default ScrollViewAnim;
