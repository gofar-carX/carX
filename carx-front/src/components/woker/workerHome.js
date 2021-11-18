import React ,{ useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
const Stack = createNativeStackNavigator();
export default function  WorkerHome(){
    const [location, setLocation] = useState(null)
    const [WorkerDatadata , setWorkerData] =useState([])       
        useEffect(()=>{
            (async () => {

                let { status } = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                  setErrorMsg('Permission to access location was denied');
                  return;
                }
                let location = await Location.getCurrentPositionAsync({});
                console.log(location,"ifnz")
                setLocation(location);
              })();
            AsyncStorage.getItem("workerAuth").then((result)=>{
              axios.get(`${process.env.serv}request/req/${jwtDecode(result)["workerid"]}`).then((res)=>{
                setWorkerData(res.data)
            })      
            })           
        },[])
            console.log(location)
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