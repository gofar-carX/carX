
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
// import Profile from './src/components/Profile'
import ProfileEdit from './src/components/Profile/ProfileEdit';


export default function App() {
  return (
    //test devide work
    // <View style={tailwind("flex flex-row h-full  bg-gray-500 ")}>
    <View>
      {/* <Profile /> */}
      <ProfileEdit />
      {/* <View style={tailwind(" w-1/3 bg-red-500 flex flex-col ")}>
        <View style={tailwind(" h-1/3 bg-red-200 ")}><Text>hello</Text></View>
      </View>
      <View style={tailwind(" w-1/3 bg-blue-500  ")}>
        <Text>hello</Text>
      </View> */}
    </View>

  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
