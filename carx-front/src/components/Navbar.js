
import React from 'react';
import { SafeAreaView, Button , StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";

export default function Navbar({navigation}) {
    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind(' pt-12 items-center ')}>
                <View style={tailwind('flex flex-row  my-8')}>
                    <Text style={tailwind('text-4xl font-semibold ')}>
                        car
                    </Text>
                    <Text style={tailwind('text-yellow-600 text-4xl font-semibold ')}>
                        X
                    </Text>
                </View >
                <View style={tailwind('h-full min-w-full  bg-yellow-600 items-center  rounded-2xl flex ')}>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Test')}} >Profile</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Reviews')}}>Reviews</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { alert('You tapped the Contact Us!');}}>Contact Us</Text>
                    <Text style={tailwind('text-3xl font-semibold py-8 ')} onPress={() => { navigation.navigate('Login')}}>Sign Out</Text>
                    {/* <Button onPress={() => { alert('You tapped the button!');}} /> */}
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
