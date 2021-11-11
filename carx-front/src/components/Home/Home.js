import React from "react";
import { StyleSheet, Text, View, TouchableOpacity , Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { backgroundColor } from "styled-system";


let check = function(){
    // console.log(user ,"eaz")
    if (user.phone == null) {
        alert('you need to add your phone number !')
       navigation.navigate('EditProfile')
     }
     else{navigation.navigate("Wash")}
}

export default function NavigationBar({ navigation, user }) {

    const img='https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'

    let check = function () {
        console.log(user)
        if (user.phone == null) {
            alert('you need to add your phone number !')
            navigation.navigate('EditProfile')
        }
        else { navigation.navigate("Wash") }
    }

    return (
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#005E9D', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 35 }}>Car<Text style={{ color: "#C02F34" }}>X</Text></Text>
            </View>

            <View style={{ flex: 3, backgroundColor: "#EFECEC", justifyContent: "space-evenly" }} >

                <View style={{ flex: 0.2, backgroundColor: "#ffffff", width: 300, alignSelf: "center", borderRadius: 20 }}>
                    <TouchableOpacity onPress={() => check()}>
                        <View style={[], { flexDirection: "row", alignSelf: "center", flexDirection: "row", justifyContent: "space-evenly", alignSelf: 'center', padding: 8 }}   >

                            <View style={{ flex: 0.4 }} >
                                <MaterialIcons name="local-car-wash" size={85} color="#C02F34" style={{ alignSelf: "center" }} />
                            </View>

                            <View style={{ flex: 0.4, alignSelf: "center" }}>
                                <Text style={{ fontSize: 18 }}>Wash</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>







            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    border: {
        borderWidth: 5,
        backgroundColor: "#D9AF91"
    }
});

