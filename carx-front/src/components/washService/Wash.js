import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import SelectDropdown from "react-native-select-dropdown";
export default function Wash() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View style={tailwind("flex flex-col w-full h-full  ")}>
      <View style={tailwind(" h-1/6    ")}></View>
      <View style={tailwind(" h-4/6  flex flex-col ")}>
        <View style={tailwind(" h-1/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>

          <View style={tailwind(" w-1/12  ")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </View>
          <View style={tailwind(" w-6/12  ")}>
            <Text style={tailwind(" font-bold  text-center mt-2 text-3xl	")}>
              <Text style={tailwind("text-yellow-600 	")}>Wash</Text> Service
            </Text>
          </View>
          <View style={tailwind(" w-3/12 ")}></View>
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
                <TouchableHighlight style={ tailwind('p-2 w-32 h-8 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300 		')}>
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
      <View style={tailwind(" h-1/6  ")}>

      </View>
    </View>
  );
}
