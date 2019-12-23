import React from 'react'
import { View } from 'react-native'
import { Button } from '@ant-design/react-native'

const RightPublishBlog = props => {
    return (
        <View style={{ marginRight: 16 }}>
            <Button type="ghost" size='small' >
                发布
            </Button>
        </View>
    )
}

export default RightPublishBlog