import React from 'react'
import { View, Text } from 'react-native'

const Content = props => {
    const { params = {} } = props
    return (
        <View style={{ margin: 10 }}>
            <Text numberOfLines={5}>{params.content}</Text>
        </View>
    )
}

export default Content

