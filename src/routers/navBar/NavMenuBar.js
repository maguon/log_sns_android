import React from 'react';
import { View, StyleSheet } from 'react-native'
import NavBarContainer from './NavBarContainer'
import Left from './Left'
import RightMenu from './RightMenu'
import Body from './Body'

const NavMenuBar = props => {
    return (
        <NavBarContainer {...props}>
            <Left {...props} />
            <Body {...props} />
            <RightMenu {...props} />
        </NavBarContainer>
    )
}

export default NavMenuBar
