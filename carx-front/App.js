
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import LogIn from './src/components/login/login.js';


import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/Main'

const Stack = createNativeStackNavigator();


export default function App() {
  return (


    <NavigationContainer independent={true}  >
      <Stack.Navigator screenOptions={{ headerShown: false }}  >
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Main" component={Main} />
       
        
       

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
