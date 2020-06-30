import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Video from 'react-native-video'
import {video_host} from '../../utils/host'


class VideoViewer extends Component {
    render() {
        console.log('this.props', this.props)
        const {navigation:{state:{params:{VideoUrl}}}} =this.props
        return (
            <View style={{ flex: 1 }}>
                <Video source={{ uri: `${video_host}/${VideoUrl}` }}   // Can be a URL or a local file.
                    paused={true}
                    repeat={true}
                    controls={true}
                    style={{ flex: 1 }} />
            </View>
        )
    }
}

export default VideoViewer