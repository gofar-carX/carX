
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://www.shell.ca/en_ca/business-customers/shell-fuel-card/dedicated-to-helping-your-business-thrive/shell-fleet-car-wash-offer/_jcr_content/pagePromo/image.img.960.jpeg/1525877556396/27696-bnr-p5-cw-1900x1200-new.jpeg" }
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LinearGradient } from 'expo-linear-gradient';
import tailwind from 'tailwind-rn';



export default function workerAuth({ navigation }) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [bool, setBool] = useState(false)
    const error = <><Text style={{ color: "red" }}>check your password or your username</Text></>

    const checkWorderData = () => {
        axios.post('https://testcarx1.herokuapp.com/workers/login', {
            name: userName,
            password: password,
            
        }).then((response) => {
            
            AsyncStorage.setItem('workerAuth', response.data.Token).then(() => {
                navigation.navigate('WorkerHome')
                setBool(false)
                return;
            })
        }).catch((error) => {
            console.log(error)
            setBool(true)
            return
        })
    }


    return (





        <LinearGradient colors={['#0857C1', '#4398F8']} style={[styles.background]}  >

            <View style={{ justifyContent: 'space-around', marginTop: 30 }}>


                <View style={[{ justifyContent: "center" }, tailwind('flex flex-row mt-8 ml-8  ')]} >
                    <Image style={{ justifyContent: "center" }} source={require("../../../assets/Carx.png")} />
                </View>

                <View style={[{ justifyContent: "center" }, tailwind('flex flex-row mt-16 ')]} >
                    <Image style={{ width: 297, height: 183, justifyContent: "center" }} source={require("../../../assets/worker.png")} />
                </View>

                <View style={{ backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 60, height: 435 }} >
                    <View style={[{ justifyContent: "space-around", alignItems: "center" }, tailwind('flex mt-8')]}>

                        <View style={tailwind('p-4')} >
                            <TextInput
                                onChangeText={(e) => setUserName(e)}
                                style={[styles.carx]}
                                placeholder="Username"

                            />
                        </View>

                        <View style={tailwind('p-4')} >
                            <TextInput
                                secureTextEntry={true}
                                style={[styles.carx]}
                                placeholder="Password"
                                onChangeText={(e) => setPassword(e)}

                            />
                        </View>


                        {bool ? error : (<Text></Text>) && false}
                        <TouchableOpacity onPress={checkWorderData} style={tailwind('p-4')}>
                            <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={{ borderRadius: 40, width: 149, height: 40, padding: 8, }}>

                                <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                                    <Text style={{ color: "white" }}>LOG IN</Text>
                                </View>

                            </LinearGradient>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={tailwind('p-4')}>
                            <View style={[{ justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderRadius: 40, borderColor: '#4398F8', height: 40, width: 120 }, tailwind('flex flex-row')]}>
                                <Text style={{ color: '#828282', alignSelf: 'center' }}>Return</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </LinearGradient>

    );
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
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
        borderRadius: 10,
        width: 271,
        backgroundColor: "white",
        height: 40,
        padding: 8
    }
    ,
    prGoogle1: {
        borderRadius: 10,
        width: 271,
        backgroundColor: "#015496",
        height: 40,
        padding: 8
    },
    background: {
        width: '100%',
        height: '100%',
    },
});