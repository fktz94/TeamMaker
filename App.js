import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PlayersQtyScreen from "./screens/PlayersQtyScreen";
import InsertPlayersScreen from "./screens/InsertPlayersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PlayersQtyScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayersQtyScreen" component={PlayersQtyScreen} />
        <Stack.Screen
          name="InsertPlayersScreen"
          component={InsertPlayersScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
