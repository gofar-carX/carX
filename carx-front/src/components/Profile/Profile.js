
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import axios from 'axios';


const Profile = ({ navigation }) => {


    const [user, setUser] = useState([]);

    // const baseUrl = 'http://localhost:5000';
    // useEffect(() => {
    //     axios.get(`${baseUrl}/users`).then((response) => {
    //         console.log(response.data);
    //         setUser(response.data[0])
    //     });
    // }, []);



    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#FCD34D" }}>X</Text></Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Welcome <Text style={{ color: "#FCD34D" }}>User</Text></Text>
            </View>
            <View style={{ flex: 1 }} >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Image
                        source={{
                            uri:
                                'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',
                        }}
                        style={{ width: 80, height: 80, borderRadius: 100 / 1 }}
                    />
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', justifyContent: 'space-around' }}>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Full Name</Text>{user.name}</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Email</Text>{user.email}</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Phone Number</Text>{user.phone}</Text></View>
                <View style={{ height: 50, textAlign: 'center' }} ><Text style={{ fontSize: 20, fontStyle: 'normal', textAlign: 'center' }}><Text>Car Model</Text>{user.car}</Text></View>
            </View>
            <View style={{ flex: 1 }} >
                <View style={{ alignItems: "flex-end", padding: 40, paddingTop: 25 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('EditProfile', { user }) }}
                        style={{ backgroundColor: '#2563EB', boxSizing: 'border-box', width: 69, height: 45, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 5
                        }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

});

export default Profile;



