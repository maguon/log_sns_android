import React from 'react'
import { View, Text, ScrollView, Image, RefreshControl, FlatList, ToastAndroid } from 'react-native'
import { List, Button, ActivityIndicator } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { ListEmpty, ListFooter } from '../../../components/list'
import { styleColor } from '../../../GlobalStyles'
import moment from 'moment'

const Item = List.Item
const Brief = Item.Brief

const FollowList = props => {
    const { followListReducer, follow, removeFollow } = props
    return (
        <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={followListReducer.data.followList}
            renderItem={params => {
                const { item } = params
                return (
                    <Item
                        thumb={
                            <Image source={{ uri: 'personalicon' }}
                                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15, borderWidth: 0.5, borderColor: '#ddd' }} />
                        }
                        extra={item.follow_status == 1
                            ? <Button size='small' type='ghost' onPress={() => removeFollow({ followUserId: item._userById })}>取消关注</Button>
                            : <Button size='small' type='primary' onPress={() => follow({ followUserId: item._userById })}>关注</Button>}
                    >
                        {item.follow_user_detail_info[0].nick_name ? `${item.follow_user_detail_info[0].nick_name}` : `${item.follow_user_login_info[0].phone}`}
                        <Brief>{item.created_at ? `${moment(item.created_at).format('YYYY-MM-DD')}` : ''}</Brief>
                    </Item>
                )
            }}
            refreshControl={
                <RefreshControl
                    colors={[styleColor]}
                    refreshing={followListReducer.getFollowList.isResultStatus == 1}
                    onRefresh={() => {
                        props.getFollowListWaiting()
                        props.getFollowList()
                    }}
                />
            }
            onEndReachedThreshold={0.2}
            onEndReached={() => {
                if (followListReducer.getFollowList.isResultStatus == 2 && !followListReducer.data.isCompleted) {
                    props.getFollowListMore()
                }
            }}
            ListEmptyComponent={followListReducer.getFollowList.isResultStatus != 1 && <ListEmpty title='暂无粉丝' />}
            ListFooterComponent={followListReducer.getFollowListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        followListReducer: state.followListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFollowList: () => {
        dispatch(reduxActions.followList.getFollowList())
    },
    getFollowListWaiting: () => {
        dispatch(reduxActions.followList.getFollowListWaiting())
    },
    getFollowListMore: () => {
        dispatch(reduxActions.followList.getFollowListMore())
    },
    follow: (reqParams) => {
        dispatch(reduxActions.followList.follow(reqParams))
    },
    removeFollow: reqParams => {
        dispatch(reduxActions.followList.removeFollow(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowList)