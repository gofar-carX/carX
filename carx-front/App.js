
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import SelectDropdown from 'react-native-select-dropdown'
import Navbar from './src/components/Navbar.js'
import Test from './src/components/test.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wash from './src/components/washService/Wash.js';

const Stack = createNativeStackNavigator();


export default function App() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    //test devide work
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Nav" component={Wash} />
       </Stack.Navigator>
     </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Nav" component={Navbar} />
    //   <Stack.Screen name="Test" component={Test} />  
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
