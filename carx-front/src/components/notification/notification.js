import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';


import { Platform, PlatformSafeAreaView, Button, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { RefreshControl, SafeAreaView } from 'react-native';
import tailwind from "tailwind-rn";
import moment from 'moment'
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App({ user }) {



  const [refreshing, setRefreshing] = useState(false);
  const [id,setID]=useState(null)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false)

      schedulePushNotification();

    })
  }, []);
  const handleConfirm=(id)=>{
    
    console.log(id,'here the id')
    setID(id)
    setConfirm(true)
  }
 const  handleCancel=(id)=>{
   setID(id)
 }
 
  return (
    <>
      <SafeAreaView >
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>


            {/* <Button
        title="Press to schedule a notification"
     
      /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={tailwind('h-full')}>
        <View style={tailwind(' pt-4 items-center ')}>
          <View style={tailwind(' flex flex-row  my-4')}>
            <Text style={tailwind('text-4xl font-semibold ')}>
              car
            </Text>
            <Text style={tailwind('text-yellow-300 text-4xl font-semibold ')}>
              X
            </Text>
          </View >
          <View style={tailwind(' flex flex-row items-center')}>




          </View>
          <ScrollView style={tailwind('h-5/6   min-w-full rounded-2xl flex ')}>





            {user.requests.map((e, i) => {
              return (
                <View style={tailwind(' m-2 p-4 items-start border-black bg-blue-600 rounded-2xl flex ')}>
                  <View style={tailwind('  flex flex-row ')}>

                    <Text style={tailwind(' text-yellow-300  ')}>{e.serivce || 'Wash service '} </Text>

                  </View>
                  <Text style={tailwind('  text-white ml-4')}>{`Type of car :  ${e.typeOfCar}`}</Text>

                  <Text style={tailwind('  text-white ml-4')}>{`Type of wash : ${e.typeOfWash}`}</Text>
                  <Text style={tailwind('  text-white ml-4')}>{`Time estimated : ${e.duration || "we'll connect you soon"}`}</Text>
                  <Text style={tailwind('  text-white ml-4')}>{`agent name: ${e.worker==null ?"we'll contact you soon":e.worker.name}`}</Text>
                  <Text style={tailwind('  text-white ml-4  ')}>{`Price : ${e.Price || "we'll connect you soon"}`}</Text>
                  <View style={tailwind(' text-white ml-4 bg-red-500 rounded text-center border-opacity-40 flex-row')}>
                  </View>
                  <View style={{ marginLeft:-10, marginTop: 10, flexDirection: "row", width: 300 ,justifyContent: "space-evenly"}} >
                    <TouchableOpacity>    
                    <View>
                      <Button
                     
                       title="Cancel" 
                      />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      
                      <View  >
                      <Button
                      onPress={() =>handleConfirm(e.id)} 
                      disabled={e.worker==null ?true:false}
                       title="confirm and Paye" 
                      />
                      </View>
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Request  📬",
      body: 'request was accepted',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
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