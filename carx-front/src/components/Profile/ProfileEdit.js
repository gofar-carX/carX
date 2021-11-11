import React, { useState ,useEffect} from 'react';

import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';



import * as ImagePicker from 'expo-image-picker';
const ProfileEdit = ({ user , na ,navigation }) => {

    const [fullName, setFullName] = useState(user.name);
    const [Email, setEmail] = useState(user.email);
    const [Phonenumber, setPhonenumber] = useState(user.phone);

    let [file, setSelectedImage] = useState(null);
    const uploadedImage = () => {
        console.log(file.localUri)
        const fd = new FormData();
        fd.append('file', {
            name:'file',
            uri: file.localUri,
            type: 'image/jpg'
        })
        axios.post(`https://haunted-cat-69690.herokuapp.com/users/upload/1`, fd ,{headers:{Accept:'application/json','Content-Type':'multipart/form-data'}}).then((res) => {
            console.log(res)
        }) 
            .catch((err) => {
                console.log(err)
            })


    }
    const updateUser = () => {
        const data = { id: user.id, name: fullName, email: Email, phone: parseInt(Phonenumber) }
        axios.put("https://haunted-cat-69690.herokuapp.com/users/edit", data).then((response) => {
            alert('your profile has been updated')
            navigation.navigate('Home')


        }).catch((error) => {
            console.log(error)
        })
    }

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };



    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            <View style={{ height: 100, textAlign: 'center', justifyContent: "center" }} ><Text style={{ fontSize: 36, fontStyle: 'normal', textAlign: 'center' }}>Car<Text style={{ color: '#005A99', textAlign: 'center' }}>X</Text></Text></View>
            <View style={{ height: 200 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around' }}>

                    <>
                        <View style={styles.container}>

                            <Text >
                                {
                                    file == null ?
                                        <EvilIcons name="user" size={160} color="black" />
                                        : <View style={styles.container}>
                                            <Image source={{ uri: file.localUri }} style={styles.thumbnail} />
                                        </View>}
                                <TouchableOpacity onPress={openImagePickerAsync} >
                                    <MaterialCommunityIcons name="image-edit-outline" size={24} color="black" />
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </>
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
                        value={ `${Phonenumber}`}
                        keyboardType="phone-pad"
                        type="number"
                    />
                </View>
            </View>

            <View style={{ height: 100 }}>
                <View style={{ alignItems: "flex-end", padding: 40 }}>
                    <TouchableOpacity
                        onPress={uploadedImage}
                        style={{ backgroundColor: '#005A99', boxSizing: 'border-box', width: 110, height: 50, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
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
    container: {
        // flex: 0.5,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    thumbnail: {
        width: 125,
        height: 125,
        borderRadius: 300,
    },
});
export default ProfileEdit;