import React, { Component } from 'react'
import { ScrollView, View, InteractionManager, FlatList, RefreshControl } from 'react-native'
import { Container, ArticleContainer, ArticleMini, Reply, ReplyMini } from '../../../components/reply'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles, { styleColor } from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { ListEmpty, ListFooter } from '../../../components/list'
import moment from 'moment'
import { commentToReply, commentToReplyMini, commentToArticle } from './util'

class CommentOnMeList extends Component {
    componentDidMount() {
        this.props.getCommentOnMeListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getCommentOnMeList())
    }

    render() {
        const { commentOnMeListReducer, loginReducer } = this.props
        console.log('commentOnMeListReducer', commentOnMeListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={commentOnMeListReducer.data.commentOnMeList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <View>
                            <Container style={{ backgroundColor: '#fff' }}>
                                <Reply data={commentToReply(item)} replyButtonIsVisible={item.level < 2} />
                                <ArticleContainer >
                                    {item.level > 1 && <ReplyMini data={commentToReplyMini(item, loginReducer.data.user._id)} />}
                                    {item.msg_info.length > 0 && item.msg_user_detail_info.length > 0 && <ArticleMini data={commentToArticle(item)} />}
                                </ArticleContainer>
                            </Container>
                            <WhiteSpace size='md' />
                        </View>

                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={commentOnMeListReducer.getCommentOnMeList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getCommentOnMeListWaiting()
                            this.props.getCommentOnMeList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (commentOnMeListReducer.getCommentOnMeList.isResultStatus == 2 && !commentOnMeListReducer.data.isCompleted) {
                        this.props.getCommentOnMeListMore()
                    }
                }}
                ListEmptyComponent={commentOnMeListReducer.getCommentOnMeList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={commentOnMeListReducer.getCommentOnMeListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        commentOnMeListReducer: state.commentOnMeListReducer,
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentOnMeList: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeList())
    },
    getCommentOnMeListMore: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeListMore())
    },
    getCommentOnMeListWaiting: () => {
        dispatch(reduxActions.commentOnMeList.getCommentOnMeListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentOnMeList)