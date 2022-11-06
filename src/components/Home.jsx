import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react';
import homeImg from "../assets/btc.png";

function Home() {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} filter={"grayscale(1)"}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={homeImg}/>
      <Text fontSize={"6xl"} textAlign={"center"} color={"whiteAlpha.700"} mt={"-20"}>XCRYPTO</Text>
    </Box>
  )
}

export default Home
