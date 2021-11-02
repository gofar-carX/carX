
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


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
            <View style={{ flex: 2, justifyContent: 'center', justifyContent: 'space-around' }}>
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



