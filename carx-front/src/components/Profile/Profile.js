// import React from 'react';
// import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

// import { Entypo } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#D9AF91" }}>X</Text></Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Welcome <Text style={{ color: "#D9AF91" }}>User</Text></Text>
            </View>
            <View style={{ flex: 1 }} >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Image
                        source={{
                            uri:
                                'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',
                        }}
                        style={{ width: 80, height: 80, borderRadius: 100 / 1, border: '1px solid ', boxSizing: 'border-box' }}
                    />
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center',justifyContent:'space-around' }}>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Full Name</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Email</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Phone number</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Car</Text></View>
            </View>
            <View style={{ flex: 1 }} >
                <View style={{ alignItems: "flex-end", padding: 40, paddingTop: 25 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('EditProfile') }}
                        style={{ backgroundColor: '#d9af91', boxSizing: 'border-box', width: 69, height: 45, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 5
                        }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View style={[styles.border], { flex: 0.34, flexDirection: "row" }} >
                <View style={{ flex: 0.34, justifyContent: "center", alignItems: "center" }}>
                    <Text>
                        <Ionicons name="ios-home-sharp" size={30} color="black" />
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>

                    <Text>
                        <MaterialIcons name="notifications" size={30} color="black" />
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>
                    <Text >
                        <MaterialCommunityIcons name="menu" size={30} color="black" />
                    </Text>

                </View>

            </View> */}
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    // border: {
    //     borderWidth: 5,
    //     backgroundColor: "#D9AF91"
    // }
});

export default Profile;



// <View style={{
//     flex: 1,
//     flexDirection: 'column',

// }}>
{/* <View style={{ height: 50 }} ></View>
            <View style={{ height: 50, textAlign: 'center', }} ><Text style={{ fontSize: 36, fontStyle: 'normal'}}>Car<Text style={{ color: '#d9af91' }}>X</Text></Text></View>
            <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal' }} >welcome</Text><Text style={{ fontSize: 36, fontStyle: 'normal', color: '#d9af91' }}>User</Text></View>
            <View style={{ height: 50 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:50 }}>
                   
                   <Image
                        source={{
                            uri:
                                'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',
                        }}
                        style={{ width: 80, height: 80, borderRadius: 100 / 1, border: '1px solid ', boxSizing: 'border-box' }}
                    />
                </View>
            </View>
            <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', marginTop: 30 }}>Full Name</Text></View>
            <View style={{ height: 100, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal', marginTop: 30 }}>Email</Text></View>
            <View style={{ height: 100, textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal' }}>Phone number</Text></View>
            <View style={{ height: 100,  textAlign: 'center' }} ><Text style={{ fontSize: 36, fontStyle: 'normal' }}>Car</Text></View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: "flex-end", padding: 40 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('EditProfile') }}
                        style={{ backgroundColor: '#d9af91', boxSizing: 'border-box', width: 69, height: 45, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 5
                        }}>Edit</Text>
                    </TouchableOpacity> */}
        //         </View>
        //     </View>
        //     <View style={{ height: 100, justifyContent: 'space-between', justifyContent: 'space-around' }} >
        //         <View style={{ justifyContent: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 76 }}>
        //             <Entypo name="home" size={24} color="black" />
        //             <Ionicons name="notifications" size={24} color="black" />
        //             <MaterialIcons name="menu" size={24} color="black" />

        //         </View>
        //     </View>

        // </View> 