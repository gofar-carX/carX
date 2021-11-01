import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import SelectDropdown from "react-native-select-dropdown";
import Nav from "./Nav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from "./Footer";

const Stack = createNativeStackNavigator();

export default function Wash({changeView}) {
  const countries = ["Egypt", "Canada"];

  return (
    <View style={tailwind("flex flex-col w-full h-full  ")}>
      <View style={tailwind(" h-1/6    ")}></View>
      <View style={tailwind(" h-4/6  flex flex-col ")}>
        <View style={tailwind(" h-1/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>
          
           <Nav />
    
         
        </View>
        <View style={tailwind(" h-5/6 bg-white flex flex-row gap-4 ")}>
          <View style={tailwind(" w-3/12    ")}></View>
          <View style={tailwind(" w-6/12  flex flex-col  ")}>
              <View style={tailwind(" h-1/6   ")}></View>
            <View style={tailwind(" h-1/6 items-center	  ")}>
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={tailwind(" h-1/6 items-center")}>
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>       
            <View style={tailwind(" h-1/6 items-center  ")}>
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
           <View style={tailwind(" h-1/6   ")}></View>
            <View style={tailwind(" h-1/6   flex flex-row ")}>
                <View  style={tailwind(" w-3/6   ")}></View>
                <View  style={tailwind(" w-1/6 items-center ")}>
                <TouchableHighlight onPress={() => changeView()} style={ tailwind('p-2 w-32 h-8 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300 		')}>
                <Text style={tailwind(" text-center text-white ")}>
                  Next
                </Text>
              </TouchableHighlight>
                </View>
                <View  style={tailwind(" w-2/6   ")}></View>
     
            </View>
          </View>
          <View style={tailwind(" w-3/12    ")}></View>
          {/* <SelectDropdown
            /> */}
        </View>
      </View>
      <View style={tailwind(" h-1/6 flex flex-row  ")}>
         <Footer  /> 
      </View>
    </View>
  );

  
}
