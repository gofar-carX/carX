
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import SelectDropdown from 'react-native-select-dropdown'
import Navbar from './src/components/Navbar.js'
import Test from './src/components/test.js'
import LogIn from './src/components/login/login.js';
import Reviews from './src/components/Reviews'
import Home from './src/components/Home/Home'
import Profile from './src/components/Profile/Profile'
import EditProfile from './src/components/Profile/ProfileEdit'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wash from './src/components/washService/PageOne/Wash.js';
import HomeWash from './src/components/washService/HomeWash.js';
import Confirmation from './src/components/washService/PageTow/Confirmation.js';
import NavigationBar from "./src/components/Home/Home"

const Stack = createNativeStackNavigator();


export default function App() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
  // <NavigationBar/>

  
    <NavigationContainer>
      <Stack.Navigator>
     
      
      
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Nav" component={Navbar} />
      <Stack.Screen name="Reviews" component={Reviews} /> 
      <Stack.Screen name="Test" component={Test} /> 
      {/* <Stack.Screen name="Profile" component={Profile} /> 
      <Stack.Screen name="EditProfile" component={EditProfile} />  */}

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
