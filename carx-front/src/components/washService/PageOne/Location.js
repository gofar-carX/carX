import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from "react-native";

import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import Footer from "./Footer";
import axios from "axios";

 const Location =({navigation})=> {
  let [service, setService] = React.useState("")
  let [ready, setReady] = React.useState(false)
  let [error, setError] = React.useState(null)
  let [where, setWeher] = React.useState({lat:null, lng:null})
  function geoSuccess (position)  {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    setReady(true);
    setWeher({lat: position.coords.latitude,lng:position.coords.longitude })
    }
    function geoFailure (err)  {
        setError(err.message)
    }
    function getAddressFromCoordinates({ latitude, longitude }) {
      return new Promise((resolve) => {
        const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`
        fetch(url)
          .then(res => res.json())
          .then((resJson) => {
            // the response had a deeply nested structure :/
            if (resJson
              && resJson.Response
              && resJson.Response.View
              && resJson.Response.View[0]
              && resJson.Response.View[0].Result
              && resJson.Response.View[0].Result[0]) {
              resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
            } else {
              resolve()
            }
          })
          .catch((e) => {
            console.log('Error in getAddressFromCoordinates', e)
            resolve()
          })
      })
    }
  useEffect(() => {
    getAddressFromCoordinates(where)
    let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 20000,
        maximumAge: 60 * 60 * 24
    };
    
    setReady(false)
    setError(null)
    navigator.geolocation.getCurrentPosition( geoSuccess, 
                                            geoFailure,
                                            geoOptions);
                                            
  }, [])
  
  return (
    <View style={styles.container}>
    { !ready && (
    <Text style={styles.big}>Using Geolocation in React Native.</Text>
    )}
    { error && (
    <Text style={styles.big}>{error}</Text>
    )}
    { ready && (
        <Text style={styles.big}>{
        `Latitude: ${where.lat}
        Longitude: ${where.lng}`
        }</Text>
    )}
</View>
  );

  
}

export default function LocationPage ({navigation})  {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Location navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 48
    }
});