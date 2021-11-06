
import React , {useEffect} from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View } from 'react-native';
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
            <View style={tailwind(' flex flex-row  my-8')}>
                <Text style={tailwind('text-4xl font-semibold ')}>
                    car
                </Text>
                <Text  style={tailwind('text-yellow-300 text-4xl font-semibold ') }>
                    X
                </Text>
            </View >
            <View style={tailwind('  min-w-full   items-center   flex h-full bg-blue-600 rounded-3xl ')}>
                <Text style={tailwind( ' text-yellow-300 text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Profile') }} >Profile</Text>
                <Text style={tailwind( ' text-yellow-300 text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Reviews') }}>Reviews</Text>
                <Text style={tailwind(' text-yellow-300 text-3xl font-semibold py-8 ')} >Contact Us</Text>
                <Text style={tailwind(' text-yellow-300 text-3xl font-semibold py-8 ')} onPress={() => { LogOut() }}>Sign Out</Text>


            </View>
        </SafeAreaView>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
