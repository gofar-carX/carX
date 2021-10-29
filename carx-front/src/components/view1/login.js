import React from 'react';
import { StyleSheet, Text, View ,TextInput } from 'react-native';
import tailwind from "tailwind-rn";

export default function LogIn() {
  return (
    <View >
      <View style={tailwind("h-full w-1/3  flex")}>
       <TextInput  
       style={[styles.in]}
        placeholder="useless placeholder"
        keyboardType="numeric"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

    in:{
        display: 1,
        justifyContent:"center",
        width: 200,
       
    
    }


})