
import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Navbar({ navigation }) {
    return (
        <SafeAreaView style={tailwind('h-full items-center')}>



            <View style={tailwind(' flex flex-row  my-8')}>
                <Text style={tailwind('text-4xl font-semibold ')}>
                    car
                </Text>
                <Text style={tailwind('text-yellow-600 text-4xl font-semibold ')}>
                    X
                </Text>
            </View >
            <View style={tailwind('  min-w-full   items-center   flex h-full bg-yellow-600 rounded-2xl ')}>
                <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Profile') }} >Profile</Text>
                <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Reviews') }}>Reviews</Text>
                <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Wash') }}>Contact Us</Text>
                <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('App',{screen:'Login'}) }}>Sign Out</Text>


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
