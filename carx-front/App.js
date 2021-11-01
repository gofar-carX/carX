
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Confirmation from './src/components/washService/PageTow/Confirmation.js';
import Wash from './src/components/washService/PageOne/Wash.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //test devide work
    <Wash />
    //  <Confirmation />

    
    // <>
  
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Nav" component={Navbar} />
    //   <Stack.Screen name="Test" component={Test} />  
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
