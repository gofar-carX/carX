import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NavigationBar({navigation}) {
    return (
        <View style={[styles.container, {

            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, justifyContent: "center" }} >


                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#D9AF91" }}>X</Text></Text>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Welcome <Text style={{ color: "#D9AF91" }}>User</Text></Text>

            </View>

            <View style={{ flex: 3, backgroundColor: "#D9AF91", borderTopLeftRadius: 40, borderTopRightRadius: 40 ,justifyContent:"space-evenly"}} >
                <View style={{flex:0.2,backgroundColor:"#ca9168" ,width:300,alignSelf:"center",borderRadius:20}}>

                <View style={[], { flexDirection: "row", alignSelf: "center" ,flexDirection: "row",justifyContent:"space-evenly",alignSelf:'center',padding:5}} >
              
                    <View style={{flex:0.4}} >
                    <MaterialIcons name="local-car-wash" size={85} color="black" style={{alignSelf:"center"}} />
                    
                    </View>
                    
                    <View style={{flex:0.4,alignSelf:"center"}}>

                    <Text style={{ fontSize: 35}}>Wash</Text>
                    </View>
                  </View>



                </View>
                <View style={{flex:0.2,backgroundColor:"#ca9168",width:300,alignSelf:"center",borderRadius:20}}>
                <View style={[], { flexDirection: "row", alignSelf: "center" ,flexDirection: "row",justifyContent:"space-evenly",alignSelf:'center',padding:5}} >
              
              <View style={{flex:0.4}} >
              <MaterialCommunityIcons name="car-cog" size={85} color="black" />
              
              </View>
              
              <View style={{flex:0.4,alignSelf:"center",flexWrap:"nowrap"}}>

              <Text style={{ fontSize: 20}}>Maintenance</Text>
              </View>
            </View>


                </View>
                <View style={{flex:0.2,backgroundColor:"#ca9168",width:300,alignSelf:"center",borderRadius:20}}>

                <View style={[], { flexDirection: "row", alignSelf: "center" ,flexDirection: "row",justifyContent:"space-evenly",alignSelf:'center',padding:5}} >
              
              <View style={{flex:0.4}} >
              <MaterialIcons name="car-repair" size={80} color="black" />
              
              </View>
              
              <View style={{flex:0.4,alignSelf:"center"}}>

              <Text style={{ fontSize: 35}}>Repair</Text>
              </View>
            </View>

                </View>



            </View>


            <View style={[styles.border], { flex: 0.34, flexDirection: "row", backgroundColor: "#D9AF91" }} >
                <View style={{ flex: 0.34, justifyContent: "center", alignItems: "center" }}>
                    <Text>
                        <Ionicons name="ios-home-sharp" size={30} color="black" />
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }}>

                    <Text>
                        <Ionicons name="notifications" size={30} color="black" />
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: "center", alignItems: "center" }} >
                    <Text onPress={() => { navigation.navigate('Nav')}} >
                        <MaterialIcons name="menu" size={30} color="black"   />
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
    border: {
        borderWidth: 5,
        backgroundColor: "#D9AF91"
    }
});

