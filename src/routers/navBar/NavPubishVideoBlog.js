import React from 'react'
import NavBarContainer from './NavBarContainer'
import BackLeft from './BackLeft'
import Body from './Body'
import { View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { submit } from 'redux-form'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    submit: () => {
        dispatch(submit('publishVideoBlog'))
    }
})

const RightPubisVideoBlog = connect(null, mapDispatchToProps)(props => {
    console.log('props', props)
    return (
        <View style={{ marginRight: 16 }}>
            <Button type="ghost" size='small' onPress={props.submit} onLongPress={props.submit}>
                发布
            </Button>
        </View>
    )
})

const NavPulishSeekHelp = props => {
    return (
        <NavBarContainer {...props}>
            <BackLeft {...props} />
            <Body {...props} />
            <RightPubisVideoBlog {...props} />
        </NavBarContainer>
    )
}

export default NavPulishSeekHelp