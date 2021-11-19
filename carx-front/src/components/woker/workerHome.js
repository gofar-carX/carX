import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { LinearGradient } from 'expo-linear-gradient';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { width } from 'styled-system';
const LOCATION_TASK_NAME = "foreground-location-task";

const Stack = createNativeStackNavigator();
export default function WorkerHome({ navigation }) {
  const [positionx, setLatiude] = useState(null)
  const [positiony, setLongitude] = useState(null)
  const [workerId, setWorkerId] = useState(null)
  const [allUserData, setAllUserData] = useState([])

  const [WorkerDatadata, setWorkerData] = useState([])
  const [username, setUserName] = useState([])


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
  let fetchAllUsersData = async () => {
    const users = await axios.get(`${process.env.serv}users`)
    setAllUserData(users.data)
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
        setWorkerData(res.data)
      })
    })
    fetchAllUsersData()
    updatePosition()
  }, [])


  let updateAvailble = async () => {
    try {
      const data = await axios.put(`${process.env.serv}workers/update/${workerId}`)

    } catch (e) {
      console.log(e)
    }

  }
  let updateIsServed = async () => {
    try {
      const data = await axios.put(`${process.env.req}/${WorkerDatadata[0]['id']}`)
      await updateAvailble()

    } catch (e) {
      console.log(e)
    }

  }



  let LogOutWorker = async () => {
    try {
      await AsyncStorage.removeItem('workerAuth')
      navigation.navigate('WorkerAuth')

    } catch (e) {
      console.error(e)
    }
  }

  setTimeout(async () => {
    allUserData.forEach(async (element) => {

      for (let val of element.requests) {
        if (val["worker"] !== null) {
          if (val["worker"]["id"] == workerId) {

            setUserName(element)
          }
        }

      }
    })

  }, 3000)



  return (


    <View style={[styles.container, { flexDirection: "column" }]}>

      <View style={{ height: '90%' }}>

        <View style={[{ justifyContent: "center", alignContent: 'center' }, tailwind('flex flex-row mt-16 ml-4')]} >
          <Image source={require("../../../assets/MainLogo.png")} />
        </View>

        <View style={[{ justifyContent: 'center', alignContent: 'center' }, tailwind('flex ')]}>
          
          {WorkerDatadata[0] && WorkerDatadata[0].isServed == false ? WorkerDatadata.map((e, i) => {

            return (


              <View key={i} style={[{ marginTop: 140, justifyContent: 'space-around' }]}  >
                <LinearGradient colors={['#0857C1', '#4398F8']} style={[{ borderRadius: 26 }, tailwind(' m-2 p-4 items-start  flex ')]}>
                  <Text style={{ color: 'white' }} >Car type : {e.typeOfCar}  </Text>
                  <Text style={{ color: 'white' }} >Wash Type :{e.typeOfWash} </Text>
                  <Text style={{ color: 'white' }} >Full name:{username["name"]} </Text>
                  <Text style={{ color: 'white' }} >Phone Number :{username["phone"]} </Text>
                </LinearGradient>




                <TouchableOpacity style={{ padding: 20 }} >

                  <View style={[{ flexDirection: "row", alignSelf: "center", height: 40, width: 180, borderWidth: 1, borderColor: '#4398F8', borderRadius: 20, justifyContent: 'center', alignContent: 'center', padding: 8 }, tailwind('flex flex-row ')]} >

                    <Ionicons name="navigate" size={20} color="black" />
                    <Text style={{ color: '#828282', }}  >Client Localisation</Text>


                  </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={updateIsServed} style={{ alignSelf: 'center' }}>
                  <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 0.7, y: 0.4 }} style={[{ borderRadius: 40, width: 180, height: 40, padding: 10, }]}>
                    <View style={[{ justifyContent: 'space-between', alignContent: 'center' }, tailwind('flex flex-row')]}>
                      <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind('ml-2')]} >Done</Text>
                      <Image style={[{ width: 34, height: 15 }, tailwind('mr-2 mt-1 ')]} source={require("../../../assets/Arrow1.png")} />
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

              </View>




            )
          })
            : <View style={[{ justifyContent: "center", alignContent: 'center' }, tailwind('flex  mt-16 ml-16')]} >
              <Image source={require("../../../assets/workerwait.png")} />
              <Text style={tailwind('ml-4 mt-4')}>You have no Request for the moment</Text>
            </View>

          }



        </View>


      </View>









      <LinearGradient colors={['#0857C1', '#4398F8']} style={{ width: '100%', bottom: -20, height: 65, borderTopLeftRadius: 26, borderTopRightRadius: 26 }}>
        <View style={[{ justifyContent: 'space-around' }, tailwind('p-4 flex flex-row ')]} >

          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <TouchableOpacity  >
              <Text  >
                <Ionicons name="play-circle" size={30} color="white" />
              </Text>
            </TouchableOpacity>

          </View>


          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <TouchableOpacity onPress={LogOutWorker}   >
              <Text   >
                <Ionicons name="power" size={30} color="white" />
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>


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
    marginTop: 20
  },
});