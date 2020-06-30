import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, InteractionManager, Image } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item

class PersonCenter extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserInfoWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getUserInfo()
        })
    }

    render() {
        console.log('this.props', this.props)
        const { navigation, personCenterReducer: { data: { userInfo } }, loginReducer: { data: { user } } } = this.props
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
                                <Image source={{ uri: userInfo.avatar ? `${userInfo.avatar}` : 'personalicon' }}
                                    style={{ height: 60, width: 60, borderRadius: 30 }} />

                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', marginRight: 16 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 21 }}>{userInfo.nick_name ? `${userInfo.nick_name}` : ''}</Text>
                                    {user.type == 1 && <Text>会员</Text>}
                                    {user.type == 2 && <Text>vip</Text>}
                                </View>
                                <Text style={{ color: '#777' }}>{userInfo.intro ? `${userInfo.intro}` : ''}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                    <List>
                        <Item arrow="horizontal"
                            onPress={() => {
                                navigation.navigate('ArticleList')
                            }}
                            onLongPress={() => {
                                navigation.navigate('ArticleList')
                            }}
                            thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                            我的文章</Item>
                    </List>
                    <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                    <List>
                        <Item arrow="horizontal"
                            onPress={() => {
                                this.props.getFollowListWaiting()
                                navigation.navigate('FollowList')
                                InteractionManager.runAfterInteractions(this.props.getFollowList)
                            }}
                            onLongPress={() => {
                                this.props.getFollowListWaiting()
                                navigation.navigate('FollowList')
                                InteractionManager.runAfterInteractions(this.props.getFollowList)
                            }}
                            thumb={<Icon name="heart" style={{ marginRight: 15 }} />} >
                            我的关注</Item>
                        <Item arrow="horizontal"
                            onPress={() => {
                                this.props.getFansListWaiting()
                                navigation.navigate('FansList')
                                InteractionManager.runAfterInteractions(this.props.getFansList)
                            }}
                            onLongPress={() => {
                                this.props.getFansListWaiting()
                                navigation.navigate('FansList')
                                InteractionManager.runAfterInteractions(this.props.getFansList)
                            }}
                            thumb={<Icon name="smile" style={{ marginRight: 15 }} />} >
                            我的粉丝</Item>
                    </List>
                    <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
                    <List>
                        <Item arrow="horizontal"
                            onPress={() => { navigation.navigate('CollectionList') }}
                            onLongPress={() => { navigation.navigate('CollectionList') }}
                            thumb={<Icon name="star" style={{ marginRight: 15 }} />} >
                            我的收藏</Item>
                        <Item arrow="horizontal"
                            onPress={() => { navigation.navigate('MyCommentList') }}
                            onLongPress={() => { navigation.navigate('MyCommentList') }}
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
}

const mapStateToProps = (state) => {
    return {
        personCenterReducer: state.personCenterReducer,
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFollowList: () => {
        dispatch(reduxActions.followList.getFollowList())
    },
    getFollowListWaiting: () => {
        dispatch(reduxActions.followList.getFollowListWaiting())
    },
    getFansList: () => {
        dispatch(reduxActions.fansList.getFansList())
    },
    getFansListWaiting: () => {
        dispatch(reduxActions.fansList.getFansListWaiting())
    },
    getUserInfo: () => {
        dispatch(reduxActions.personCenter.getUserInfo())
    },
    getUserInfoWaiting: () => {
        dispatch(reduxActions.personCenter.getUserInfoWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonCenter)