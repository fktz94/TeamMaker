import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";
import { ContinueButton, styles as homeScreenStyles } from "./HomeScreen";

export default function InsertPlayersScreen({ route }) {
  const {
    params: { playersQtyPerTeam },
  } = route;
  const totalPlayers = playersQtyPerTeam * 2;

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Now we have to write down the name of every player!
        </Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
  },
});
