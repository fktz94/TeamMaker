import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PlayersQtyScreen from "./screens/PlayersQtyScreen";
import InsertPlayersScreen from "./screens/InsertPlayersScreen";
import CreatedTeamsScreen from "./screens/CreatedTeamsScreen";

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
        <Stack.Screen
          name="CreatedTeamsScreen"
          component={CreatedTeamsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
