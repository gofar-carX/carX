
import React from 'react';

import LogIn from './src/components/login/login.js';
import Pay from './src/components/Payment/Pay'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/Main'

const Stack = createNativeStackNavigator();


export default function App() {
    return (


    <NavigationContainer independent={true}  >
      <Stack.Navigator screenOptions={ {headerShown:false }}  >
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen  name="Main" component={Main} /> 
        <Stack.Screen  name="Pay" component={Pay} /> 
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
