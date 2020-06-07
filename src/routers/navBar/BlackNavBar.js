import React from 'react';
import { View, StyleSheet } from 'react-native'
import NavBarContainer from './NavBarContainer'
import BlackLeft from './BlackLeft'
import Right from './Right'
import Body from './Body'

const NavBar = props => {
    return (
        <NavBarContainer {...props} style={{
            backgroundColor: '#000',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#777'
        }}>
            <BlackLeft {...props} />
            <Body {...props} />
            <Right {...props} />
        </NavBarContainer>
    )
}

export default NavBar
