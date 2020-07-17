import React from "react";
import { Image, Dimensions } from "react-native";

import { Box, Text } from "../../Components/Theme";
import { theme, Button } from "../../Components";
import { Routes, StackNavigationProps } from "../../Components/Navigation";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/black-4.png"),
  width: 300,
  height: 260,
};

export const assets = [picture.src];

const Welcome = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="l"
        backgroundColor="darkgrey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.l,
            height:
              ((width - theme.borderRadii.l) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="l">
        <Box
          backgroundColor="darkgrey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius="l"
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl"
            flex={1}
          >
            <Text variant="title2">Let's Get Started</Text>
            <Text variant="body" textAlign="center">
              Login to your account or signup below for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Onboarding")}
            />
            <Button
              label="Join now, It's Free"
              onPress={() => navigation.navigate("Onboarding")}
            />
            <Button
              variant="transparent"
              label="Join now, It's Free"
              onPress={() => navigation.navigate("Onboarding")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
