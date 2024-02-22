import { View, Image, StyleSheet, Pressable, Text } from "react-native";

export function ContinueButton({
  text,
  handlePress,
  buttonStyles,
  textButtonStyles,
  isDisabled = false,
}) {
  const styles = StyleSheet.create({
    buttonContinue: {
      paddingHorizontal: 16,
      alignSelf: "center",
      backgroundColor: isDisabled ? "lightgray" : "lightblue",
      paddingVertical: 12,
      borderWidth: 1,
      borderRadius: 8,
      elevation: 5,
    },
    buttonContinueText: { textAlign: "center", fontSize: 18 },
  });

  return (
    <Pressable
      style={[styles.buttonContinue, buttonStyles]}
      onPress={handlePress}
      disabled={isDisabled}
    >
      <Text style={[styles.buttonContinueText, textButtonStyles]}>{text}</Text>
    </Pressable>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImage}
        source={require("../assets/futbol.png")}
      />
      <ContinueButton
        text="Go make your teams!"
        handlePress={() => navigation.navigate("PlayersQtyScreen")}
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
