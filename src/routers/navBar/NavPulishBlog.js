import React from 'react'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import RightPublishBlog from './RightPublishBlog'
import Body from './Body'

const NavPulishBlog = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <RightPublishBlog {...props} />
        </NavBarContainer>
    )
}

export default NavPulishBlog
