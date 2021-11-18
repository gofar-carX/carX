import React, { useState, useEffect } from 'react';

import { EvilIcons } from '@expo/vector-icons';
import tailwind from "tailwind-rn";
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



import * as ImagePicker from 'expo-image-picker';
const ProfileEdit = ({ user, na, navigation, fetch }) => {

    const [fullName, setFullName] = useState(user.name);
    const [Phonenumber, setPhonenumber] = useState(user.phone || '');
    let [file, setSelectedImage] = useState(user.photo);
    const uploadedImage = () => {

        const fd = new FormData();
        fd.append('file', {
            name: 'file',
            uri: file.localUri,
            type: 'image/jpg'
        })
        axios.post(`https://haunted-cat-69690.herokuapp.com/users/upload/${user.id}`, fd, { headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' } }).then((res) => {
        })
            .catch((err) => {
                console.log(err)
            })

    }


    const updateUser = () => {
        const data = { id: user.id, name: fullName, email: user.email, phone: Phonenumber }
        axios.put("https://haunted-cat-69690.herokuapp.com/users/edit", data).then((response) => { })
            .then(() => { uploadedImage() })
            .then(() => {
                setTimeout(() => {
                    fetch()
                }, 3000);
                navigation.navigate('Nav')

            })

            .catch((error) => {
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

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>


            <View style={[{ justifyContent: "center", alignContent: 'center', padding: 10 }, tailwind('flex flex-row mt-16 ml-4')]} >
                <Image source={require("../../../assets/MainLogo.png")} />
            </View>

            <View style={[{ justifyContent: 'center', alignContent: 'center' }, tailwind('flex ')]}>

                <View style={{marginBottom:20}}>
                    {
                        file == null ?
                            <EvilIcons style={{ justifyContent: "center", padding: 20 }} name="user" size={200} color="#4398F8" />
                            : <View style={styles.container}>
                                <Image source={{ uri: file.localUri || file }} style={styles.thumbnail} />
                            </View>}

                    {/* <TouchableOpacity onPress={openImagePickerAsync} >
                                    <MaterialCommunityIcons name="image-edit-outline" size={24} color="black" />
                                </TouchableOpacity> */}
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", paddingBottom: 30 }}>
                    <TouchableOpacity onPress={openImagePickerAsync} >
                        <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={[{ justifyContent: 'center', alignContent: 'center', borderRadius: 40, height: 40, width: 120 }, tailwind('flex flex-row mt-2')]}>
                            <Text style={[{ fontSize: 20, justifyContent: "center", color: 'white' }, tailwind('mt-1')]}>Change</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text style={{ padding: 15 }}>Full Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    onChangeText={text => setFullName(text)}
                    value={fullName}
                />
            </View>

            <View>
                <Text style={{ padding: 15 }}>Phone Number:</Text>
                <TextInput

                    style={styles.input}
                    placeholder="Phone number"
                    onChangeText={text => setPhonenumber(text)}
                    value={`${Phonenumber}`}
                    keyboardType="phone-pad"
                    type="number"
                />
            </View>



            <View style={{ justifyContent: "center", alignItems: "center", padding: 40, paddingBottom: 30 }}>
                <TouchableOpacity onPress={updateUser}>
                    <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 1, y: 0.9 }} style={[{ justifyContent: 'center', alignContent: 'center', borderRadius: 40, height: 40, width: 120 }, tailwind('flex flex-row mt-2')]}>
                        <Text style={[{ fontSize: 20, justifyContent: "center", color: 'white' }, tailwind('mt-1')]}>Confirm</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>


        </View>




    );
};
const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderRadius: 40,
        textAlign: "left",
        height: 40,
        width: 271,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4398F8',
        borderWidth: 1

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