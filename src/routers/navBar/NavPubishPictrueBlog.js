import React from 'react'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import RightPubishPictrueBlog from './RightPubishPictrueBlog'
import Body from './Body'

const NavPulishSeekHelp = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <RightPubishPictrueBlog {...props} />
        </NavBarContainer>
    )
}

export default NavPulishSeekHelp