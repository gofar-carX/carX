
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from './Nav/Navbar.js'
import Reviews from './Nav/Reviews'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import EditProfile from './Profile/ProfileEdit'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wash from './washService/PageOne/Wash.js';
import Confirmation from './washService/PageTow/Confirmation.js';
import axios from 'axios';
import NotificationUser from "./notification/notification"
import jwtDecode from 'jwt-decode';
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createNativeStackNavigator();



export default function Main({ route, navigation }) {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    fetch()

  })

  let fetch = () => {
    AsyncStorage.getItem('auth').then((result) => {
      let userId = jwtDecode(result)
    
      axios.get(process.env.serv+'users/'+`${userId.user_id}`).then((result) => {
        setUserData(result.data.data)
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }


  const navi = useNavigationContainerRef();
  return (

    <NavigationContainer independent={true} ref={navi}>
      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="Home" >
          {props => (<Home navigation={navi} user={userData} />)}
        </Stack.Screen>

        <Stack.Screen options={{ headerShown: false }} name="Nav"  >
          {props => (<Navbar na={navigation} navigation={navi} user={userData} />)}
        </Stack.Screen>

        <Stack.Screen options={{ headerShown: false }} name="Reviews"  >
          {props => (<Reviews navigation={navi} user={userData} />)}
        </Stack.Screen>

        <Stack.Screen options={{ headerShown: false }} name="Wash" >
          {props => (<Wash fetch={fetch} navigation={navi} user={userData} />)}
        </Stack.Screen>

        <Stack.Screen name="Confirmation" component={Confirmation} />

        <Stack.Screen name="Profile" >
          {props => (<Profile navigation={navi} user={userData} />)}
        </Stack.Screen>

        <Stack.Screen options={{ headerShown: false }} name="EditProfile"  >
          {props => (<EditProfile fetch={fetch} na={navigation} navigation={navi} user={userData} />)}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="NotificationUser"  >
          {props => (<NotificationUser navigation={navi} user={userData}  fetch={fetch}/>)}
        </Stack.Screen>
      </Stack.Navigator>

      <LinearGradient colors={['#0857C1', '#4398F8']} style={{ width: 'auto', height: 65, borderTopLeftRadius: 26, borderTopRightRadius: 26 }}>
        <View style={tailwind('p-4 flex flex-row ')} >

          <View style={{ flex: 0.34, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => { navi.navigate("Home") }} >
              <Text  >
                <Ionicons name="ios-home-sharp" size={30} color="white" />
              </Text>
            </TouchableOpacity>

          </View>

          <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>

            <TouchableOpacity onPress={() => { navi.navigate("NotificationUser") }}>
              <Text >
                <Ionicons name="notifications" size={30} color="white" />
              </Text>
            </TouchableOpacity>

          </View>

          <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => { navi.navigate("Nav") }}  >
              <Text   >
                <MaterialIcons name="menu" size={30} color="white" />
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </LinearGradient>


    </NavigationContainer>


  );
}




