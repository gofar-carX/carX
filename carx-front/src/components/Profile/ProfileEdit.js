import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ProfileEdit = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            <View style={{ height: 100 }} ></View>
            <View style={{ height: 100, textAlign: 'center', justifyContent: "center" }} ><Text style={{ fontSize: 36, fontStyle: 'normal' }}>Car<Text style={{ color: '#d9af91' }}>X</Text></Text></View>
            <View style={{ height: 100, textAlign: 'center', justifyContent: "center" }} ><Text style={{ fontSize: 36, fontStyle: 'normal' }} >welcome</Text><Text style={{ fontSize: 36, fontStyle: 'normal', color: '#d9af91' }}>User</Text></View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around' }}>
                    <Image
                        source={{
                            uri:
                                'https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg',
                        }}
                        style={{ width: 100, height: 100, borderRadius: 200 / 2 }}
                    />
                </View>
            </View>
            <View style={{ justifyContent: 'space-around' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"

                />
            </View>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"

                    />
                </View>
            </View>
            <View >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"

                    />
                </View>
            </View>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Car"

                    />
                </View>
            </View>
            <View style={{ height: 100 }}>
                <View style={{ alignItems: "flex-end", padding: 40 }}>
                    <TouchableOpacity
                        onPress={() => alert('PRESS ME!')}
                        style={{ backgroundColor: '#d9af91', boxSizing: 'border-box', width: 110, height: 50, overflow: 'hidden', borderRadius: 25, order: '1px solid' }}>
                        <Text style={{
                            fontSize: 20, color: '#fff', justifyContent: "center", textAlign: "center", padding: 10
                        }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#EBEBEB',
        borderRadius: 40
    },
});
export default ProfileEdit;