import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Platform, PlatformSafeAreaView, Button, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RefreshControl, SafeAreaView, Image } from 'react-native';
import tailwind from "tailwind-rn";
import moment from 'moment'
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ user }) {



 
  const [id, setID] = useState(null)
 

  const handleConfirm = (id) => {
      setID(id)
    setConfirm(true)
  }
 const  handleCancel=(id)=>{
  axios.delete(process.env.req+`/${id}`).then((result)=>{
    console.log(result)
  })

 }

 console.log(user, 'here the user ')

  return (
    <>
    


      <SafeAreaView style={tailwind('h-full')}>
        <View style={tailwind(' pt-2 items-center ')}>
          <View style={[{ justifyContent: "center", alignContent: 'center', padding: 10 }, tailwind('flex flex-row mt-16 ml-4')]} >
            <Image source={require("../../../assets/MainLogo.png")} />
          </View>


          <ScrollView style={tailwind('h-5/6   min-w-full rounded-2xl flex ')}>

            {user.requests.map((e, i) => {
              return (

                <View key={i} style={{ justifyContent: 'center', alignContent: 'center' }} >
                  <LinearGradient colors={['#0857C1', '#4398F8']} style={[{ borderRadius: 26 }, tailwind(' m-2 p-4 items-start  flex ')]}>

                    <View style={tailwind('  flex flex-row ')}>
                      <Text style={tailwind(' text-yellow-300  ')}>{e.serivce || 'Wash service '} </Text>
                    </View>

                    <Text style={tailwind('  text-white ml-4')}>{`Type of car :  ${e.typeOfCar}`}</Text>
                    <Text style={tailwind('  text-white ml-4')}>{`Type of wash : ${e.typeOfWash}`}</Text>
                    <Text style={tailwind('  text-white ml-4')}>{`Time estimated : ${e.duration || "we'll connect you soon"}`}</Text>
                    <Text style={tailwind('  text-white ml-4')}>{`agent name: ${e.worker == null ? "we'll contact you soon" : e.worker.name}`}</Text>
                    <Text style={tailwind('  text-white ml-4  ')}>{`Price : ${e.Price + " DT" || "we'll connect you soon"}`}</Text>
                    <View style={tailwind(' text-white ml-4 bg-red-500 rounded text-center border-opacity-40 flex-row')}>

                    </View>
                  </LinearGradient>


                  <View style={{ marginLeft: -10, marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }} >

                    <TouchableOpacity style={[{ justifyContent: 'center', alignSelf: 'center' }, tailwind('flex flex-row')]}>

                      <View style={[{ justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderRadius: 40, borderColor: '#4398F8', height: 40, width: 120 }, tailwind('flex flex-row')]}>
                        <Text style={{ color: '#828282', alignSelf: 'center' }}>Cancel</Text>
                      </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleConfirm(e.id)} disabled={e.worker == null ? true : false} >
                      <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={[{ justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderRadius: 40, borderColor: '#4398F8', height: 40, width: 220 }, tailwind('flex flex-row')]}>

                        <View style={[{ justifyContent: 'space-around', alignItems: 'center' }, tailwind('flex flex-row')]}>
                          <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind('ml-4 mx-4')]} >Confirm and Pay</Text>
                          <Image style={[{ width: 34, height: 15 }, tailwind('mr-4 mt-1 mx-4 ')]} source={require("../../../assets/Arrow1.png")} />
                        </View>

                      </LinearGradient>
                    </TouchableOpacity>

                  </View>

                </View>
              )

            })
            }

          </ScrollView>
        </View>
      </SafeAreaView>

    </>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});