import React, { Component } from 'react'
import { View, Text, InteractionManager, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { styleColor } from '../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../components/list'
import moment from 'moment'

//我的评论
class CommentList extends Component {

    componentDidMount() {
        const { navigation } = this.props
        this.props.getCommentListWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getCommentList({ parentCommentId: navigation.state.params.parentCommentInfo._id })
        })
    }

    render() {
        const { commentListReducer, navigation } = this.props
        // console.log('commentListReducer', commentListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={commentListReducer.data.commentList}
                renderItem={params => {
                    const { item, index } = params

                    return (
                        <WingBlank size='md'>
                            <WhiteSpace size='md' />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 48, height: 48, borderRadius: 24, marginRight: 10 }} >
                                    <Image source={{ uri: item.user_detail_info[0] && item.user_detail_info[0].avatar ? `${item.user_detail_info[0].avatar}` : 'personalicon' }} style={{ width: 48, height: 48, borderRadius: 24 }} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <View>
                                            <Text>{item.user_detail_info[0] ? `${item.user_detail_info[0].nick_name}` : ''}</Text>
                                            <Text>{item.created_at ? `${moment(item.created_at).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.props.likeComment({
                                                    msgId: item._msg_id,
                                                    msgUserId: item._msg_user_id,
                                                    msgComId: item._id,
                                                    msgComUserId: item._user_id
                                                })
                                            }}
                                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <SimpleLineIcons name="like" style={{ marginRight: 10 }} />
                                            <Text>{item.agree_num ? `${item.agree_num}` : '0'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ borderBottomWidth: 0.5, paddingBottom: 10 }}>
                                        <Text>{item.comment ? `${item.comment}` : ''}</Text>
                                    </View>
                                </View>
                            </View>
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={commentListReducer.getCommentList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getCommentListWaiting()
                            this.props.getCommentList({ parentCommentId: navigation.state.params.parentCommentInfo._id })
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (commentListReducer.getCommentList.isResultStatus == 2 && !commentListReducer.data.isCompleted) {
                        this.props.getCommentListMore({ parentCommentId: navigation.state.params.parentCommentInfo._id })
                    }
                }}
                ListEmptyComponent={commentListReducer.getCommentList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={commentListReducer.getCommentListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        commentListReducer: state.commentListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentList: reqParams => {
        dispatch(reduxActions.commentList.getCommentList(reqParams))
    },
    getCommentListWaiting: () => {
        dispatch(reduxActions.commentList.getCommentListWaiting())
    },
    getCommentListMore: reqParams => {
        dispatch(reduxActions.commentList.getCommentListMore(reqParams))
    },
    likeComment: reqParams => {
        dispatch(reduxActions.commentList.likeComment(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)