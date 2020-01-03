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

const FansList = props => {
    const { fansListReducer } = props
    return (
        <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={fansListReducer.data.fansList}
            renderItem={params => {
                const { item } = params
                return (
                    <Item
                        thumb={
                            <Image source={{ uri: 'personalicon' }}
                                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15, borderWidth: 0.5, borderColor: '#ddd' }} />
                        }
                        extra={item.type == 1
                            ? <Button size='small' type='ghost' onPress={() => props.removeFollowFans({ followUserId: item._userId })}>取消关注</Button>
                            : <Button size='small' type='primary' onPress={() => props.followFans({ followUserId: item._userId })}>关注</Button>}
                    >
                        {item.attention_user_detail_info[0].nick_name ? `${item.attention_user_detail_info[0].nick_name}` : `${item.attention_user_login_info[0].phone}`}
                        <Brief>{item.created_at ? `${moment(item.created_at).format('YYYY-MM-DD')}` : ''}</Brief>
                    </Item>
                )
            }}
            refreshControl={
                <RefreshControl
                    colors={[styleColor]}
                    refreshing={fansListReducer.getFansList.isResultStatus == 1}
                    onRefresh={() => {
                        props.getFansListWaiting()
                        props.getFansList()
                    }}
                />
            }
            onEndReachedThreshold={0.2}
            onEndReached={() => {
                if (fansListReducer.getFansList.isResultStatus == 2 && !fansListReducer.data.isCompleted) {
                    props.getFansListMore()
                }
            }}
            ListEmptyComponent={fansListReducer.getFansList.isResultStatus != 1 && <ListEmpty title='暂无关注' />}
            ListFooterComponent={fansListReducer.getFansListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        fansListReducer: state.fansListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFansList: () => {
        dispatch(reduxActions.fansList.getFansList())
    },
    getFansListWaiting: () => {
        dispatch(reduxActions.fansList.getFansListWaiting())
    },
    getFansListMore: () => {
        dispatch(reduxActions.fansList.getFansListMore())
    },
    followFans: reqParams => {
        dispatch(reduxActions.fansList.followFans(reqParams))
    },
    removeFollowFans: reqParams => {
        dispatch(reduxActions.fansList.removeFollowFans(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FansList)