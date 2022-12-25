import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>
  );
}

export default MainStack;
