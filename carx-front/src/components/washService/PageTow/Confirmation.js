import React from "react";
import { TouchableHighlight, View } from "react-native";
import tailwind from "tailwind-rn";
import Nav from "../PageOne/Nav";
import Footer from "../PageOne/Footer";

import {
  Box,
  Heading,

  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";

function CardComponent() {
  return (
    <View style={tailwind("flex flex-col w-full h-full  ")}>
      <View style={tailwind(" h-4/6  flex flex-col pt-6")}>
        <View style={tailwind(" h-2/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>

          <Nav />
        </View>
        <View style={tailwind(" h-5/6 bg-white flex flex-row  ")}>
          <View style={tailwind(" w-3/12    ")}></View>
          <View style={tailwind(" w-6/12  flex flex-col  ")}>
            <View style={tailwind("    flex flex-row ")}>
              <View style={tailwind(" w-3/12    ")}></View>
              <View style={tailwind(" w-6/12  flex felx-col   ")}>
                <View style={tailwind(" h-4/6 items-center    ")}>
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    width="72"
                    shadow={1}
                    _light={{ backgroundColor: "gray.50" }}
                    _dark={{ backgroundColor: "gray.700" }}
                  >
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading>This will Cost you</Heading>
                        <Text
                          fontSize="xs"
                          _light={{ color: "yellow.700" }}
                          _dark={{ color: "violet.300" }}
                          fontWeight="500"
                          alignItems="center"
                        >
                          20$
                        </Text>
                      </Stack>
                      <Text fontWeight="400">
                        Estimted time for our agent to pick your car
                      </Text>
                      <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center">
                          <Text
                            color="gray.500"
                            fontWeight="400"
                            alignItems="center"
                          >
                            1h
                          </Text>
                        </HStack>
                      </HStack>
                    </Stack>
                  </Box>
                </View>
                <View   style={tailwind(" h-2/6   items-center flex flex-col  " )}  >
                  <View style={tailwind(" h-1/6    ")}></View>
                  <View style={tailwind(" h-2/6    ")}>
                    <TouchableHighlight
                      onPress={() => changeView()}
                      style={tailwind(
                        "p-2 w-32 h-8 bg-yellow-600 text-gray-100 text-lg rounded-lg  border-yellow-300 		"
                      )}
                    >
                      <Text style={tailwind(" text-center text-white ")}>
                        Next
                      </Text>
                    </TouchableHighlight>
                  </View>
                  <View style={tailwind(" h-1/6    ")}></View>

                  <View style={tailwind(" h-2/6    ")}>
                    <TouchableHighlight
                      onPress={() => changeView()}
                      style={tailwind(
                        "p-2 w-64 h-8 bg-yellow-600 text-gray-100 text-lg rounded-lg  border-yellow-300 		"
                      )}
                    >
                      <Text style={tailwind(" text-center text-white ")}>
                        Call us for more details
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
              <View style={tailwind(" w-3/12    ")}></View>
            </View>
          </View>
          <View style={tailwind(" w-3/12    ")}></View>
          {/* <SelectDropdown
        /> */}
        </View>
      </View>
      <View style={tailwind(" h-1/6 flex flex-row  ")}>
        <Footer />
      </View>
    </View>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CardComponent />
      </Center>
    </NativeBaseProvider>
  );
}
