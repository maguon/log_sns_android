import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const VoteFooter = props => {
    const { params = {},
        partakeOnPress = () => console.log("partakeOnPress") } = props
    return (
        <View style={{
            flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#ddd',
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            <View style={{ padding: 10 }}>
                <Text>参与人数：{params.participantsNum}</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ color: '#008dc3' }}>点击参与</Text>
            </View>
        </View>
    )
}

export default VoteFooter