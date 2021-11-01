import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, Image,ActivityIndicator } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" }
import ConfirmSMS from './confirmSMS';

import ButtonSpinner from 'react-native-button-spinner';

export default function LogIn({navigation}) {
  const [bool , setBool]=useState(false)
  const [navigate, setNavigate] = useState(false)
  handleLogin=()=>{
    setBool(true)
    const config={
      iosClientId:`741420364536-suf5j1kib19o0nfl1h9cqco18eou6r0u.apps.googleusercontent.com`,
      androidClientId:`741420364536-f3glchvm0p8qt5nkkhsv7rnbgec6op8i.apps.googleusercontent.com`,
      scopes:['profile','email']
      }
      Google
        .logInAsync(config)
        .then((result )=>{
          const {type,user}=result 
          if (type =='success'){
            const {email,photoUrl,familyName,givenName,name,accessToken}=user;
            setTimeout(()=>navigation.navigate("Nav",{email,photoUrl,familyName,givenName,name,accessToken}),1500)
          }
        })
        .catch(err=>{
          console.log('An error occurred.check your Network and try again  ')
        })
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

                  }]}
                  placeholder="Phone Number"

                />
                <Text></Text>
                <View >
                  <View style={[styles.pressMe]}>
                    <Button

                      title="LOG IN"
                      color="#D9AF91"
                      onPress={() => setNavigate(true)}
                    />
                  </View>
                </View>
                <Text></Text>
                <Text style={{ color: "white" }}>or</Text>
                <Text></Text>
                <View style={[styles.prGoogle]} >
                  <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
               {bool? 
               <ActivityIndicator color="#D9AF91"  size="large" style={{alignSelf:"center"}} />
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
});