import React from 'react';
import NavBarContainer from './NavBarContainer'
import Left from './Left'
import Right from './Right'
import Body from './Body'

const NavBar = props => {
    return (
        <NavBarContainer {...props}>
            <Left {...props} />
            <Body {...props} />
            <Right {...props} />
        </NavBarContainer>
    )
}

export default NavBar
