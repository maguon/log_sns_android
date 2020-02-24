import React from 'react'
import { View, Text, Image } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'


const VoteHeader = props => {
    const { params = {} } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ padding: 10 }}>
                    <Image style={{ width: 40, height: 40 }} source={{ uri: params.avatar ? params.avatar : 'personalicon' }} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>{params.nick ? `${params.nick}` : ''}</Text>
                    <Text style={{ color: '#777' }}>{params.date ? `${moment(params.date).format('YYYY-MM-DD')}` : ''}</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text>进行中</Text>
            </View>
        </View>
    )
}

export default VoteHeader