
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import LogIn from './src/components/login/login.js';
// import Reviews from './src/components/Reviews'
import Home from './src/components/Home/Home'
import Profile from './src/components/Profile/Profile'
import EditProfile from './src/components/Profile/ProfileEdit'


import { NavigationContainer } from '@react-navigation/native';
import LocationPage from './src/components/washService/PageOne/Location'
import Wash from './src/components/washService/PageOne/Wash.js';
import HomeWash from './src/components/washService/HomeWash.js';
import Confirmation from './src/components/washService/PageTow/Confirmation.js';
import NavigationBar from "./src/components/Home/Home"
import Maps from './src/components/washService/PageOne/Maps.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/Main'

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
    {/* return (


    <NavigationContainer independent={true}  >
      <Stack.Navigator screenOptions={ {headerShown:false }}  >
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen  name="Main" component={Main} /> 
      </Stack.Navigator>
      
    </NavigationContainer>



  ); */}




{/* 
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); */}
