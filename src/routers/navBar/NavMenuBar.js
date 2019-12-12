import React from 'react'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import RightMenu from './RightMenu'
import Body from './Body'

const NavMenuBar = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <RightMenu {...props} />
        </NavBarContainer>
    )
}

export default NavMenuBar
