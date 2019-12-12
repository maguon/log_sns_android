import React from 'react';
import { View, StyleSheet } from 'react-native'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import Right from './Right'
import Body from './Body'

const NavBar = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <Right {...props} />
        </NavBarContainer>
    )
}

export default NavBar
