import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, Linking } from 'react-native';
import axios from 'axios'

export default function payment() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    const payment = () => {
        var obj = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '6187cd89e9a4051e02a7c983:tl5QWDLJmDXUjOzm'
            }
        }
        axios.post("https://api.preprod.konnect.network/api/v2/payments/init-payment", {
            "receviverWallet": "6187cd89e9a4051e02a7c984",
            "amount": 10,
            "selectedPaymentMethod": "gateway",
            "token": "TND",
            "firstname": "oussama",
            "lastname": "yahyaoui",
            "email": "oussema.benabdallah.yahyaoui@gmail.com",
            "phonenumber": "23445610",
            "webhook": "https://merchant.tech/api/notification_payment",
            "successUrl": "http://localhost:5000/user",
            "failUrl": "http://localhost:5000",
        }, { obj }).then((response) => {
            console.log(response.data.payurl)
        })
    }

    // let handlePayment = function () {

    //     axios.post('http://192.168.11.113:5000/payment', { firstname, lastname, email, phone }).then((response) => {
    //         console.log(response)
    //     })


    // }

    // useEffect(() => {
    //     handlePayment()
    // }, [])

    return (
        <View style={{ flex: 1 }}>

            <Button
                onPress={() => Linking.openURL("https://api.konnect.network/Nw83PYi1q")}
                title="Payment"
            />

        </View>
    )
}





