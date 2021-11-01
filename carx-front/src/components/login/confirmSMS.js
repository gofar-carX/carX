import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


export default function ConfirmSMS({navigation}) {
    return (

        <>

            <View style={[styles.carx], { flex: 1, }} >
                <View style={[styles.flex], { justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput
                        style={[styles.carx]}
                        placeholder="Confirmation Code"

                    />
                    <Text></Text>
                    <View >
                        <View
                            style={[styles.pressMe]}>
                            <Button
                                title="Confirm"
                                color="#D9AF91"
                                onPress={() => { navigation.navigate('Home')}}
                            />
                        </View>
                    </View>
                    <Text></Text>
                </View>
            </View>
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
        borderWidth: 1,
        padding: 10,
    },



    flex: {
        justifyContent: "space-around"
    }
    , pressMe: {
        width: 271,
        borderRadius: 10,
        overflow: "visible",
    },
    prGoogle: {
        borderWidth: 1,
        borderRadius: 10,
        width: 271,
        backgroundColor: "white",
        height: 40,
        padding: 8
    }
});