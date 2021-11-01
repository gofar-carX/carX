
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import Navbar from './src/components/Nav/Navbar.js'
import Test from './src/components/Nav/test.js'
import LogIn from './src/components/login/login.js';
import Reviews from './src/components/Nav/Reviews'
import Home from './src/components/Home/Home'
import Profile from './src/components/Profile/Profile'
import EditProfile from './src/components/Profile/ProfileEdit'

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Wash from './src/components/washService/PageOne/Wash.js';
import HomeWash from './src/components/washService/HomeWash.js';
import Confirmation from './src/components/washService/PageTow/Confirmation.js';
import Main from './src/components/Main'

const Stack = createNativeStackNavigator();


export default function App() {
    return (

    <NavigationContainer independent={true}  >
      <Stack.Navigator screenOptions={ {headerShown:false }}  >
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen  name="Main" component={Main} /> 
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
