import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import tailwind from "tailwind-rn";
import { LinearGradient } from 'expo-linear-gradient';
import { alignContent } from "styled-system";




export default function Home({ navigation, user }) {



    let check = function () {
        // if (user.phone == 0) {
        //     alert('you need to add your phone number !')
        //     navigation.navigate('EditProfile')
        // }
        // else {  }
        navigation.navigate("Wash")
    }

    return (
        <View style={[styles.container,]}>
            <View style={{ justifyContent: "center", alignContent: 'center' }} >
                <Image style={{ width: 418, height: 450, borderBottomLeftRadius: 105, borderBottomRightRadius: 105, justifyContent: "center" }} source={require("../../../assets/home.png")} />
            </View>

            <View style={{ alignContent: "center", justifyContent: 'center' }} >

                <View style={[{ alignContent: "center", justifyContent: 'space-around' }, tailwind('flex flex-row')]}>
                    <Text style={[{ fontSize: 24 }, tailwind('m-1 ml-4')]}>Wash</Text><Image style={tailwind('ml-12')} source={require("../../../assets/MainLogo.png")} />
                </View>
                <View style={[{ padding: 10, alignContent: 'center' }, tailwind('flex ml-2')]}>
                    <Text style={{ color: '#828282' , fontSize:16 }}>Car X is unique in that we are a "Flex" service car wash. We are the only car wash that come to you at home at work anywhere in the world , We gain you time and you can trust us .</Text>
                </View>


            </View>
            <View style={[{ justifyContent: "center", alignContent: 'center', padding: 10 }, tailwind('flex flex-row mt-10')]} >
                <TouchableOpacity onPress={()=>check()}>
                <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 0.7, y: 0.4 }} style={[{ borderRadius: 40, width: 250, height: 45, padding: 10, }]}>
                    <View style={[{ justifyContent: 'space-between', alignContent: 'center' }, tailwind('flex flex-row')]}>
                        <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind('ml-4')]} >Go to wash</Text>
                        <Image style={[{ width: 34, height: 15 }, tailwind('mr-4 mt-1 ')]} source={require("../../../assets/Arrow1.png")} />
                    </View>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",


    },

});

