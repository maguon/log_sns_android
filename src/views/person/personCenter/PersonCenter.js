import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'

const Item = List.Item

const PersonCenter = props => {
    const { navigation } = props
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 15, backgroundColor: '#fff', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#777' }}>
                <Text style={globalStyles.xlText}>我</Text>
            </View>
            <ScrollView style={globalStyles.container}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}
                    onPress={() => { navigation.navigate('PersonInfo') }} >
                    <View style={{ flexDirection: 'row', flex: 3, alignItems: 'center' }}>
                        <View style={{ margin: 16 }}>
                            <View style={{ backgroundColor: '#000', width: 60, height: 60, borderRadius: 30 }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginRight: 16 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 21 }}>昵称</Text>
                                <Text>会员</Text>
                            </View>
                            <Text style={{ color: '#777' }}>签名签名签名</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('ArticleList') }}
                        onLongPress={() => { navigation.navigate('ArticleList') }}
                        thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                        我的文章(128)</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('FollowList') }}
                        onLongPress={() => { navigation.navigate('FollowList') }}
                        thumb={<Icon name="heart" style={{ marginRight: 15 }} />} >
                        我的关注(128)</Item>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('FansList') }}
                        onLongPress={() => { navigation.navigate('FansList') }}
                        thumb={<Icon name="smile" style={{ marginRight: 15 }} />} >
                        我的粉丝(128)</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('CollectionList') }}
                        onLongPress={() => { navigation.navigate('CollectionList') }}
                        thumb={<Icon name="star" style={{ marginRight: 15 }} />} >
                        我的收藏(128)</Item>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('CommentList') }}
                        onLongPress={() => { navigation.navigate('CommentList') }}
                        thumb={<Icon name="edit" style={{ marginRight: 15 }} />} >
                        我的评价</Item>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('VoteList') }}
                        onLongPress={() => { navigation.navigate('VoteList') }}
                        thumb={<Icon name="tag" style={{ marginRight: 15 }} />} >
                        我参与的投票</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('CollectionLocationList') }}
                        onLongPress={() => { navigation.navigate('CollectionLocationList') }}
                        thumb={<Icon name="environment" style={{ marginRight: 15 }} />} >
                        我收藏的位置</Item>
                </List>
                <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                <List>
                    <Item arrow="horizontal"
                        onPress={() => { navigation.navigate('Settings') }}
                        onLongPress={() => { navigation.navigate('Settings') }}
                        thumb={<Icon name="setting" style={{ marginRight: 15 }} />} >
                        设置</Item>
                </List>
                <WhiteSpace size='xl' style={globalStyles.containerBackgroundColor} />
                <WingBlank size="lg">
                    <Button type="primary" onPress={() => { }}>退出当前账号</Button>
                </WingBlank>
                <WhiteSpace size='xl' style={globalStyles.containerBackgroundColor} />
            </ScrollView >
        </View>
    )
}

export default PersonCenter