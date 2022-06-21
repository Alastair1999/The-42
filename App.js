import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import {AuthProvider} from "./src/provider/AuthProvider";
import {ThemeProvider} from "react-native-rapi-ui";
import {LogBox} from "react-native";

export default function App(props) {
  const images = [
    require("./assets/icon.png"),
    require ("./assets/splash.png"),
    require ("./assets/favicon.png")
  ];

  React.useEffect(() => {
    LogBox.ignoreLogs([

    ]);
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}