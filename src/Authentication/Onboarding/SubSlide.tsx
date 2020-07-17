import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Text } from "../../Components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text variant="body">{description}</Text>
      <Button
        label={last ? "Lets get Started" : " Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;
