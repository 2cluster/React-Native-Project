import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/Components";
import { Routes } from "./src/Components/Navigation";

const assets = [...authenticationAssets];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticatorNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticatorNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
