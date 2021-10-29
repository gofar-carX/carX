
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";

export default function test() {
  return (
    <View >
      <View style={tailwind("h-full w-1/3 bg-red-500 flex   ")}>
        <Text>test</Text>
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
