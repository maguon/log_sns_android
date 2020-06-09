import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'

class VideoContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Video source={{ uri: this.props.video }}   // Can be a URL or a local file.
                    paused={true}
                    repeat={true}
                    controls={true}
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onEnd={() => {
                        this.player.seek(0);
                    }}
                    onError={(err) => {
                        Alert.alert(JSON.stringify(err))
                    }}
                    onLoad={() => {
                        this.player.seek(0)
                    }}
                    style={styles.backgroundVideo} />
                {/* <Image source={{uri:props.preview}} style={{width:200,height:200}}/> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: 200,
        height: 200
    },
});

export default VideoContent