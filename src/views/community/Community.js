import React from 'react'
import { View, Text } from 'react-native'
import Friend from '../friend/Friend'

const Community = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Community</Text> */}
            <Friend />
        </View>
    )
}

export default Community