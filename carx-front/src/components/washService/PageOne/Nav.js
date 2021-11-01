import React from 'react'
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
export default function Nav() {
    return (
        <>
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
      </>
    )
}
