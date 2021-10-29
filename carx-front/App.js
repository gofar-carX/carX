
import React from 'react';
import {  Text, View } from 'react-native';
import tailwind from "tailwind-rn";

import LogIn from "./src/components/view1/login"

export default function App() {
  return (
    <View >
      <View style={tailwind("h-full w-1/3  flex  mt-20 ")}>
        <Text>hello</Text>
        <LogIn/>
      </View>
    </View>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
