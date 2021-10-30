
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
