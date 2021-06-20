import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Home({ navigation }) {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((json) => setCountries(json));
  }, []);

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          margin: 12,
          outline: "none",
          color: "#222",
          padding: 12,
        }}
        onChange={(e) => setSearchCountry(e.target.value)}
        placeholder="Search Country"
      />
      {countries
        .filter((country) => {
          if (searchCountry === "") {
            return country;
          } else if (
            country.name.toUpperCase().includes(searchCountry.toUpperCase()) ||
            country.capital.toUpperCase().includes(searchCountry.toUpperCase())
          ) {
            return country;
          }
        })
        .map((country, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", country)}
            key={index}
          >
            <Text style={styles.touchableText}>{country.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  touchableText: {
    padding: 12,
    backgroundColor: "#222",
    margin: 12,
    color: "#fff",
  },
});
