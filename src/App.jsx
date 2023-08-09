import axios from "axios"
import { Stack, Box, useColorModeValue, Flex, CircularProgress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"


const App = () => {

  const [allData, SetAllData] = useState()
  const [search, SetSearch] = useState("Nukus")
  const [error, SetError] = useState("")

  async function getWheterData() {
    await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`)
    .then(function (response) {
      SetAllData(response.data)
    })
    .catch(function (error) {
      SetError(error.code)
      SetAllData()
    }) 
  }

  

  useEffect(() => {
    getWheterData()
  }, [search])
  

  return (
    <Stack w={"full"} minH={"100vh"}>
      <Box w={{base: "100%", sm: "95%", md: "90%", lg: "80%" }} margin={"0 auto"} bg={useColorModeValue("blackAlpha.100" , "blackAlpha.300")} maxW={"1400px"}>
        <Header SetSearch = {SetSearch} />
        {allData!==undefined? (<Content allData={allData}/>) : (<Flex justifyContent={"center"} minH={"77vh"} padding={"10px"} textAlign={"center"} alignItems={"center"}>{error? "No information found. Please enter the name of the city" : (<CircularProgress isIndeterminate color='blue.400' />)}</Flex>)}
      </Box>
    </Stack>
  )
}

export default App