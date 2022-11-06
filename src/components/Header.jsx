import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} >
        <ButtonGroup gap={'4'}>
            <Button variant={"unstyled"} color={"white"} _hover={{color:"red"}}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} _hover={{color:"red"}}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} color={"white"} _hover={{color:"red"}}>
                <Link to="/coins">Coins</Link>
            </Button>
        </ButtonGroup>
    </HStack>   
  )
}

export default Header
