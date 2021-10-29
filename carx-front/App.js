
import React from 'react';
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    
     <View style={tailwind("flex flex-row h-full  bg-gray-500 ")}>
      <View style={tailwind(" w-1/3 bg-red-500 flex flex-col ")}>
        <View style={tailwind(" h-1/3 bg-red-200 ")}><Text>hello</Text></View>
      </View>
      <View style={tailwind(" w-1/3 bg-blue-500  ")}>
        <Text>hello</Text>
      </View>
    </View>
    
  );
}




