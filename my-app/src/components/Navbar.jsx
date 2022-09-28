import React from 'react'
import { Box, Text } from "@chakra-ui/react"
// import {FontAwesomeIcon} from "@babel/core"

export default function Navbar() {
  return (
    <div>
        <Box display="flex" w="100%" h="40px">
        <Box display="flex" bg="#abb8c3" w="100px" borderRadius="2px" marginTop="10px" marginLeft="15px">
       <img src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png" style={{
        width:"25px"
       }} alt=""/>
       <Text marginLeft="2px" margin="-1"> Sections</Text>
       </Box>
       <Box marginLeft="9px" margin="6" bg="#abb8c3" w="30px" borderRadius="2px" >
        <img style={{
            width:"25px"
        }} src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="" />
       </Box>
       <Box>
        <Text  marginLeft="350px">
        ENGLISH | தமிழ் | বাংলা | മലയാളം | हिंदी | मराठी
        </Text>
        </Box>
       <Box  display="flex" bg="#abb8c3" w="120px" borderRadius="2px" marginTop="10px"  ml="200px">
       <img src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png" style={{
        width:"25px"
       }} alt=""/>
       <Text marginLeft="2px" margin="-1">NewsLetters</Text>
       </Box>
       <Box ml="10px" mt="10px">
        <img 
        style={{
            width:"25px"
           }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/facebook-icon.svg" alt="" />
        <img style={{
        width:"25px",
        marginLeft:"10px"
       }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/twitter-icon.svg" alt="" />
        <img style={{
        width:"25px",
        marginLeft:"10px"
       }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/youtube-icon.svg" alt="" />
        <img style={{
        width:"25px",
        marginLeft:"10px"
       }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/IE-insta-grey.svg" alt="" />
       </Box>
    
    </Box>
    </div>
  )
}
