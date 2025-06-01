import React from 'react'

import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/react.svg'
import ColourModeSwitch from './ColourModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'right'} padding={'10px'}>
        {/* <Image src = {logo} boxSize = '60px' /> */}
        <ColourModeSwitch />
    </HStack>
  )
}

export default NavBar