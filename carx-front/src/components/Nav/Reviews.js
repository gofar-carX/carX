
import React, { useState, useEffect } from 'react';
import { TouchableHighlight, SafeAreaView, Button, StyleSheet, Text, View, ScrollView, TextInput ,TouchableOpacity } from 'react-native';
import tailwind from "tailwind-rn";
import moment from 'moment'
import axios from 'axios'


export default function Reviews({ navigation }) {

    const [reviews, setreviews] = useState({})
    const [comment, setComment] = useState('')
    const [test, settest] = useState([])

    let  AddComment =  function () {
        console.log(comment)
        setComment('')
    }

    useEffect(() => {
        axios.get("https://haunted-cat-69690.herokuapp.com/reviews").then((res) => {
            settest(res.data)
        })
            .catch((err) => alert(err))

    }, [])
    if (test == undefined) {
        return (
            <View><Text>loading ...</Text></View>
        );
    }
    else {

        return (
            <SafeAreaView style={tailwind('h-full')}>
                <View style={tailwind(' pt-4 items-center ')}>
                    <View style={tailwind(' flex flex-row  my-4')}>
                        <Text style={tailwind('text-4xl font-semibold ')}>
                            car
                        </Text>
                        <Text style={tailwind('text-yellow-600 text-4xl font-semibold ')}>
                            X
                        </Text>
                    </View >
                    <View style={tailwind(' flex flex-row items-center')}>
                        <TextInput
                            style={tailwind('w-32 m-2 p-0  border-black  rounded-xl  ')}
                            placeholder="add a comment "
                            value={comment}
                            onChangeText={e => {setComment({ e })}}
                        />
                        <TouchableOpacity onPress={()=>{AddComment()}}>
                        <View style={tailwind('p-2 w-28 h-10 bg-yellow-600  text-lg rounded-lg ')}>
                            <Text style={tailwind(" text-center text-white ")}>Add</Text>
                        </View>
                        </TouchableOpacity>


                    </View>
                    <ScrollView style={tailwind('h-5/6   min-w-full rounded-2xl flex ')}>
                        {test.map((el, key) =>
                            <View key={key} style={tailwind(' m-2 p-4 items-start border-black bg-yellow-600 rounded-2xl flex ')}>
                                <View style={tailwind(' flex flex-row ')}><Text>{el.user}</Text><Text style={tailwind('  text-white ml-4  ')}>{moment(el.createdAt).startOf('hour').fromNow()}</Text></View>
                                <Text>{el.message}</Text>
                            </View>
                        )}






                    </ScrollView>
                </View>

            </SafeAreaView>

        );
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
