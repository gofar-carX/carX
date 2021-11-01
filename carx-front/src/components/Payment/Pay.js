import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Pay() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 / 3, justifyContent:"flex-end" }}>
        <View style={{ flex: 1 / 3, justifyContent:"flex-start"}}>
          <Text style={{ textAlign: "center", fontSize: 30 }}>Payment</Text>
        </View>

      </View>
      <View style={{ flex: 1 / 3, justifyContent: "space-around" }}>
        <TextInput
          style={[styles.carx]}
          placeholder="Card"
          placeholderStyle={{ fontFamily: "AnotherFont", borderColor: "red" }}
        />
        <TextInput style={[styles.carx]} />
        <View style={{ flex: 1 / 3, flexDirection: "row" }}>
          <TextInput style={([styles.carx], styles.input)} />
          <TextInput style={([styles.carx], styles.input)} />
        </View>
        <TextInput style={[styles.carx]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  carx: {
    backgroundColor: "gray",
    opacity: 0.2,
    borderRadius: 10,
    lineHeight: 2.4,
    textAlign: "left",
    height: 50,
    width: 271,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "gray",
    opacity: 0.2,
    borderRadius: 10,
    lineHeight: 2.4,
    textAlign: "left",
    height: 45,
    width: 100,
    borderWidth: 1,
    padding: 10,
  },
});
