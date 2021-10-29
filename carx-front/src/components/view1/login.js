


import React from 'react';
import { StyleSheet, Text, View ,TextInput,ImageBackground,Button,Alert ,Image} from "react-native";

 

import Icon from 'react-native-vector-icons/Ionicons';

const image = { uri: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" }
export default function LogIn() {
  return (
<>
<ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <View style={[styles.container, {
    
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1,justifyContent:"flex-end" }} >
      <Text style={{ textAlign: 'center', color: 'white',fontSize:48 }}>Car<Text style={{color:"black"}}>X</Text></Text>
      </View>
      
      <View style={{ flex: 1, justifyContent:"flex-end",alignItems:"center" }} >
    
      

      </View>
      <View style={[styles.carx ],{ flex: 1,}} >
        <View style={[styles.flex],{justifyContent:"space-between",alignItems:"center"}}>
      <TextInput 
      style={[styles.carx,{
      
      } ]}
        placeholder="Phone Number"
       
      />
        <Text></Text> 


       <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        <Text></Text> 

      <Text style={{color:"white"}}>or</Text>
        <Text></Text> 
        <View >
            <Image style={{
            resizeMode: "contain",
            height: 15,
            width: 15
          }} source={require("../../../assets/25555-middle.png")} />
            <Text >Connect with GOOGLE</Text>
          </View>
       

      </View>

      </View>
    </View>
    </ImageBackground>

  </>  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
 
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  carx:{
    backgroundColor:"white",
    borderRadius:40,
  
    lineHeight:2.4,
    textAlign:"left",
    height: 50,
    
    width:271,
    borderWidth: 1,
    padding: 10,
 
  },
  frame2 : {
    color:"black",
     width:271,
    height: 44,
    backgroundColor: "#ffffff",
    overflow: "visible",
    borderRadius: 40,
     },frame : {
      // width: 16,
      // height: 16,
      overflow: "visible",
      // backgroundImage: "url(/* Google_icon-icons.com_66793.png */)",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "center",
    }
  , google: {
    
      // width: "auto", 
      // height: "auto", 
      overflow: "visible",
  
    
      fontStyle: "normal",
    
      fontSize: 20,
      letterSpacing: -1,
      // lineHeight: 1.2,
      textAlign: "center",
   
  }
  ,flex:{
    justifyContent:"space-around"
  }
});