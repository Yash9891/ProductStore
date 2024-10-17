import { Button, Container, Flex,HStack,Text,useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";


export const Navbar = () => {

    const {colorMode, toggleColorMode}=useColorMode();
   
  return (
<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
        <Text
         bgGradient='linear(to-l, #7928CA, #FF0080)'
         bgClip='text'
        
         fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
        >
            <Link to={"/"}>Product Store</Link>
        </Text>
<HStack spacing={2} alignment={"center"}>
    <Link to={"/create"}>
    <Button>
        <CiSquarePlus/>
    </Button>
    </Link>

    <Button onClick={toggleColorMode}>
        {colorMode=="light"?"🌙":"☀️"}
    </Button>
</HStack>
      </Flex>  

      </Container>
  )
}
