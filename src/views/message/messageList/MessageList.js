import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { WhiteSpace, Icon, List } from '@ant-design/react-native'

const Item = List.Item
const Brief = Item.Brief

const MessageList = props => {
    const { navigation } = props
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 15, backgroundColor: '#fff', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#777' }}>
                <Text style={globalStyles.xlText}>消息</Text>
            </View>
            <ScrollView style={globalStyles.container}>
                <List>
                    <Item arrow="horizontal"
                        extra={
                            <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 10 }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 10 }}>1</Text>
                            </View>
                        }
                        onPress={() => { navigation.navigate('FollowingList') }}
                        onLongPress={() => { navigation.navigate('FollowingList') }}
                        thumb={<Icon name="star" style={{ marginRight: 15 }} />} >
                        关注我</Item>
                    <Item arrow="horizontal"
                        extra={
                            <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 10 }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 10 }}>1</Text>
                            </View>
                        }
                        onPress={() => { navigation.navigate('CommentOnMeList') }}
                        onLongPress={() => { navigation.navigate('CommentOnMeList') }}
                        thumb={<Icon name="edit" style={{ marginRight: 15 }} />} >
                        评价我</Item>
                    <Item arrow="horizontal"
                        extra={
                            <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 10 }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 10 }}>200</Text>
                            </View>
                        }
                        onPress={() => { navigation.navigate('LikeMeList') }}
                        onLongPress={() => { navigation.navigate('LikeMeList') }}
                        thumb={<Icon name="like" style={{ marginRight: 15 }} />} >
                        赞我</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        extra={
                            <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 10 }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 10 }}>1</Text>
                            </View>
                        }
                        onPress={() => { navigation.navigate('RequestContactList') }}
                        onLongPress={() => { navigation.navigate('RequestContactList') }}
                        thumb={<Icon name="phone" style={{ marginRight: 15 }} />} >
                        申请联系方式</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item
                        multipleLine
                        thumb={
                            <View>
                                <Icon name="notification" style={{ marginRight: 15 }} />
                            </View>
                        }>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>系统消息</Text>
                            <Text style={{ color: '#777' }}>2016-05-06 13:20:13</Text>
                        </View>
                        <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
                    </Item>
                    <Item
                        multipleLine
                        thumb={
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="notification" style={{ marginRight: 15 }} />
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'red', position: 'absolute', top: 0, right: 15 }} />
                            </View>
                        }>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>系统消息</Text>
                            <Text style={{ color: '#777' }}>2016-05-06 13:20:13</Text>
                        </View>
                        <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
                    </Item>
                </List>
            </ScrollView>
        </View>
    )
}

export default MessageList