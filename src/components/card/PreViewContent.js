import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from '@ant-design/react-native'
import Video from 'react-native-video'


const windowWidth = Dimensions.get("window").width - 30

class PreViewContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('this.props.preview ',this.props.preview )
        return (
            <View style={{ width: windowWidth, height: windowWidth / 16 * 9, justifyContent: 'center', alignItems: 'center' }}>
                {!!this.props.preview && <Image source={{ uri: this.props.preview }} style={{ width: windowWidth, height: windowWidth / 16 * 9 }} />}
                {!this.props.preview && <Icon name={'file-image'} />}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: 300,
        height: 300
    },
});

export default PreViewContent