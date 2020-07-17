import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your Outfits",
    description: "BLEH BLEH BLEH",
    color: "#BFEAFC",
    picture: require("../../../assets/1.png"),
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it firsts",
    description: "BLEH BLEH BLEH",
    color: "#BEECC4",
    picture: require("../../../assets/2.png"),
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description: "BLEH BLEH BLEH",
    color: "#FFE4D9",
    picture: require("../../../assets/3.png"),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "BLEH BLEH BLEH",
    color: "#FFDDDD",
    picture: require("../../../assets/4.png"),
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <SubSlide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
