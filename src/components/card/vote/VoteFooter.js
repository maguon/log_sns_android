import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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
                {params.status && <Text>已参与</Text>}
                {!params.status && <TouchableOpacity onPress={partakeOnPress}>
                    <Text style={{ color: '#008dc3' }}>点击参与</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default VoteFooter