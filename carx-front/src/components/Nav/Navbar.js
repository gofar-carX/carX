
import React, { useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View ,Linking } from 'react-native';
import tailwind from "tailwind-rn";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Navbar({ navigation, na }) {
    let LogOut = async () => {
        try {
            await AsyncStorage.removeItem('auth')
            na.navigate('Login')
            const data = await AsyncStorage.getItem('auth')
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <SafeAreaView style={tailwind('h-full items-center')}>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#C02F34" }}>X</Text></Text>
            </View>
            <View style={[styles.test]}>
                <Text style={tailwind(' text-white text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Profile') }} >Profile</Text>
                <Text style={tailwind(' text-white text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Reviews') }}>Reviews</Text>
                <Text style={tailwind(' text-white text-3xl font-semibold py-8 ')} onPress={() => { Linking.openURL("https://api.konnect.network/Nw83PYi1q")} }> Contact Us</Text>
                <Text style={tailwind(' text-white text-3xl font-semibold py-8 ')} onPress={() => { LogOut() }}>Sign Out</Text>


            </View>
        </SafeAreaView >

    );
}




const styles = StyleSheet.create({
    test: {
        width: '100%',
        flex: 3,
        backgroundColor: '#005E9D',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
});
