import React, { useState, useEffect } from 'react';
import { Button, Text, View,TouchableOpacity ,StyleSheet,Dimensions} from "react-native";
import MapView,{Marker,Callout,Circle} from 'react-native-maps';
import {ActivityIndicator} from "react-native"
import {
  
  Center,
  NativeBaseProvider,
} from "native-base"
import * as Location from "expo-location"
 


const Mapso =()=> {
  const [location, setLocation] = useState({
    latitude : null,
    longitude : null,
  });
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const {longitude , latitude} = location.coords
      setLocation({
        longitude,
        latitude,
        latitudeDelta :0.0922,
        longitudeDelta : 0.0421
      });
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return location.latitude ? (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion = {location}
          provider = "google" showsUserLocation>
    <Marker coordinate = {location}
      pinColor = "black">
        <Callout>
          <Text>I'm Here.</Text>
        </Callout>
      </Marker>
    <Circle center = {location} radius = {3000}/>
      </MapView>
    </View>
  ) : <ActivityIndicator style = {{flex :1}} animating size = "large" />
}
  

    
  
  
  export default function Maps ()  {
    return (
      <NativeBaseProvider>
        <Center flex={1} >
          <Mapso  />
        </Center>
      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex : 1 ,
      width: Dimensions.get('window').width,
      height:"30%",
    },
  });