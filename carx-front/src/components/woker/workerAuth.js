
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth'
const image = { uri: "https://www.shell.ca/en_ca/business-customers/shell-fuel-card/dedicated-to-helping-your-business-thrive/shell-fleet-car-wash-offer/_jcr_content/pagePromo/image.img.960.jpeg/1525877556396/27696-bnr-p5-cw-1900x1200-new.jpeg" }
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"


export default function workerAuth({ navigation }) {

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

                    <View style={[styles.carx], { flex: 1, }} >
                        <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                            <TextInput
                                style={[styles.carx]}
                                placeholder="Username"

                            />

                            <Text></Text>
                            <TextInput
                                style={[styles.carx]}
                                placeholder="Password"

                            />
                            <Text></Text>
                            <View >
                                <View style={[styles.pressMe]}>

                                    <View style={[styles.prGoogle1]} >
                                        <View style={[styles.google], { flexDirection: "row", alignSelf: "center" }} >

                                            <Text style={{ color: "white" }}>LOG IN</Text>



                                        </View>
                                    </View>



                                </View>
                            </View>
                            <Text></Text>
                             
                            <Text style={{ color: 'white' }} onPress={()=>{navigation.navigate('Login')}}>connect as a user</Text>

                        </View>
                    </View>
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
    }
});