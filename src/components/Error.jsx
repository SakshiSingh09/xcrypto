import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = (props) => {
  return (
    <Alert status='error' position={"fixed"} b={"4"} left={"50%"} transform={"translateX(-50%"} w={"container.lg"}>
      <AlertIcon />
      {props.message}
    </Alert>
  )
}

export default Error
