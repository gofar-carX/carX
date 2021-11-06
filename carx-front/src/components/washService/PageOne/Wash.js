import React, { useState, useEffect } from 'react';
import { TouchableHighlight, TouchableOpacity, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Nav from "./Nav";
import { Select, VStack,CheckIcon,Center,NativeBaseProvider,} from "native-base"
import * as Location from 'expo-location';
const LOCATION_TASK_NAME = 'background-location-task';


const Wash = ({ navigation }) => {

  let [washType, setwashType] = useState('') 
  let [carType, setCarType] = useState('') 
  let [service, setService] = useState('')


  async function handlelocation() {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 5000,
    }).catch((err) => console.log(err))
  };

  return (
    <View style={tailwind("flex flex-col w-full h-full  ")}>
      <View style={tailwind(" h-4/6  flex flex-col  pt-8 ")}>
        <View style={tailwind(" h-2/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>
          <Nav />
        </View>
        <View style={tailwind(" h-4/6 bg-white flex flex-row  ")}>
          <View style={tailwind(" w-3/12    ")}></View>
          <View style={tailwind(" w-6/12  flex flex-col   ")}>
            <View style={tailwind(" h-1/6")}></View>
            <View style={tailwind(" h-1/6 items-center    ")}>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={carType}
                  minWidth="150"
                  minHeight="8"
                  accessibilityLabel="Choose Service"
                  placeholder="Car Type"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setCarType(itemValue)}
                >
                  <Select.Item label="Regular(Sedan,Coupé,SUV)" value="Regular" />
                  <Select.Item label="Pickup" value="PS" />
                  <Select.Item label="Van" value="Van" />
                  <Select.Item label="Truck" value="Truck" />
                </Select>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6 items-center  ")}>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={washType}
                  minWidth="150"
                  minHeight="8"
                  accessibilityLabel="Choose Service"
                  placeholder="Localisation"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,  
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setwashType(itemValue)}
                >
                  <Select.Item label="Interior" value="in" />
                  <Select.Item label="Exterior" value="ex" />
                  <Select.Item label="all" value="all" />

                </Select>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6 items-center  ")}>
              <VStack alignItems="center" space={8} >
                <TouchableOpacity onPress={() => handlelocation()} >
                  <Text style={tailwind(" text-center text-gray-500 pt-8 ")}>current location </Text>
                </TouchableOpacity>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6   flex flex-row ")}>
              <View style={tailwind(" w-2/6   ")}></View>
            </View>
          </View>
          <View style={tailwind(" w-3/12    ")}></View>
          {/* <SelectDropdown
      /> */}
        </View>
      </View>
      <View style={tailwind(" h-1/6 flex flex-row  ")}>
        {/* <Footer  />  */}
        <View style={tailwind(" w-4/12   ")}></View>
        <View style={tailwind("  w-4/12 items-center  flex flex-col")}>
          <View style={tailwind(" h-1/6   ")}></View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Confirmation')} style={tailwind('p-2 w-32 h-10 bg-yellow-600 text-gray-100 text-lg rounded-lg  border-yellow-300     ')}>
              <Text style={tailwind(" text-center text-white ")}>
                Next
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
export default function WashPage({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Wash navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}
