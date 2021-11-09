
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://www.shell.ca/en_ca/business-customers/shell-fuel-card/dedicated-to-helping-your-business-thrive/shell-fleet-car-wash-offer/_jcr_content/pagePromo/image.img.960.jpeg/1525877556396/27696-bnr-p5-cw-1900x1200-new.jpeg" }
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
  const [check, setCheck] = useState(false)
  const [codeVerfication, setCodeVerfication] = useState('')
  const [token, setToken] = useState("")


  useEffect(() => {
    AsyncStorage.getItem('auth').then((data) => {
      if (data !== null) {
         navigation.navigate('Main')
        return;
        }
    })
  }, [])

  let handleLoinWithPhone = function () {
     if(phone["e"] ==null|| phone["e"].length !==8){
        setCheck(true)
        return 
     }   
    else if(phone["e"].length ==8){
      setCheck(false)
    }
    setSpinner(true)
    console.log(phone["e"])
    axios
      .post(`https://haunted-cat-69690.herokuapp.com/users/send/${phone["e"]}`).then((res) => {
        
        setCodeVerfication(res.data.verifCode)

        AsyncStorage.setItem("phoneVerife", JSON.stringify(res.data))
        setErorrPhone(false)
        setNavigate(true)
        setSpinner(false)
      
     
       return ;
      }).catch((err) => {
        console.log(err)
        setNavigate(false)
        setSpinner(false)
        setErorrPhone(true)
        return 
      })


  }

  

  let st = check == false ? 'black' : 'red'
  let handleLogin = async function () {
    setBool(true)
    const config = {
      iosClientId: `741420364536-suf5j1kib19o0nfl1h9cqco18eou6r0u.apps.googleusercontent.com`,
      androidClientId: `741420364536-f3glchvm0p8qt5nkkhsv7rnbgec6op8i.apps.googleusercontent.com`,
      androidStandaloneAppClientId: '759598068494-hg5cakbf3gpfntdoaasqi0a8dqd6r9j9.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    }
    try {
      const dataFromGoogle = await Google.logInAsync(config)
      const { type, user } = dataFromGoogle
      if (type == 'success') {


        const { email, name, photoUrl } = user
        axios.post(`https://haunted-cat-69690.herokuapp.com/users`, {
          name: name, email: email, photo: photoUrl
        }).then((response) => {
          AsyncStorage.setItem("auth", response.data.Token).then((response_) => {
            navigation.navigate("Main")
            setBool(false)
          }).catch((error) => {
            console.log(error)
          })
        }).catch((error) => {
          console.log(error)
        })

      }

    } catch (e) {
      console.error(e)
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
            <Text style={{ textAlign: 'center', color: '#a41c1f', fontSize: 48 }}>Car<Text style={{ color: "black" }}>X</Text></Text>
          </View>
          <View style={{ flex: 2 / 3, justifyContent: "flex-end", alignItems: "center" }} >
          </View>
          {navigate === false ?
            <View style={[styles.carx], { flex: 1, }} >
              <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                <TextInput
                  style={[styles.carx, {
                    color: st
                  }]}
                  placeholder="+216 99 999 999"
                  onChangeText={e => {
                    setPhone({ e })

                  }}
                />
                {check ? <Text style={{ color: "red" }}>Wrong phone number , for example {'\n'}+216 99 999 999</Text> : <Text></Text> && false}
                <Text></Text>
                <View >
                  <View style={[styles.pressMe]}>

                    <View style={[styles.prGoogle1]} >
                      <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                        {spinner ?
                          <ActivityIndicator color="white" size="large" style={{ alignSelf: "center" }} />
                          : <>

                            <Text onPress={handleLoinWithPhone} style={{ color: "white" }}>LOG IN</Text>
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
                <TouchableOpacity onPress={handleLogin}>
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
                          <Text  >Google</Text>
                        </>
                      }


                    </View>
                  </View>
                </TouchableOpacity>
                <Text></Text>
                <Text>connect as a worker</Text>
                {erorr ? <Text style={{ color: "red" }}>An error occurred.check your Network {'\n'}and try again </Text> : (<Text></Text>) && false}
              </View>
            </View> : <ConfirmSMS navigation={navigation} code={codeVerfication} token={token} />}
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

    backgroundColor: "#015496",
    height: 40,
    padding: 8
  }
});