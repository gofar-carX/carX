
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import Navbar from './src/components/Navbar.js'
import Test from './src/components/test.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LogIn from "./src/components/view1/login"
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
   <LogIn/>
    {/* <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Nav" component={Navbar} />
      <Stack.Screen name="Test" component={Test} />  
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
