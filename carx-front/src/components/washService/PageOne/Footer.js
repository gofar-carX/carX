import React from "react"
import {
  Box,
  Text,
  Icon,
  HamburgerIcon,
 
  VStack,
  FlatList,
  useBreakpointValue,
  Center,
  NativeBaseProvider,
} from "native-base"
export const Example = () => {
  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 12,
  })
  const icons = [
  
    {
      icon: <HamburgerIcon size="4" />,
      iconName: "menu",

    },
    {
      icon: <House size="4" />,
      iconName: "menu",
      
    }
  ]
  return (
    <Box w="100%">
      <FlatList
        data={icons}
        renderItem={({ item }) => (
          <VStack
            py="2"
            flex={1}
            space={2}
            my={3}
            mx={2}
            boxSize="76"
            alignItems="center"
          >
            <Box
              _text={{
                textAlign: "center",
              }}
            >
              {item.icon}
            </Box>
           
            <Text textAlign="center">{item.iconName}</Text>
          </VStack>
         
        )}
        keyExtractor={(item) => item.iconName}
        numColumns={cols}
      />
     
    </Box>
  
  )
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
