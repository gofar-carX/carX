import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ProfileEdit = ({ route }) => {
    // const {user} = route.params;

    const [user, setUser] = useState({
        fullName: route.params.fullName,
        Email: route.params.Email,
        Phonenumber: route.params.Phonenumber,
        Car: route.params.Car
    })
    const [fullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    const [Car, setCar] = useState('');

    // console.log(route.params)

    // console.log('this ====>fullName', fullName);
    // console.log('this ====>Email', Email);
    // console.log('this ====>Phonenumber', Phonenumber);
    // console.log('this ====>Car', Car);

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            {/* <View style={{ height: 100 }} ></View> */}
            <View style={{ height: 100, textAlign: 'center', justifyContent: "center" }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Car<Text style={{ color: '#FCD34D', textAlign: 'center' }}>X</Text></Text></View>
            <View style={{ height: 100, textAlign: 'center', justifyContent: "center" }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }} >welcome</Text><Text style={{ fontSize: 36, fontStyle: 'normal', color: '#FCD34D', textAlign: 'center' }}>User</Text></View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around' }}>
                    <Image
                        source={{ uri:'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',}}
                        style={{ width: 100, height: 100, borderRadius: 200 / 2 }}
                    />
                </View>
            </View>
            <View style={{ justifyContent: 'space-around' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    onChangeText={text => setFullName(text)}
                    value={fullName}
                />
            </View>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={Email}
                    />
                </View>
            </View>
            <View >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        onChangeText={text => setPhonenumber(text)}
                        value={Phonenumber}
                    />
                </View>
            </View>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Car Model"
                        onChangeText={text => setCar(text)}
                        value={Car}
                    />
                </View>
            </View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: "flex-end", padding: 40 }}>
                    <TouchableOpacity
                        onPress={() => alert('PRESS ME!')}
                        style={{ backgroundColor: '#2563EB', boxSizing: 'border-box', width: 110, height: 50, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 10
                        }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#EBEBEB',
        borderRadius: 40
    },
});
export default ProfileEdit;