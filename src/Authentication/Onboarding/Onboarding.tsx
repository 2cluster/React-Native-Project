import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  multiply,
  divide,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";

import { theme } from "../../Components";
import { Routes, StackNavigationProps } from "../../Components/Navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.l,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footer: {
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.l,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadii.l,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your Outfits",
    description: "BLEH BLEH BLEH",
    color: theme.colors.darkgrey,
    picture: {
      src: require("../../../assets/black-6.png"),
      width: 634,
      height: 854,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it firsts",
    description: "BLEH BLEH BLEH",
    color: theme.colors.darkgrey,
    picture: {
      src: require("../../../assets/black-4.png"),
      width: 835,
      height: 725,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description: "BLEH BLEH BLEH",
    color: theme.colors.darkgrey,
    picture: {
      src: require("../../../assets/black-5.png"),
      width: 569,
      height: 854,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "BLEH BLEH BLEH",
    color: theme.colors.darkgrey,
    picture: {
      src: require("../../../assets/black-8.png"),
      width: 835,
      height: 708,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={[
                  { tintColor: theme.imageColor.medium },
                  {
                    width: width - theme.borderRadii.l,
                    height:
                      ((width - theme.borderRadii.l) * picture.height) /
                      picture.width,
                  },
                ]}
              />
            </Animated.View>
          );
        })}

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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
