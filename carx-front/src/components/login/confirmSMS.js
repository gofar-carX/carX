import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, TouchableOpacity } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tailwind from 'tailwind-rn';

export default function ConfirmSMS({ navigation, setNavigate }) {
  const [worngCode, setWrongCode] = useState(false)
  const [code1, setCode1] = useState(0)
  const [spinner1, setSpinner1] = useState(false)
  useEffect(() => {
    AsyncStorage.getItem('auth').then((data) => {
      if (data !== null) {
        navigation.navigate('Main')
        return;
      }
    })
  }, [])
  let checkCode = function () {
    setSpinner1(true)
    AsyncStorage.getItem("phoneVerife").then(res => {

      const dataToVerif = JSON.parse(res)

      if (code1["text"] == dataToVerif.verifCode) {

        setWrongCode(false)
        setSpinner1(false)
        AsyncStorage.setItem("auth", dataToVerif.Token)
        setNavigate(false)
        navigation.navigate("Main")

        return;
      } else {
        setWrongCode(true)
        return
      }


    })
  }


  return (

    <>

      <View >
        <View style={[{ backgroundColor: 'white', width: 320, height: 290, alignItems: "center", justifyContent: "center", borderRadius: 40 }]}>
          <TextInput
            style={[styles.carx, tailwind('mt-6')]}
            placeholder="Confirmation Code"
            type="number"
            onChangeText={(text) => setCode1({ text })}
          />
          {worngCode ? <Text style={{ color: "red" }}>Check the code </Text> : (<Text></Text>) && false}




          <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={[{ borderRadius: 40, width: 149, height: 40, padding: 8, }, tailwind('mt-8')]}>

            {spinner1 ? <ActivityIndicator color="white" size="large" style={{ alignSelf: "center" }} />
              : <>
                <Text onPress={checkCode} style={{ color: "white", alignSelf: 'center' }}>CONFIRM</Text>
              </>}




          </LinearGradient>

          <TouchableOpacity style={tailwind('mt-8')}>
            <Text onPress={()=>{
              
               setNavigate(false)
               navigation.navigate('Login')
              }
               
            }
              
                style={{ alignSelf: 'flex-end', color: 'black', padding: 10 }}>send code again</Text>
          </TouchableOpacity>




        </View>
      </View>
    </>






  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  carx: {
    backgroundColor: "white",
    borderRadius: 40,

    textAlign: "left",
    height: 40,
    width: 271,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4398F8',
    borderWidth: 1
  },
  frame2: {
    color: "black",
    width: 271,
    height: 45,
    overflow: "visible",
    borderRadius: 5,
  },
  frame: {
    overflow: "visible",
  }
  , google: {
    overflow: "visible",
    fontStyle: "normal",
    fontSize: 20,
    letterSpacing: -1,
    textAlign: "center",
    backgroundColor: "white",
    borderColor: '#4398F8',
    borderWidth: 1
  }
  , flex: {
    justifyContent: "space-around"
  }
  , pressMe: {
    width: 271,
    borderRadius: 10,
    overflow: "visible",
  },
  prGoogle: {
    borderRadius: 40,
    width: 149,
    backgroundColor: "white",
    height: 40,
    padding: 8,
    borderColor: '#4398F8',
    borderWidth: 1
  }
  ,
  prGoogle1: {
    borderRadius: 40,
    width: 149,
    backgroundColor: "#4398F8",
    height: 40,
    padding: 8,

  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});