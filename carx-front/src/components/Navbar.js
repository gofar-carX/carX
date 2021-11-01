
import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Navbar({ navigation }) {
    return (
        <SafeAreaView style={tailwind('h-full')}>

            <View style={tailwind('  items-center ')}>

                <View style={tailwind('flex flex-row  my-8')}>
                    <Text style={tailwind('text-4xl font-semibold ')}>
                        car
                    </Text>
                    <Text style={tailwind('text-yellow-600 text-4xl font-semibold ')}>
                        X
                    </Text>
                </View >

                <View style={tailwind(' h-full min-w-full  bg-yellow-600 items-center  rounded-2xl flex ')}>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Test') }} >Profile</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Reviews') }}>Reviews</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { alert('You tapped the Contact Us!'); }}>Contact Us</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Login') }}>Sign Out</Text>

                    <View style={tailwind('flex flex-row bottom-0 mt-12 ')} >
                        <View style={{ flex: 0.34, justifyContent: "center", alignItems: "center" }}>
                            <Text onPress={() => { navigation.navigate('Home') }}>
                                <Ionicons name="ios-home-sharp" size={30} color="black" />
                            </Text>
                        </View>
                        <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>

                            <Text>
                                <Ionicons name="notifications" size={30} color="black" />
                            </Text>
                        </View>
                        <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                            <Text onPress={() => { navigation.navigate('Nav') }} >
                                <MaterialIcons name="menu" size={30} color="black" />
                            </Text>

                        </View>
                    </View>
                </View>

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
