import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, ActivityIndicator } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" }
import ConfirmSMS from './confirmSMS';
import axios from 'axios'

import AsyncStorage from "@react-native-async-storage/async-storage"
export default function LogIn({ navigation }) {
  const [bool, setBool] = useState(false)
  const [navigate, setNavigate] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [phone, setPhone] = useState("5")
  const [erorr, setErorr] = useState(false)
  const [erorr1, setErorrPhone] = useState(false)
  const [check,setCheck]=useState(false)
  let handleLoinWithPhone = function () {
    setSpinner(true)
    axios
      .get(`http://192.168.27.128:5000/phone/send/${phone}`).then((res) => {
        setErorrPhone(false)

        setTimeout(() => {
          setNavigate(true)
        }, 1500)
        setTimeout(() => setSpinner(false), 1500)
      }).catch((err) => {
        console.log(err)
        setNavigate(false)
        setSpinner(false)
        setErorrPhone(true)
      })


  }

let st = check ==false ? 'black':'red'
  let handleLogin = async function () {
    setBool(true)
    const config = {
      iosClientId: `741420364536-suf5j1kib19o0nfl1h9cqco18eou6r0u.apps.googleusercontent.com`,
      androidClientId: `741420364536-f3glchvm0p8qt5nkkhsv7rnbgec6op8i.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    }
      try{
        const dataFromGoogle =await Google.logInAsync(config)
        const { type, user } = dataFromGoogle
        const data = JSON.stringify(user)
        if(type=='success'){
          await AsyncStorage.setItem("auth",data)  
        }
        setErorr(false)
        setTimeout(() => setBool(false), 100)
           navigation.navigate("Main")    
      }catch(e){
        setBool(false)
        setErorr(true)
      }
}
  
  
  return (
    <>
 
 <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={[styles.container, {

          flexDirection: "column"
        }]}>
          <View style={{ flex: 1, justifyContent: "center" }} >
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 48 }}>Car<Text style={{ color: "black" }}>X</Text></Text>
          </View>
          <View style={{ flex: 2 / 3, justifyContent: "flex-end", alignItems: "center" }} >
          </View>
          {navigate === false ?
            <View style={[styles.carx], { flex: 1, }} >
              <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                <TextInput
                  style={[styles.carx, {
                    color:st
                  }]}
                  placeholder="+216 99 999 999"
                   onChangeText={e => {
                    setPhone({ e })
                  
                     }}
                />
               {check ?<Text style={{color:"red"}}>Wrong phone number , for example {'\n'}+216 99 999 999</Text>:<Text></Text>&&false}
                <Text></Text>
                <View >
                  <View style={[styles.pressMe]}>

                    <View style={[styles.prGoogle1]} >
                      <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                        {spinner ?
                          <ActivityIndicator color="white" size="large" style={{ alignSelf: "center" }} />
                          : <>

                            <Text onPress={handleLoinWithPhone}  style={{ color: "white" }}>LOG IN</Text>
                          </>
                        }



                      </View>
                    </View>
                    {erorr1 ? <Text style={{ color: "red" }}>An error occurred.check your Network and try again </Text> : (<Text></Text>) && false}


                  </View>
                </View>
                <Text></Text>
                <Text style={{ color: "white" }}>or</Text>
                <Text></Text>
                <View style={[styles.prGoogle]} >
                  <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                    {bool ?
                      <ActivityIndicator color="#D9AF91" size="large" style={{ alignSelf: "center" }} />
                      : <>
                        <Image style={{
                          resizeMode: "contain",
                          height: 20,
                          width: 30
                        }} source={require("../../../assets/Google_icon-icons.com_66793.png")} />
                        <Text onPress={handleLogin} >Google</Text>
                      </>
                    }


                  </View>
                </View>
                {erorr ? <Text style={{ color: "red" }}>An error occurred.check your Network {'\n'}and try again </Text> : (<Text></Text>) && false}
              </View>
            </View> : <ConfirmSMS navigation={navigation} />}
        </View>
      </ImageBackground>

     
     
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  carx: {
    backgroundColor: "white",
    borderRadius: 10,
    lineHeight: 2.4,
    textAlign: "left",
    height: 40,
    width: 271,
    borderWidth: 1,
    padding: 10,
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
    backgroundColor: "white"
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
    borderWidth: 1,
    borderRadius: 10,
    width: 271,
    backgroundColor: "white",
    height: 40,
    padding: 8
  }
  ,
  prGoogle1: {
    borderWidth: 1,
    borderRadius: 10,
    width: 271,

    backgroundColor: "#D9AF91",
    height: 40,
    padding: 8
  }
});