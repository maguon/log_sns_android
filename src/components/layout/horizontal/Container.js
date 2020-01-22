import React from 'react'
import { View, Text } from 'react-native'

const Container = props => {
    const { children } = props
    return (
        <View style={{ flexDirection: 'row' }}>
            {children}
        </View>
    )
}

export default Container