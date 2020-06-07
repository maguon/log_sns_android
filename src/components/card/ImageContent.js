import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const ImageContent = props => {
    // console.log('props',props)
    const { imageList } = props
    const list = imageList.map((item, i) => {
        return (
            <TouchableOpacity key={i} onPress={() => {
                props.openPictureViewer(i, imageList)
            }}>
                <Image style={{ width: 60, height: 60, margin: 5 }} source={{ uri: `${item}` }} />
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