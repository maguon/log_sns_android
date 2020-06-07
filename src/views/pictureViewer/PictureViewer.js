import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'


class PictureViewer extends Component {
    render() {
        const { navigation: { state: { params: { imageIndex, imageList } } } } = this.props
        return (
            <View style={{ flex: 1 }}>
                <ImageViewer
                    saveToLocalByLongPress={false}
                    index={imageIndex}
                    ref={ref => this.ImageViewer = ref}
                    imageUrls={imageList.map(item => {
                        return {
                            url: `${item}`
                        }
                    })}
                />
            </View>
        )

    }
}

export default PictureViewer
