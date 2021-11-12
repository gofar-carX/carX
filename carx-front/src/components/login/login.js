
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://www.figma.com/file/AHZbKmWBUzQ9ETbRhazQSz/carX?node-id=23%3A113" }
import ConfirmSMS from './confirmSMS';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { backgroundColor } from 'styled-system';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import tailwind from 'tailwind-rn';



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


  useEffect(async () => {
    const userToken = await AsyncStorage.getItem('auth')
    // const workerToken = await AsyncStorage.getItem('workerAuth')
    if (userToken !== null) {
      navigation.navigate('Main')
      return;
    }

  }, [])

  let handleLoinWithPhone = function () {
    if (phone["e"] == null || phone["e"].length !== 8) {
      setCheck(true)
      return
    }
    else if (phone["e"].length == 8) {
      setCheck(false)
    }
    setSpinner(true)

    axios.post(process.env.sendPhone + `/${phone["e"]}`).then((res) => {
      setCodeVerfication(res.data.verifCode)
      AsyncStorage.setItem("phoneVerife", JSON.stringify(res.data))
      setErorrPhone(false)
      setNavigate(true)
      setSpinner(false)


      return;
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



    <View style={[styles.container,]}>
      <LinearGradient colors={['#0857C1', '#4398F8']} style={styles.background}  >

        <View style={[{ justifyContent: "center" }, tailwind('flex flex-row  ')]} >
          <Image style={{ justifyContent: "center" }} source={require("../../../assets/Carx.png")} />
        </View>
        <View style={[{ justifyContent: "center" }, tailwind('flex flex-row mt-8 ')]} >
          <Image style={{ width: 297, height: 183, justifyContent: "center" }} source={require("../../../assets/loginLogo.png")} />
        </View>



        <View style={{ flex: 0.3, justifyContent: "flex-end", alignItems: "center" }} >
        </View>


        {navigate === false ?
          <View  >
            <View style={[{ backgroundColor: 'white', width: 320, height: 290, alignItems: "center", justifyContent: "space-around", borderRadius: 40 }]} >
              <View>
                <TextInput
                  style={[styles.carx]}
                  placeholder="+216 99 999 999"
                  onChangeText={e => {
                    setPhone({ e })

                  }}
                />
              </View>
              {check ? <Text style={{ color: "red" }}>Wrong phone number , for example {'\n'}+216 99 999 999</Text> : <Text></Text> && false}


              <View  >
                <LinearGradient colors={['#0857C1','#4398F8' ]} start={{x:1,y:0.9}} style={{ borderRadius: 40, width: 149, height: 40, padding: 8, }}>
                  <View style={{ flexDirection: "row", alignSelf: "center" }} >
                    {spinner ?
                      <ActivityIndicator color="#0857C1" size="large" style={{ alignSelf: "center" }} />
                      : <>


                        <Text onPress={handleLoinWithPhone} style={{ color: "white" }}>LOG IN</Text>


                      </>
                    }



                  </View>
                </LinearGradient>
              </View>

              {erorr1 ? <Text style={{ color: "red" }}>An error occurred.check your Network and try again </Text> : (<Text></Text>) && false}




              <TouchableOpacity onPress={handleLogin}>
                <View style={[styles.prGoogle]} >
                  <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                    {bool ?
                      <ActivityIndicator color="#0857C1" size="large" style={{ alignSelf: "center" }} />
                      : <>
                        <Image style={{
                          resizeMode: "contain",
                          height: 20,
                          width: 30
                        }} source={require("../../../assets/Google_icon-icons.com_66793.png")} />
                        <Text style={{ color: '#828282' }}  >Google</Text>
                      </>
                    }


                  </View>
                </View>
              </TouchableOpacity>
              <Text style={{ color: '#828282' }} onPress={() => { navigation.navigate('WorkerAuth') }}>connect as a worker</Text>
              {erorr ? <Text style={{ color: "red" }}>An error occurred.check your Network {'\n'}and try again </Text> : (<Text></Text>) && false}
            </View>
          </View> : <ConfirmSMS navigation={navigation} code={codeVerfication} token={token} />}

      </LinearGradient>



    </View>






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
    lineHeight: 2.4,
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