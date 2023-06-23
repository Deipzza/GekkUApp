import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import StartScreen from "./src/screens/StartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Login"
          component={ LoginScreen }
        />
        <Stack.Screen 
          name="Start"
          component={ StartScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
