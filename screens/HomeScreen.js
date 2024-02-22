import { View, Image, StyleSheet, Button, StatusBar } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImage}
        source={require("../assets/futbol.png")}
      />
      <Button
        title="Go make your teams!"
        onPress={() => navigation.navigate("PlayersQtyScreen")}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    paddingHorizontal: 32,
  },
  homeImage: {
    width: 140,
    height: 140,
  },
});
