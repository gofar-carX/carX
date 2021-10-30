import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import SelectDropdown from "react-native-select-dropdown";
import Nav from "../PageOne/Nav";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from "../PageOne/Footer";

export default function Confirmation() {
    return (
        <View style={tailwind("flex flex-col w-full h-full  ")}>
        <View style={tailwind(" h-1/6    ")}></View>
        <View style={tailwind(" h-4/6  flex flex-col ")}>
        <View style={tailwind(" h-1/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>
          
           <Nav />
    
         
        </View>
      <View style={tailwind(" h-5/6 flex flex-row ")}>
        <View style={tailwind(" w-3/12   ")}> </View>
        <View style={tailwind(" w-6/12   ")}> 
        <Card style={tailwind(" style={{ borderRadius: 25 }}  ")} >
  <Card.Title>HELLO WORLD</Card.Title>
  <Card.Image >
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
  </Card.Image>
</Card>
    
        </View>

     </View>
        </View>
        <View style={tailwind(" h-1/6 flex flex-row  ")}>
           <Footer  /> 
        </View>
      </View>
    )
}
