import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function Footer() {
    return (
       <>
         <View style={tailwind(" w-3/12 ")}></View>
            <View style={tailwind(" w-1/12  ")}></View>
            <View style={tailwind(" w-1/12  ")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
            </View>
            <View style={tailwind(" w-1/12 ")}></View>
            <View style={tailwind(" w-1/12  items-center")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
            </View>
            <View style={tailwind(" w-1/12 ")}></View>
            <View style={tailwind(" w-1/12  ")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
            </View>

            <View style={tailwind(" w-3/12 ")}></View>
       </>
    )
}
