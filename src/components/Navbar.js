import { Menu } from '@chakra-ui/react'
import React from 'react'
import {
    Portal,
    MenuButton,
    MenuList,
    MenuItem

} from '@chakra-ui/react';

const Navbar = () => {
    return (
        <div>
        <Menu >
        <MenuButton colorScheme="blue" >
            Menu
        </MenuButton>
        <Portal>
        <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Pets</MenuItem>     
            <MenuItem>Agregar</MenuItem>
            <MenuItem>login</MenuItem>
        </MenuList>
        </Portal>
        </Menu>
        </div>
    )
}

export default Navbar
