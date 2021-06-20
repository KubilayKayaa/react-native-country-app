import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

export default function Detail({ navigation }) {
  function params(param) {
    return navigation.getParam(param);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{params("name")}</Text>
      <Text style={styles.capital}>{params("capital")}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  flag: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
  },
});
