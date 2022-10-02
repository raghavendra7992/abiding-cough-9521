import React from 'react'
import { Box, Container, Image,Text } from "@chakra-ui/react"
import News from './News';
// import News from './News'
// import {FontAwesomeIcon} from "@babel/core"

export default function Navbar() {
  let newDate = new Date()
let date = newDate.getDate();
let months=["Jan","Feb","Mar","April","May","June","July","August","Sep","Oct","Nov","Dec"]
let month = months[newDate.getMonth() + 1];
let year = newDate.getFullYear();
let days=["Sunday","Monday","Tuesday","Thursday","Friday","Sataurday"]
let a=new Date()
let day=days[a.getDay()]


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
    <Box display="flex">
      <Text>{day},{month} {date},{year}<br></br>EPAPER |
TODAY’S PAPER</Text>
<Image marginLeft="300px" src='https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg'/>
<br />

    </Box>
    <Box>
    <Text fontWeight="24px" fontSize="20px" textAlign="center">Jourlism Is Courge</Text>
    </Box>
    <Box display="flex" border="1px solid grey">
      
          <Text ml="20px">Home</Text>
          <Text ml="20px">Explained</Text>
          <Text ml="20px">Political Pulse</Text>
          <Text ml="20px">India</Text>
          <Text ml="20px">Cities</Text>
          <Text ml="20px">OPinion</Text>
          <Text ml="20px">Entertainment</Text>
          <Text ml="20px">LifeStyle</Text>
          <Text ml="20px">Technology</Text>
          <Text ml="20px">Video</Text>
          <Text ml="20px">Sports</Text>
          <Text ml="20px">Education</Text>
          <Text ml="20px">Premium</Text>
          <Text ml="20px">Investigators</Text>
          <Text ml="70px" backgroundColor="orange">Subcribe</Text>
          <Text ml="20px" bg="black" color="white"> Sign In</Text>
    </Box>
    <Container>
      {News.data}
    </Container>
    </div>
  )
}
