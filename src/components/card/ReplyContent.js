import React from 'react'
import { View, Text } from 'react-native'

const ReplyContent = props => {
    return (
        <View style={{ backgroundColor: '#f1f1f1', margin: 10, borderWidth: 0.5, borderColor: '#ddd' }}>
            <Text numberOfLines={1} style={{ margin: 10 }}>我 回复 昵称：评论评论</Text>
            <View style={{ flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#ddd' }}>
                <View style={{ height: 48, width: 48, backgroundColor: '#000' }} />
                <View style={{ marginLeft: 10, flex: 1, justifyContent: 'center' }}>
                    <Text>昵称</Text>
                    <Text ellipsizeMode="tail" numberOfLines={1} >文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</Text>
                </View>
            </View>
        </View>
    )
}

export default ReplyContent 