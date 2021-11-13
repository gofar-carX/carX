
import React, { useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LinearGradient } from 'expo-linear-gradient';

export default function Navbar({ navigation, na, user }) {
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

            <View style={[{ justifyContent: "center", alignContent: 'center', }, tailwind('flex flex-row mt-8 ml-4')]} >
                <Image source={require("../../../assets/MainLogo.png")} />
            </View>


            <View style={[{ alignItems: 'center', justifyContent: 'center' }, tailwind('flex flex-row my-4')]}>

                <Image
                    source={{ uri: user.photo }}
                    style={styles.thumbnail}
                />
                <View style={{ textAlign: 'center', padding: 5 }} ><Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: 'bold', textAlign: 'center' }}>{user.name || 'no name yet'}</Text></View>

            </View>

            <View style={[{ justifyContent: 'center', justifyContent: 'space-around' }, tailwind('my-4')]}>

                <View style={[{ textAlign: 'center' }, tailwind('my-4')]} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Email : </Text>{user.email || 'no email yet'}</Text></View>
                <View style={[{ textAlign: 'center' }, tailwind('my-4')]} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Phone Number : </Text>{user.phone || "no phone number yet"}</Text></View>

            </View>

            <View style={{ alignItems: "center", padding: 10 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
                    <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={[{ justifyContent: 'center', alignContent: 'center', borderRadius: 40, height: 40, width: 160 }, tailwind('flex flex-row')]}>

                        <View style={[{ justifyContent: 'space-around', alignItems: 'center' }, tailwind('flex flex-row')]}>
                            <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind(' mx-6')]} >Edit</Text>
                            <Image style={[{ width: 34, height: 15 }, tailwind(' mt-1 mx-6 ')]} source={require("../../../assets/Arrow1.png")} />
                        </View>

                    </LinearGradient>
                </TouchableOpacity>
            </View>





            <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 0.1, y: 0.1 }} style={[styles.test]} >

                <TouchableOpacity onPress={() => { navigation.navigate('Reviews') }}>
                    <View style={[{ borderWidth: 1, borderColor: 'white', borderRadius: 40, width: 180, height: 40, justifyContent: 'center' }, tailwind('flex flex-row my-4')]}>
                        <Text style={{ alignSelf: 'center', color: 'white' }} >
                            Reviews
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Linking.openURL("https://api.konnect.network/Nw83PYi1q") }}>
                    <View style={[{ borderWidth: 1, borderColor: 'white', borderRadius: 40, width: 180, height: 40, justifyContent: 'center' }, tailwind('flex flex-row my-4')]}>
                        <Text style={{ alignSelf: 'center', color: 'white' }} >
                            Contact Us
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { LogOut() }} >
                    <View style={[{ borderWidth: 1, borderColor: 'white', borderRadius: 40, width: 180, height: 40, justifyContent: 'center' }, tailwind('flex flex-row my-4')]}>
                        <Text style={{ alignSelf: 'center', color: 'white' }} >
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>

            </LinearGradient>




        </SafeAreaView >

    );
}




const styles = StyleSheet.create({
    test: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 40,
        justifyContent:'center'

    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 360,
    },
});
