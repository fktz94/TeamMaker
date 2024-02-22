import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { styles as homeScreenStyles } from "./HomeScreen";
import { useState } from "react";

function QtyButton({ text, handleButtonPress, playersQty }) {
  const isMinus = text === "-";
  const isPlus = text === "+";

  const isDisabled =
    (isMinus && playersQty === 2) || (isPlus && playersQty === 11);

  const buttonStyles = StyleSheet.create({
    button: {
      backgroundColor: isDisabled ? "lightgray" : "lightblue",
      paddingHorizontal: 20,
      fontSize: 32,
      borderWidth: 1,
      borderBottomStartRadius: isMinus ? 24 : 0,
      borderTopStartRadius: isMinus ? 24 : 0,
      borderBottomEndRadius: isPlus ? 24 : 0,
      borderTopEndRadius: isPlus ? 24 : 0,
    },
    text: {
      fontSize: 32,
      flex: 1,
      textAlignVertical: "center",
      color: isDisabled ? "gray" : "black",
    },
  });

  return (
    <Pressable
      style={[buttonStyles.button]}
      onPress={() => handleButtonPress(text)}
      disabled={isDisabled}
    >
      <Text style={buttonStyles.text}>{text}</Text>
    </Pressable>
  );
}

export default function PlayersQtyScreen() {
  const [playersQtyPerTeam, setPlayersQtyPerTeam] = useState(5);

  const handlePlayersQtyPerTeam = (value) => {
    if (value === "+" && playersQtyPerTeam < 11)
      setPlayersQtyPerTeam((prevState) => prevState + 1);
    if (value === "-" && playersQtyPerTeam > 2)
      setPlayersQtyPerTeam((prevState) => prevState - 1);
  };

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Text style={styles.text}>Number of players per team</Text>
      <View style={styles.buttonContainer}>
        <QtyButton
          text="-"
          handleButtonPress={handlePlayersQtyPerTeam}
          playersQty={playersQtyPerTeam}
        />
        <TextInput
          onChangeText={setPlayersQtyPerTeam}
          value={playersQtyPerTeam.toString()}
          keyboardType="numeric"
          style={styles.textInputNumber}
        />
        <QtyButton
          text="+"
          handleButtonPress={handlePlayersQtyPerTeam}
          playersQty={playersQtyPerTeam}
        />
      </View>
      <Pressable style={styles.buttonContinue} onPress={() => {}}>
        <Text style={styles.buttonContinueText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  textInputNumber: {
    borderWidth: 1,
    padding: 16,
    width: 72,
    textAlign: "center",
    fontSize: 32,
    backgroundColor: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  buttonContinue: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "lightblue",
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonContinueText: { textAlign: "center", fontSize: 18 },
});
