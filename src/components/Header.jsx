import {SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, Heading, InputGroup, Button, InputLeftElement, Box, useColorModeValue } from '@chakra-ui/react'


import React, { useState } from 'react'

const Header = ({SetSearch}) => {
    const [str, SetStr] = useState("")
    
    return (
    <Flex bg={useColorModeValue("blackAlpha.200", "blackAlpha.400")} justifyContent={"space-between"} alignItems={"center"} gap={"5px"} paddingY={"20px"} px={"10px"}>
        <Heading fontSize={{base: "15px", sm: "22px", lg: "25px"}} color={useColorModeValue("blue.600", "whiteAlpha.900")}>WeatherApp</Heading>
        <Box w={{base: "95%", sm: "70%", md: "50%"}} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
        <InputGroup>
            <InputLeftElement>
                    <SearchIcon></SearchIcon>
            </InputLeftElement>
            <Input onChange={(e) => SetStr(e.target.value)} size={{base: "sm", sm: "md", }} borderColor={"blue.400"} variant={"flushed"} fontSize={"18px"} fontWeight={"500"} placeholder='Enter the city...'></Input>
        </InputGroup>
        <Button onClick={str? () => SetSearch(str):""} size={"sm"}>Search</Button>
        </Box>
    </Flex>
  )
}

export default Header