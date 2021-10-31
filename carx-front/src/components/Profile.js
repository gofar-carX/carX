import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
    return (
        // Try setting `alignItems` to 'flex-start'
        // Try setting `justifyContent` to `flex-end`.
        // Try setting `flexDirection` to `row`.
        <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            <View style={{ height: 100 }} ></View>
            <View style={{ height: 100, textAlign: 'center', }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal' }}>Car<Text style={{ color: '#d9af91' }}>X</Text></Text></View>
            <View style={{ height: 100, textAlign: 'center', display: 'inline' }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal' }} >welcome</Text><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal', color: '#d9af91' }}>User</Text></View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={{
                            uri:
                                'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',
                        }}
                        style={{ width: 100, height: 100, borderRadius: 200 / 2, border: '1px solid ', boxSizing: 'border-box' }}
                    />
                </View>
            </View>
            <View style={{ height: 100, textAlign: 'center' }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal', marginTop: 30 }}>Full Name</Text></View>
            <View style={{ height: 100, textAlign: 'center' }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal', marginTop: 30 }}>Email</Text></View>
            <View style={{ height: 100, textAlign: 'center' }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal' }}>Phone number</Text></View>
            <View style={{ height: 100, backgroundColor: 'white', textAlign: 'center' }} ><Text style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400, fontSize: 36, fontStyle: 'normal' }}>Car</Text></View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: "flex-end", padding: 40 }}>
                    <TouchableOpacity
                        onPress={() => alert('PRESS ME!')}
                        style={{ backgroundColor: '#d9af91', boxSizing: 'border-box', width: 69, height: 45, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 5
                        }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 100, justifyContent: 'space-between', justifyContent: 'space-around' }} >
                <View style={{ justifyContent: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 76 }}>
                    <Entypo name="home" size={24} color="black" />
                    <Ionicons name="notifications" size={24} color="black" />
                    <MaterialIcons name="menu" size={24} color="black" />

                </View>
            </View>

        </View>

    );
};
// const styles = StyleSheet.create({
//     button: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//         borderRadius: 4,
//         elevation: 3,
//         backgroundColor: 'black',
//     }
// });
export default Profile;