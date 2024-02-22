import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { ContinueButton, styles as homeScreenStyles } from "./HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const arrangeTeams = (allPlayersList) => {
  const shuffledPlayers = allPlayersList
    .map((item) => ({
      sort: Math.random(),
      value: item,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const halfTeam = allPlayersList.length / 2;

  const teams = {
    firstTeam: shuffledPlayers.slice(0, halfTeam),
    secondTeam: shuffledPlayers.slice(halfTeam),
  };

  return teams;
};

export default function CreatedTeamsScreen({ navigation, route }) {
  const {
    params: { playersList },
  } = route;

  const [shuffledTeams, setShuffledTeams] = useState(arrangeTeams(playersList));
  const { firstTeam, secondTeam } = shuffledTeams;

  const handleShuffleTeams = () => setShuffledTeams(arrangeTeams(playersList));
  const handleStartAgain = () => navigation.navigate("Home");

  return (
    <SafeAreaView style={[homeScreenStyles.container, styles.container]}>
      <Text style={styles.text}>Here they go!</Text>
      <View style={styles.teamsContainer}>
        <FlatList
          style={styles.eachTeamList}
          data={firstTeam}
          ListHeaderComponent={<Text style={styles.listHeader}>Team One</Text>}
          ItemSeparatorComponent={<View style={styles.separator} />}
          renderItem={({ item }) => (
            <Text style={styles.playerText}>{item}</Text>
          )}
        />
        <FlatList
          style={styles.eachTeamList}
          data={secondTeam}
          ListHeaderComponent={<Text style={styles.listHeader}>Team Two</Text>}
          ItemSeparatorComponent={<View style={styles.separator} />}
          renderItem={({ item }) => (
            <Text style={styles.playerText}>{item}</Text>
          )}
        />
      </View>
      <ContinueButton
        text="Don't like it? Throw again!"
        textButtonStyles={{ fontSize: 12 }}
        handlePress={handleShuffleTeams}
      />
      <Button title="Start again!" onPress={handleStartAgain} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  teamsContainer: { flexDirection: "row", gap: 16 },
  eachTeamList: {},
  listHeader: { fontSize: 24, marginBottom: 16 },
  playerText: { fontSize: 20 },
  separator: { borderWidth: 0.5, borderColor: "black" },
});
