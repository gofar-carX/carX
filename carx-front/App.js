
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import test from "./src/components/Nav/test"
import LogIn from './src/components/login/login.js';
// import Reviews from './src/components/Reviews'
import Home from './src/components/Home/Home'
import Profile from './src/components/Profile/Profile'
import EditProfile from './src/components/Profile/ProfileEdit'


import { NavigationContainer } from '@react-navigation/native';
import Wash from './src/components/washService/PageOne/Wash.js';
import Confirmation from './src/components/washService/PageTow/Confirmation.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
  // <Wash />
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Maps " component={Maps } />  */}

      <Stack.Screen name="Wash" component={Wash} /> 
      <Stack.Screen name="Confirmation" component={Confirmation} /> 
      <Stack.Screen name="Login" component={LogIn} />
      {/* <Stack.Screen name="Nav" component={Navbar} /> */}
      {/* <Stack.Screen name="Reviews" component={Reviews} />  */}
      </Stack.Navigator>
   </NavigationContainer>
      
     );
    }
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

