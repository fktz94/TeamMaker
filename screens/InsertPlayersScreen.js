import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { ContinueButton, styles as homeScreenStyles } from "./HomeScreen";
import { useState } from "react";
import uuid from "react-native-uuid";

function PlayerListItem({ index, name, handleDeleteItem }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderRadius: 6,
        padding: 4,
        backgroundColor: "darkseagreen",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 16, flex: 1 }}>
        {index + 1}. {name}
      </Text>
      <Pressable
        style={{ justifyContent: "center" }}
        onPress={handleDeleteItem}
      >
        <Text
          style={{
            fontSize: 12,
            borderWidth: 1,
            textAlign: "center",
            borderRadius: 100,
            padding: 4,
            backgroundColor: "thistle",
          }}
        >
          ❌
        </Text>
      </Pressable>
    </View>
  );
}

export default function InsertPlayersScreen({ navigation, route }) {
  const {
    params: { playersQtyPerTeam },
  } = route;
  const [playersName, setPlayersName] = useState("");
  const [playersList, setPlayersList] = useState([]);

  const totalPlayers = playersQtyPerTeam * 2;
  const remainingPlayers = totalPlayers - playersList.length;
  const isAllPlayers = playersList.length === totalPlayers;

  const handlePlayersList = () => {
    if (!playersName) return;
    setPlayersList((prev) => {
      return [...prev, { name: playersName, id: uuid.v4() }];
    });
    setPlayersName("");
  };

  const handleDeleteItem = (id) => {
    setPlayersList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleCreateTeams = () => {
    navigation.navigate("CreatedTeamsScreen", {
      playersList: playersList.map((item) => item.name),
    });
  };

  return (
    <SafeAreaView
      style={[
        homeScreenStyles.container,
        {
          paddingVertical: StatusBar.currentHeight + 16,
          gap: 32,
          justifyContent: "flex-start",
        },
      ]}
    >
      <View style={[styles.topContainer]}>
        <Text style={styles.text}>
          Now we have to write down the name of every player!
        </Text>
        <Text style={styles.remainingPlayersText}>
          {remainingPlayers > 0
            ? `${
                remainingPlayers > 2 ? "Still " : "Just "
              }${remainingPlayers} to go!`
            : "All players created!"}
        </Text>
        {!isAllPlayers && (
          <>
            <TextInput
              style={styles.textInput}
              placeholder="Player's name"
              value={playersName}
              onChangeText={setPlayersName}
              editable={!isAllPlayers}
            />
            <ContinueButton
              buttonStyles={{ paddingVertical: 8 }}
              textButtonStyles={{ fontSize: 16 }}
              text="Submit player"
              handlePress={handlePlayersList}
              isDisabled={isAllPlayers}
            />
          </>
        )}
      </View>
      {isAllPlayers && (
        <ContinueButton
          text="Click to Create Teams!"
          buttonStyles={{ backgroundColor: "lightgreen" }}
          textButtonStyles={{ fontWeight: "bold" }}
          handlePress={handleCreateTeams}
        />
      )}
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>List of players</Text>
        <ScrollView>
          <View style={styles.listContainer}>
            <View style={styles.list}>
              {playersList.map(({ name, id }, index) => {
                if (index % 2 === 0) {
                  return (
                    <PlayerListItem
                      index={index}
                      key={id}
                      name={name}
                      handleDeleteItem={() => handleDeleteItem(id)}
                    />
                  );
                }
              })}
            </View>
            <View style={styles.list}>
              {playersList.map(({ name, id }, index) => {
                if (index % 2 !== 0) {
                  return (
                    <PlayerListItem
                      index={index}
                      key={id}
                      name={name}
                      handleDeleteItem={() => handleDeleteItem(id)}
                    />
                  );
                }
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    gap: 16,
    height: "fit-content",
  },
  bottomContainer: {
    gap: 16,
    justifyContent: "flex-start",
    flex: 1,
    width: "100%",
  },
  listContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 4,
  },
  list: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 4,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  remainingPlayersText: {
    fontSize: 16,
    color: "maroon",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    backgroundColor: "darkseagreen",
  },
});
