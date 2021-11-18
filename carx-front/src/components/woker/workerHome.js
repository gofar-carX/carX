import React ,{ useState, useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
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
            
                setLocation(location);
              })();
            // AsyncStorage.getItem("workerAuth").then((result)=>{
            //   axios.get(`${process.env.serv}request/req/${jwtDecode(result)["workerid"]}`).then((res)=>{
            //     setWorkerData(res.data)
            // })      
            // }) 
            axios.get(`${process.env.serv}users`).then((res)=>{
              console.log(res.data)
            })         
        },[])
            console.log(WorkerDatadata)
    return (

        <>
  <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
   
       {WorkerDatadata.map((e,i)=>{
         return (
           <>
          <View style={{ flex: 0.25, backgroundColor: "darkorange" }} >
       
          <Text style={{ backgroundColor:"blue",flex:0.5}}>Car type : {e.typeOfCar}  </Text>
          <Text style={{ backgroundColor:"red",flex:0.5}}>Wash Type :{e.typeOfWash} </Text>
          <Text style={{ backgroundColor:"green",flex:0.5}}>Full name: </Text>
          <Text style={{ backgroundColor:"gray",flex:0.5}}>Phone Number : </Text>


    


      </View>
        <View>

<Text style={{ backgroundColor:" blue"}}>
          Done
          
</Text>
        </View>
        </>
         )

       }) 
       
       
     }

    
    
    </View> 

</>
 )





}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});