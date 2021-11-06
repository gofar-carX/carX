import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NavigationBar({ navigation }) {
    return (
        <View style={[styles.container, {

            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Car<Text style={{ color: "#FCD34D" }}>X</Text></Text>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 35 }}>Welcome <Text style={{ color: "#FCD34D" }}>User</Text></Text>
            </View>

            <View style={{ flex: 3, backgroundColor: "#2563EB", borderTopLeftRadius: 20, borderTopRightRadius: 20, justifyContent: "space-evenly" }} >



                <View style={{ flex: 0.2, backgroundColor: "#ffffff", width: 300, alignSelf: "center", borderRadius: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Wash") }}>
                        <View style={[], { flexDirection: "row", alignSelf: "center", flexDirection: "row", justifyContent: "space-evenly", alignSelf: 'center', padding: 8 }}   >

                            <View style={{ flex: 0.4 }} >
                                <MaterialIcons name="local-car-wash" size={85} color="#FCD34D" style={{ alignSelf: "center" }} />
                            </View>

                            <View style={{ flex: 0.4, alignSelf: "center" }}>
                                <Text style={{ fontSize: 18 }}>Wash</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>





                <View style={{ flex: 0.2, backgroundColor: "#ffffff", width: 300, alignSelf: "center", borderRadius: 20 }}>
                    <TouchableOpacity onPress={() => { alert('this service will be available soon') }}>
                        <View style={[], { flexDirection: "row", alignSelf: "center", flexDirection: "row", justifyContent: "space-evenly", alignSelf: 'center', padding: 5 }} >

                            <View style={{ flex: 0.4 }} >
                                <MaterialCommunityIcons name="car-cog" size={85} color="#FCBC28" />
                            </View>

                            <View style={{ flex: 0.4, alignSelf: "center", flexWrap: "nowrap" }}>
                                <Text style={{ fontSize: 18 }}>Maintenance</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>




                <View style={{ flex: 0.2, backgroundColor: "#ffffff", width: 300, alignSelf: "center", borderRadius: 20 }}>
                    <TouchableOpacity onPress={() => { alert('this service will be available soon') }}>
                        <View style={[], { flexDirection: "row", alignSelf: "center", flexDirection: "row", justifyContent: "space-evenly", alignSelf: 'center', padding: 5 }} >

                            <View style={{ flex: 0.4 }} >
                                <MaterialIcons name="car-repair" size={80} color="#FCBC28" />
                            </View>

                            <View style={{ flex: 0.4, alignSelf: "center" }}>
                                <Text style={{ fontSize: 18 , color:'black' }}>Repair</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>

            </View>
        </View >
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

