import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import Video from 'react-native-video'
import {video_host} from '../../utils/host'


const windowWidth = Dimensions.get("window").width - 15


class VideoContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       console.log('this.props',this.props)
        return (
            <View style={{ flex: 1 }}>
                <Video source={{ uri: `${video_host}/${this.props.videoUrl}` }}   // Can be a URL or a local file.

                    paused={true}
                    repeat={true}
                    controls={true}
                    style={styles.backgroundVideo} />
                {/* <Image source={{uri:props.preview}} style={{width:200,height:200}}/> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: windowWidth,
        height: windowWidth / 16 * 9
    },
});

export default VideoContent
