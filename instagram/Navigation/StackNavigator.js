import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import TabNavigator from "./TabNavigation";
import Home from "../Screens/Home";
export default function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
 