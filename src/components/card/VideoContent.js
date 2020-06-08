import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'

class VideoContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {

            }}>
                <Video source={{ uri: this.props.video }}   // Can be a URL or a local file.
                    paused={true}
                    repeat={true}
                    controls={true}
                    ref={(ref) => {
                        this.player = ref
                    }} 
                                                         // Store reference
                    onEnd={() => {
                        this.player.seek(0);
                    }}
                    onError={(err) => {
                        console.log(err)
                        console.log(this.props.video)
                        
                        // Alert.alert(JSON.stringify(err))
                    }}
                    onLoad={params => {
                        console.log(params)
                        console.log(this.props.video)
                        
                    }}
                    style={styles.backgroundVideo} />
                {/* <Image source={{uri:props.preview}} style={{width:200,height:200}}/> */}
            </TouchableOpacity>
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