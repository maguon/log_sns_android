import React, { Component } from 'react'
import { View, Text, InteractionManager, FlatList } from 'react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

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
        const { commentListReducer } = this.props
        return (
            <WingBlank size='md'>
                <WhiteSpace size='md' />

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 40, height: 40, backgroundColor: '#000', marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View>
                                <Text>昵称昵称</Text>
                                <Text>2019-06-30 11:30</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="like" style={{ marginRight: 10 }} />
                                <Text>10466</Text>
                            </View>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, paddingBottom: 10 }}>
                            <Text>回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容</Text>
                        </View>
                    </View>
                </View>
                <WhiteSpace size='md' />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 40, height: 40, backgroundColor: '#000', marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View>
                                <Text>昵称昵称</Text>
                                <Text>2019-06-30 11:30</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="like" style={{ marginRight: 10 }} />
                                <Text>10466</Text>
                            </View>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, paddingBottom: 10 }}>
                            <Text>回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容</Text>
                        </View>
                    </View>
                </View>
                <WhiteSpace size='md' />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 40, height: 40, backgroundColor: '#000', marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <View>
                                <Text>昵称昵称</Text>
                                <Text>2019-06-30 11:30</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="like" style={{ marginRight: 10 }} />
                                <Text>10466</Text>
                            </View>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, paddingBottom: 10 }}>
                            <Text>回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容</Text>
                        </View>
                    </View>
                </View>

            </WingBlank>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)