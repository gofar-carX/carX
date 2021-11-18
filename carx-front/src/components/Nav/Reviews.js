import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Modal, Pressable } from 'react-native';
import tailwind from "tailwind-rn";
import moment from 'moment'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';


export default function Reviews({ navigation, user }) {

    const [reviews, setreviews] = useState([])
    const [comment, setComment] = useState('')
    const [spinner, setSpinner] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);


    var AddComment = function () {
        axios.post(process.env.rev, { user: user.id, message: comment['e'] }).then((res) => {
            setComment('')
            fetch()
            setModalVisible(!modalVisible)
        })
    }

    var fetch = function () {
        axios.get(process.env.rev).then((res) => {
            setreviews(res.data)
        })
            .catch((err) => alert(err))
    }

    useEffect(() => {
        fetch()
        if (reviews !== undefined || reviews !== []) { setSpinner(false) }
    }, [])

    return (
        <SafeAreaView style={tailwind('h-full')}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={tailwind('p-4')}>
                            <TextInput
                                style={styles.carx}
                                placeholder="add a comment "
                                value={comment['e']}
                                onChangeText={e => { setComment({ e }) }}
                            />
                        </View>

                        <TouchableOpacity style={tailwind('p-4')} onPress={() => { AddComment() }} >
                            <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 0.7, y: 0.4 }} style={[{ borderRadius: 40, width: 180, height: 40, padding: 10, }]}>
                                <View style={[{ justifyContent: 'space-between', alignContent: 'center' }, tailwind('flex flex-row')]}>
                                    <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind('ml-2')]} >Add comment</Text>
                                    <Image style={[{ width: 34, height: 15 }, tailwind('mr-2 mt-1 ')]} source={require("../../../assets/Arrow1.png")} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={[{ justifyContent: 'center', alignSelf: 'center' }, tailwind('flex flex-row p-4')]}>

                            <View style={[{ justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderRadius: 40, borderColor: '#4398F8', height: 40, width: 120 }, tailwind('flex flex-row')]}>
                                <Text style={{ color: '#828282', alignSelf: 'center' }}>Cancel</Text>
                            </View>

                        </TouchableOpacity>


                    </View>
                </View>
            </Modal>

            <View style={tailwind(' pt-4 items-center ')}>

                <View style={[{ justifyContent: "center", alignContent: 'center', }, tailwind('flex flex-row mt-8 ml-4')]} >
                    <Image source={require("../../../assets/MainLogo.png")} />
                </View>

                <View style={[{ justifyContent: "center", alignContent: 'center', }, tailwind('flex flex-row ')]}   >
                    <Image source={require("../../../assets/reviews2.png")} />
                </View>

                <View style={tailwind(' flex flex-row items-center')}>

                    <TouchableOpacity style={tailwind('p-4')} onPress={() => setModalVisible(true)}  >
                        <LinearGradient colors={['#0857C1', '#4398F8']} start={{ x: 0.7, y: 0.4 }} style={[{ borderRadius: 40, width: 180, height: 40, padding: 10, }]}>
                            <View style={[{ justifyContent: 'space-between', alignContent: 'center' }, tailwind('flex flex-row')]}>
                                <Text style={[{ justifyContent: 'center', color: 'white' }, tailwind('ml-2')]} >Add comment</Text>
                                <Image style={[{ width: 34, height: 15 }, tailwind('mr-2 mt-1 ')]} source={require("../../../assets/Arrow1.png")} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>


                </View>
                <ScrollView style={[{ height: '55%' }, tailwind('   min-w-full rounded-2xl flex ')]}>
                    {spinner ?
                        <ActivityIndicator color="blue" size="large" style={{ alignSelf: "center" }} />
                        : <>

                            {reviews.map((el, key) =>
                                <View key={key} style={[tailwind(' m-2 p-4 items-start  flex '), { borderWidth: 1, borderColor: '#4398F8', borderRadius: 20 }]}>
                                    <View style={[{ justifyContent: 'space-between', width: '60%' }, tailwind('  flex flex-row ')]}><Text style={{ color: 'black', fontWeight: 'bold' }}>{el.user.name}</Text><Text style={{ color: '#828282', fontSize: 10, alignSelf: 'center', right: -140 }}>{moment(el.createdAt).startOf('now').fromNow()}</Text></View>
                                    <Text style={{ color: "#828282" }}>{el.message}</Text>
                                </View>
                            )}
                        </>
                    }

                </ScrollView>
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
    modalView: {
        margin: 20,
        marginTop: 240,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    carx: {
        backgroundColor: "white",
        borderRadius: 40,
        lineHeight: 2.4,
        textAlign: "left",
        height: 40,
        width: 271,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4398F8',
        borderWidth: 1
    },
});