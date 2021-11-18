import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { Button } from 'native-base';
import tailwind from 'tailwind-rn';
const LOCATION_TASK_NAME = "foreground-location-task";

const Stack = createNativeStackNavigator();
export default function WorkerHome({ navigation }) {
  const [positionx, setLatiude] = useState(null)
  const [positiony, setLongitude] = useState(null)
  const [workerId, setWorkerId] = useState(null)
  const [makers, setMarkers] = ([{
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
  const [WorkerDatadata, setWorkerData] = useState([])
  let updatePosition = async () => {
    try {
      const data = await axios.put(`${process.env.serv}workers/position/${workerId}`, {
        positionx: positionx,
        positiony: positiony,
      })

    } catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatiude(location.coords.latitude);
      setLongitude(location.coords.longitude);



    })();
    AsyncStorage.getItem("workerAuth").then((result) => {
      setWorkerId(jwtDecode(result)["workerid"])
      axios.get(`${process.env.serv}request/req/${jwtDecode(result)["workerid"]}`).then((res) => {
        1
        console.log(`${process.env.serv}request/req/${jwtDecode(result)["workerid"]}`)
        setWorkerData(res.data)
      })
    })
    updatePosition()
  }, [])

  let updateAvailble = async () => {
    try {
      const data = await axios.put(`${process.env.serv}workers/update/${workerId}`)
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }
  let updateIsServed = async () => {
    try {
      const data = await axios.put(`${process.env.req}/${WorkerDatadata[0]['id']}`)
      await updateAvailble()
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }



  let LogOutWorker = async () => {
    try {
      await AsyncStorage.removeItem('auth')
      navigation.navigate('WorkerAuth')

    } catch (e) {
      console.error(e)
    }
  }



  // console.log(WorkerDatadata[0]['id'])
  return (


    <View style={[styles.container, { flexDirection: "column" }]}>



      {WorkerDatadata.map((e, i) => {
        console.log(e)
        return (
          <>
            <View style={{ flex: 0.25, backgroundColor: "darkorange" }} >
              <Text style={{ backgroundColor: "blue", flex: 0.5 }}>Car type : {e.typeOfCar}  </Text>
              <Text style={{ backgroundColor: "red", flex: 0.5 }}>Wash Type :{e.typeOfWash} </Text>
              <Text style={{ backgroundColor: "green", flex: 0.5 }}>Full name: </Text>
              <Text style={{ backgroundColor: "gray", flex: 0.5 }}>Phone Number : </Text>
            </View>

          </>
        )

      })


      }

      <TouchableOpacity onPress={LogOutWorker}>
        <View >
          <Text >
            logout
          </Text>
        </View>
      </TouchableOpacity>



      <TouchableOpacity onPress={updateIsServed}>
        <View>
          <Text >
            done
          </Text>
        </View>
      </TouchableOpacity>



    </View>


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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});