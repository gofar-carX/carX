
import React from 'react';
// import {  Text, View } from 'react-native';
// import tailwind from "tailwind-rn";
import LogIn from './src/components/view1/login';


export default function App() {
  return (
    //test devide work
    <>
    {/* <View style={tailwind("flex flex-row h-full  bg-gray-500 ")}>
       <View style={tailwind(" w-1/3 bg-red-500 flex flex-col ")}>
         <View style={tailwind(" h-1/3 bg-red-200 ")}><Text>hello</Text></View>
       </View>
       <View style={tailwind(" w-1/3 bg-blue-500  ")}>
        <Text>hello</Text>
      </View>
    </View> */}
        <LogIn/>
    </>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
