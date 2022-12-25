import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import MainStack from "./MainStack";

function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style="light" backgroundColor="#fff" />
    </NavigationContainer>
  );
}

export default Navigation;
