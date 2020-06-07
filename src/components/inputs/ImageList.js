import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DatePickerAndroid,
    Dimensions,
    Image
} from 'react-native'
import { Icon } from 'native-base'
import globalStyles from '../../GlobalStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as host from '../../utils/host'

class ImageList extends Component {


    render() {
        const { input: { value, onChange } } = this.props
        console.log('this.props', this.props)
        const list = value.map((item, i) => {

            return (
                <TouchableOpacity key={i} onPress={() => {
                    this.props.openPictureViewer(i,value)
                 }}>
                    <Image style={{ width: 60, height: 60, margin: 5 }} source={{ uri: `${host.image_host}/${item}` }} />
                </TouchableOpacity>
            )
        })
        return (
            <View style={{ flexWrap: 'wrap', margin: 10, padding: 5, flexDirection: 'row' }}>
                {list}
                <TouchableOpacity onPress={() => {
                    this.props.openSources()
                }}>
                    <View style={{ width: 60, height: 60, borderColor: '#bbb', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5 }}>
                        <Icon name='ios-add' style={{ fontSize: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ImageList