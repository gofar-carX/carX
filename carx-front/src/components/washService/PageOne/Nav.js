import React from 'react'
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
export default function Nav() {
    return (
        <>
        <View style={tailwind(" w-1/12  ")}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
       
        </svg> */}
      </View>
      <View style={tailwind(" w-7/12  ")}>
        <Text style={tailwind(" font-bold  text-center mt-2 text-3xl 	")}>
          <Text style={tailwind("text-blue-600 	")}>Wash Service </Text>
        </Text>
      </View>
      <View style={tailwind(" w-3/12 ")}></View>
      </>
    )
}
