import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react"
import IconImage from "./IconImage"

const Content = ({ allData }) => {

  
  return (
    <Stack mt={"40px"} mb={"10px"} minH="77vh" maxH={"1000px"}>
      <Box px="30px"> 
      <Heading fontSize={{base: "25px", sm: "30px", md: "35px"}}>{allData.name}</Heading>
      <Text fontSize={{base: "15px", sm: "16px", md: "20px"}}>{allData.sys.country}</Text>
      </Box>
      <Flex justifyContent={"center"} gap={{base: "0px", sm: "20px"}} mx={"auto"}>
        <Box minW={"200px"} maxW={"400px"} flex={"1"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconImage iconData={allData.weather[0].icon}/>
        </Box>
        <Box flex={"1"} paddingY={"20px"} display={"flex"} justifyContent={"center"}>
          <Box>
            <Heading fontSize={{base: "60px", sm: "90px", md: "120px"}}>{Math.floor(allData.main.temp)}°</Heading>
            <Text fontSize={{base: "15px", sm: "17px", md: "20px"}} fontWeight={"600"}>{allData.weather[0].description}</Text>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} mb={"20px"} alignItems={"center"} pr={"10px"} gap={{base: "10px", sm: "20px", md: "40px"}}>
            <HStack>
              <Text fontSize={{base: "18px", sm: "20px", md: "30px"}} fontWeight={400}>Hight:</Text>
              <Text fontSize={{base: "23px", sm: "25px", md: "40px"}} fontWeight={600}>{Math.floor(allData.main.temp_max)}°</Text>
            </HStack>
            <HStack>
              <Text fontSize={{base: "18px", sm: "20px", md: "30px"}} fontWeight={400}>Low:</Text>
              <Text fontSize={{base: "23px", sm: "25px", md: "40px"}} fontWeight={600}>{Math.floor(allData.main.temp_min)}°</Text>
            </HStack>
      </Flex>
    </Stack>
  )
}

export default Content