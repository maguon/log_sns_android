import React from 'react'
import { View, Text } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Button } from '@ant-design/react-native'

const ReplyHeader = props => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                    <View style={{ margin: 10 }}>
                        <View style={{ backgroundColor: '#000', width: 40, height: 40 }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>昵称</Text>
                        <Text style={{ color: '#777' }}>2019-6-25</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
                    <Button type="ghost" size='small' onPress={() => { }}>回复</Button>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                <Text style={{ color: '#777' }}>赞了你的评论</Text>
            </View>
        </View>
    )
}

export default ReplyHeader