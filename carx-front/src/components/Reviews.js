
import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import tailwind from "tailwind-rn";

export default function Navbar({ navigation }) {
    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind(' pt-4 items-center ')}>
                <View style={tailwind('flex flex-row  my-4')}>
                    <Text style={tailwind('text-4xl font-semibold ')}>
                        car
                    </Text>
                    <Text style={tailwind('text-yellow-600 text-4xl font-semibold ')}>
                        X
                    </Text>
                </View >
                <ScrollView style={tailwind('h-4/6  min-w-full rounded-2xl flex ')}>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>

                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>

                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>

                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>

                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>
                    <View style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                        <Text>User</Text>
                        <Text>message is the message because the message is just trying to be a message thank you for this message </Text>
                    </View>


                </ScrollView>
                <View>
                    <TextInput
                        style={tailwind('w-11/12 m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}
                        placeholder="add a comment "

                    />
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
