
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import Test from "./src/components/test"

export default function App() {
  return (
    <View >
      <View style={tailwind("h-full w-1/3 bg-blue-500 flex   ")}>
        <Text>hello</Text>
        <Test />
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
