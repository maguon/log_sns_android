import React from 'react'
import { View, Text, Image } from 'react-native'

const VideoContent = props => {
    console.log('props',props)
    return (
        <View style={{ flex: 1 }}>
            {/* <Image source={{uri:props.preview}}/> */}
        </View>
    )
}

export default VideoContent