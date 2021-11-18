import React ,{ useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { Button } from 'native-base';
const LOCATION_TASK_NAME = "foreground-location-task";

const Stack = createNativeStackNavigator();
export default function  WorkerHome(navigation){
    const [location, setLocation] = useState(null)
    const [location1, setLocation1] = useState(null)
    const [ makers,setMarkers]=([{
      title: 'hello',
      coordinates: {
        latitude: 3.148561,
        longitude: 101.652778
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 3.149771,
        longitude: 101.655449
      },  
    }])
    const [WorkerDatadata , setWorkerData] =useState([])       
        useEffect(()=>{
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setErrorMsg("Permission to access location was denied");
                  return;
                }
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location.coords.latitude);
                setLocation(location.coords.longitude);

                
                
              })();  
            AsyncStorage.getItem("workerAuth").then((result)=>{
              axios.get(`${process.env.serv}request/req/${jwtDecode(result)["workerid"]}`).then((res)=>{
                setWorkerData(res.data)
            })      
            })           
        },[])
    return (

        <>
 
        <View>
            <Text >
                worker home 
            </Text>
        </View>

</>
 )





}
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      alert(error);
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      alert(JSON.stringify(locations)); //will show you the location object
      //lat is locations[0].coords.latitude & long is locations[0].coords.longitude
      // do something with the locations captured in the background, possibly post to your server with axios or fetch API
    }
  });