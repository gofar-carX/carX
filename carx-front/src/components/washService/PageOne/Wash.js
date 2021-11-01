import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import SelectDropdown from "react-native-select-dropdown";
import Nav from "./Nav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import Footer from "./Footer";

const Stack = createNativeStackNavigator();

export const Example =({changeView})=> {
  let [service, setService] = React.useState("")
  return (
 <View style={tailwind("flex flex-col w-full h-full  ")}>
<View style={tailwind(" h-4/6  flex flex-col  pt-8")}>
  <View style={tailwind(" h-2/6   flex flex-row ")}>
    <View style={tailwind(" w-1/12 ")}></View>
    <View style={tailwind(" w-1/12 ")}></View>
    
     <Nav />

   
  </View>
  <View style={tailwind(" h-4/6 bg-white flex flex-row  ")}>
    <View style={tailwind(" w-3/12    ")}></View>
    <View style={tailwind(" w-6/12  flex flex-col  ")}>
      <View style={tailwind(" h-1/6 items-center	  ")}>
      <VStack alignItems="center" space={4}>
<Select
  selectedValue={service}
  minWidth="200"
  accessibilityLabel="Choose Service"
  placeholder="Choose Service"
  _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon size="5" />,
  }}
  mt={1}
  onValueChange={(itemValue) => setService(itemValue)}
>
  <Select.Item label="UX Research" value="ux" />
  <Select.Item label="Web Development" value="web" />
  <Select.Item label="Cross Platform Development" value="cross" />
  <Select.Item label="UI Designing" value="ui" />
  <Select.Item label="Backend Development" value="backend" />
</Select>
</VStack>
      </View>
      <View style={tailwind(" h-1/6 items-center")}>
      <VStack alignItems="center" space={4}>
<Select
  selectedValue={service}
  minWidth="200"
  accessibilityLabel="Choose Service"
  placeholder="Choose Service"
  _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon size="5" />,
  }}
  mt={1}
  onValueChange={(itemValue) => setService(itemValue)}
>
  <Select.Item label="UX Research" value="ux" />
  <Select.Item label="Web Development" value="web" />
  <Select.Item label="Cross Platform Development" value="cross" />
  <Select.Item label="UI Designing" value="ui" />
  <Select.Item label="Backend Development" value="backend" />
</Select>
</VStack>
      </View>       
      <View style={tailwind(" h-1/6 items-center  ")}>
      <VStack alignItems="center" space={4}>
<Select
  selectedValue={service}
  minWidth="200"
  accessibilityLabel="Choose Service"
  placeholder="Choose Service"
  _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon size="5" />,
  }}
  mt={1}
  onValueChange={(itemValue) => setService(itemValue)}
>
  <Select.Item label="UX Research" value="ux" />
  <Select.Item label="Web Development" value="web" />
  <Select.Item label="Cross Platform Development" value="cross" />
  <Select.Item label="UI Designing" value="ui" />
  <Select.Item label="Backend Development" value="backend" />
</Select>
</VStack>
      </View>
     <View style={tailwind(" h-1/6   ")}></View>
      <View style={tailwind(" h-1/6   flex flex-row ")}>
          <View  style={tailwind(" w-3/6   ")}></View>
          <View  style={tailwind(" w-1/6 items-center ")}>
          <TouchableHighlight onPress={() => changeView()} style={ tailwind('p-2 w-32 h-8 bg-yellow-600 text-gray-100 text-lg rounded-lg  border-yellow-300 		')}>
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

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}