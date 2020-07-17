import React from "react";
import { View, Dimensions, StyleSheet, ImageRequireSource } from "react-native";

import { Text } from "../../Components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    height: number;
    width: number;
  };
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
