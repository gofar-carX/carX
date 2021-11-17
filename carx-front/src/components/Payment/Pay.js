import { StripeProvider } from "@stripe/stripe-react-native";
import Checkout from "./components/checkout";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

function Pay() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <StripeProvider publishableKey="(pk_test_51Jr2k6HXpALkWPl9xTEGGEcrZPJtjKKCtGhnDX3t440kfzcUZoBqfEnhkPQFckdLkYZPTW1dzAXppINYERquHl5k00JptMYjVI)">
        <Checkout />
      </StripeProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Pay;
