import React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,ActivityIndicator} from "react-native";
import { useState } from 'react';
import axios from 'axios';
export default function ConfirmSMS({navigation}) {
   const [worngCode,setWrongCode]=useState(false)
   const [code , setCode]=useState('')
   const [spinner, setSpinner]=useState(false) 
     let checkCode = function(){
         setSpinner(true)
        axios.get(`http://192.168.11.113:5000/phone/verif/${code}`)
            .then((res)=>{ 
                setTimeout(()=>{
                navigation.navigate('Main')
                 setSpinner(false)
                },1500)
            })
            .then(()=>{ 
                worngCode(false)
            })
            .catch((err)=>{
                setWrongCode(true)
                setSpinner(true)
            })
     } 
       
    return (

        <>

            <View style={[styles.carx], { flex: 1, }} >
                <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput
                        style={[styles.carx]}
                        placeholder="Confirmation Code"
                        onChangeText={(text) =>setCode({text})}
                    />
                           {worngCode?<Text style={{color:"red"}}>Check the code </Text> : (<Text></Text>)&&false}

                    <Text></Text>
                    <View >
                        <View
                            style={[styles.pressMe]}>
                    
                             <View style={[styles.prGoogle1]} >
                      <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >
                      
                      {spinner?  <ActivityIndicator color="white" size="large" style={{ alignSelf: "center" }} />
                        :<>
                            <Text onPress={checkCode} style={{ color: "white" }}>CONFIRM</Text>
                          </>}
                       



                      </View>
                    </View>
                             <Text onPress={navigation.navigate('Login')} style={{alignSelf: 'flex-end',color:'white',padding:10}}>send code again</Text>   
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