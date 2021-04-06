import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

// interface NativeProps {
//   scrollEnabled: Boolean;
//   style: [];
// }
const SetNativeProps = () => {
  const animRef = useRef(new Animated.Value(0)).current;

  const boxinterp = animRef.interpolate({
    inputRange: [0, 3000],
    outputRange: ["blue", "yellow"],
  });
  const scrollRef = useRef(null);
  const animatedStyle = {
    backgroundColor: boxinterp,
  };
  let _enabled = false;
  const handleToggle = () => {
    // console.log("scrollRef");
    _enabled = !_enabled;
    const style = [styles.scroll];
    if (!_enabled) {
      style.push(styles.hide);
    } else {
      style.push(styles.show);
    }
    scrollRef.current?.setNativeProps({
      scrollEnabled: _enabled,
      style: style,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ zIndex: 1, height: 30 }}
        onPress={handleToggle}
      >
        <Text>Toggle</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
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
    marginTop: 64,
  },
  content: {
    height: 3000,
  },
  scroll: {
    flex: 1,
    opacity: 1,
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
});

export default SetNativeProps;
