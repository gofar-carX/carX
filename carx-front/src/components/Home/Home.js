import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function  NavigationBar  ()  {
  return (
    <View style={[styles.container, {
   
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, justifyContent: "center" }} >

  
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#D9AF91" }}>X</Text></Text>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Welcome <Text style={{ color: "#D9AF91" }}>User</Text></Text>
       
      </View>

      <View style={{ flex: 3, backgroundColor: "green" ,borderTopLeftRadius:40,borderTopRightRadius:40 }} ></View>


      <View style={ [styles.border],{ flex: 0.34, flexDirection:"row",backgroundColor:"#D9AF91" }} >
        <View style={{flex:0.34 ,justifyContent:"center",alignItems:"center"}}>
            <Text>
                <Ionicons name="ios-home-sharp" size={30} color="black" />
                </Text>
         </View>
        <View style={{flex:0.33,justifyContent:"center",alignItems:"center"}}>

        <Text>
            <Ionicons name="notifications" size={30} color="black" />
            </Text>
        </View>
        <View style={{flex:0.33 ,justifyContent:"center",alignItems:"center"}}>
        <Text >
            <MaterialIcons name="menu" size={30} color="black" />
            </Text>

        </View>

      </View>
   


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  border:{
    borderWidth:5,
    backgroundColor:"#D9AF91"
  }
});

