
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import test from "./src/components/Nav/test"
import LogIn from './src/components/login/login.js';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/Main'

const Stack = createNativeStackNavigator();


export default function App() {
  const nav = useNavigationContainerRef()
  const [AppReady, setAppReady] = useState(null)

  const [spinner, setSpinner] = useState(false)
  const [storedCredentials, setStoredCredentials] = useState('')



  setTimeout(() => {
    setSpinner(true)
  }, 500)
  return (
    


    <>
      {spinner == false ?
        <>
          <View style={[styles.container, {

            flexDirection: "column"
          }]}>

            <View style={{ flex: 6, justifyContent: "center" }} >
              <ActivityIndicator color="#D9AF91" bool="true" size="large" style={{ textAlign: "center" }} />
              <Text style={{ textAlign: "center" }}>loading...</Text>
            </View>

          </View>

        </>



        :
        <NavigationContainer independent={true} ref={nav}  >
          <Stack.Navigator screenOptions={{ headerShown: false }}  >

            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="Main" component={Main} />








          </Stack.Navigator>

        </NavigationContainer>}

    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

