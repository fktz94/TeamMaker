import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CreatedTeamsScreen({ route }) {
  const {
    params: { playersList },
  } = route;

  console.log(playersList);
  return (
    <View>
      <Text>CreatedTeamsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
