
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from "tailwind-rn";
import SelectDropdown from 'react-native-select-dropdown'


export default function App() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    //test devide work
     <View style={tailwind("flex flex-col w-full h-full  bg-gray-500 ")}>
     
      <View style={tailwind(" h-1/6 bg-blue-500   ")}>
          
      </View>
      <View style={tailwind(" h-4/6 bg-red-500 flex flex-col ")}>
            <View style={tailwind(" h-1/6 bg-gray-500  flex flex-row ")}>
              <View style={tailwind(" w-1/12 bg-yellow-200")}>

              </View>
             
              <View style={tailwind(" w-1/12  bg-yellow-300")}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
              </View>
              <View style={tailwind(" w-1/12 bg-yellow-200")}>

              </View>
              <View style={tailwind(" w-4/12  bg-yellow-400")}>
                    <Text style={tailwind(" font-bold  text-center mt-2 ")} ><Text style={tailwind("text-yellow-700")}>Wash</Text> Service</Text>
              </View>
         
            </View>
            <View style={tailwind(" h-4/6 bg-white ")}>
            <Text>fff</Text>
            </View>
      </View>
      <View style={tailwind(" h-1/6 bg-blue-500  ")}>
      </View>
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
