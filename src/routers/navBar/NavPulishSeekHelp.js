import React from 'react'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import RightPublishSeekHelp from './RightPublishSeekHelp'
import Body from './Body'

const NavPulishSeekHelp = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <RightPublishSeekHelp {...props} />
        </NavBarContainer>
    )
}

export default NavPulishSeekHelp