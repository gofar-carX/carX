import React ,{useState, useEffect}from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, TouchableOpacity } from "react-native";

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfirmSMS({ navigation }) {
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
        AsyncStorage.getItem("phoneVerife").then(res=>{
         const dataToVerif = JSON.parse(res)  
        
      if(code1["text"] == dataToVerif.verifCode){

          AsyncStorage.setItem("auth",dataToVerif.Token) 
          console.log(dataToVerif.Token)   
            navigation.navigate("Main")
      }else{
        setWrongCode(true)
        return 
      }
            
            
        })
    }


    return (

        <>

            <View style={[styles.carx], { flex: 1, }} >
                <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput
                        style={[styles.carx]}
                        placeholder="Confirmation Code"
                        type="number"
                        onChangeText={(text) => setCode1({ text })}
                    />
                    {worngCode ? <Text style={{ color: "red" }}>Check the code </Text> : (<Text></Text>) && false}

                    <Text></Text>
                    <View >
                        <View
                            style={[styles.pressMe]}>

                            <View style={[styles.prGoogle1]} >
                                <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >

                                    {spinner1 ? <ActivityIndicator color="white" size="large" style={{ alignSelf: "center" }} />
                                        : <>
                                            <Text onPress={checkCode} style={{ color: "white" }}>CONFIRM</Text>
                                        </>}




                                </View>
                            </View>
                            <TouchableOpacity>
                                <Text onPress={navigation.navigate('Login')} style={{ alignSelf: 'flex-end', color: 'white', padding: 10 }}>send code again</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text></Text>
                </View>
            </View>
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



    flex: {
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
    },
    google: {
        overflow: "visible",
        fontStyle: "normal",
        fontSize: 20,
        letterSpacing: -1,
        textAlign: "center",
        backgroundColor: "white"
    },
    prGoogle1: {
        borderWidth: 1,
        borderRadius: 10,
        width: 271,

        backgroundColor: "#D9AF91",
        height: 40,
        padding: 8
    }
});