import React from 'react'
import { View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { submit } from 'redux-form'
import { connect } from 'react-redux'

const RightPubishPictrueBlog = props => {
    console.log('props', props)
    return (
        <View style={{ marginRight: 16 }}>
            <Button type="ghost" size='small' onPress={props.submit} onLongPress={props.submit}>
                发布
            </Button>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => ({
    submit: () => {
        dispatch(submit('publishPictureBlog'))
    }
})

export default connect(null, mapDispatchToProps)(RightPubishPictrueBlog)