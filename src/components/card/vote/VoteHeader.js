import React from 'react'
import { View, Text, Image } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'

const VoteHeader = props => {
    const { params = {} } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18 }}>{params.title ? `${params.title}` : ''}</Text>
            </View>
            <View style={{ padding: 10 }}>
                {params.status == 0 && <Text>未开始</Text>}
                {params.status == 1 && <Text>进行中</Text>}
                {params.status == 3 && <Text>已结束</Text>}
            </View>
        </View>
    )
}

export default VoteHeader