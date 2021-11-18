import React ,{ useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';

const Stack = createNativeStackNavigator();
export default function  WorkerHome(){
        
        useEffect(()=>{
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setErrorMsg("Permission to access location was denied");
                  return;
                }
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                setid(user.id);
                
              })();  
            AsyncStorage.getItem("workerAuth").then((result)=>{
                console.log(jwtDecode(result)["workerid"])
 
            })        
        },[])

    return (

        <>
 
        <View>
            <Text>
                worker home 
            </Text>
        </View>

</>
 )





}