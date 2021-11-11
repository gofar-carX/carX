import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import tailwind from "tailwind-rn";
import moment from 'moment'
import axios from 'axios'


export default function Reviews({ navigation, user }) {

    const [reviews, setreviews] = useState([])
    const [comment, setComment] = useState('')
    const [spinner, setSpinner] = useState(true)


    var AddComment = function () {
        axios.post(process.env.rev, { user: user.name, message: comment['e'] }).then((res) => {
            setComment('')
            fetch()
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
        if(reviews !== undefined || reviews == [] ){setSpinner(false)}
    }, [])
        return (
            <SafeAreaView style={tailwind('h-full')}>
                <View style={tailwind(' pt-4 items-center ')}>
                    <View style={tailwind(' flex flex-row  my-4')}>
                        <Text style={tailwind('text-4xl font-semibold ')}>
                            car
                        </Text>
                        <Text style={[tailwind(' text-4xl font-semibold '),{color:'#005E9D'}]}>
                            X
                        </Text>
                    </View >
                    <View style={tailwind(' flex flex-row items-center')}>
                        <TextInput
                            style={tailwind('w-32 m-2 p-0  border-black  rounded-xl  ')}
                            placeholder="add a comment "
                            value={comment}
                            onChangeText={e => { setComment({ e }) }}
                        />
                        <TouchableOpacity onPress={() => { AddComment() }}>
                            <View style={[tailwind('p-2 w-28 h-10   text-lg rounded-lg '),{backgroundColor:'#005E9D'}]}>
                                <Text style={tailwind(" text-center text-white ")}>Add</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <ScrollView style={tailwind('h-5/6   min-w-full rounded-2xl flex ')}>
                        {spinner ?
                            <ActivityIndicator color="blue" size="large" style={{ alignSelf: "center" }} />
                            : <>

                                {reviews.map((el, key) =>
                                    <View key={key} style={[tailwind(' m-2 p-4 items-start border-black  rounded-2xl flex '),{backgroundColor:'#005E9D'}]}>
                                        <View style={tailwind('  flex flex-row ')}><Text style={tailwind(' text-yellow-300  ')}>{el.user}</Text><Text style={tailwind('  text-black ml-4  ')}>{moment(el.createdAt).startOf('now').fromNow()}</Text></View>
                                        <Text style={tailwind(' text-white ')}>{el.message}</Text>
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
});