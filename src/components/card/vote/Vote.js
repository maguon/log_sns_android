import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Vote = props => {
    const { params = {} } = props
    return (
        <View>
            <Text style={{ padding: 10 }} numberOfLines={3}>{params.content}</Text>
        </View>
    )
}

export default Vote