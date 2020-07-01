import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {image_host} from '../../utils/host'

const ImageContent = props => {
    // console.log('props',props)
    const { imageList } = props
    console.log('imageList',imageList)
    const list = imageList.map((item, i) => {
        return (
            <TouchableOpacity key={i} onPress={() => {
                props.openPictureViewer(i, imageList)
            }}>
                <Image style={{ width: 60, height: 60, margin: 5 }} source={{ uri: `${image_host}/${item}` }} />
            </TouchableOpacity>
        )
    })
    return (
        <View style={{ flexWrap: 'wrap', margin: 10, padding: 5, flexDirection: 'row' }}>
            {list}
        </View>
    )
}

export default ImageContent