import React, { Component } from 'react'
import { FlatList, View, InteractionManager,RefreshControl,Text } from 'react-native'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles, { styleColor } from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { Container, ArticleContainer, ArticleMini, ReplySimple, ReplyMini } from '../../../components/reply'
import { ListEmpty, ListFooter } from '../../../components/list'
import { commentToReply, commentToReplyMini, commentToArticle } from './util'

class MyCommentList extends Component {
    componentDidMount() {
        this.props.getCommentListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getCommentList())
    }

    render() {
        const { myCommentListReducer,loginReducer } = this.props
        console.log('myCommentListReducer', myCommentListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={myCommentListReducer.data.commentList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <View>
                            <Container style={{ backgroundColor: '#fff' }}>
                                <ReplySimple data={commentToReply(item)} />
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
                        refreshing={myCommentListReducer.getCommentList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getCommentListWaiting()
                            this.props.getCommentList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (myCommentListReducer.getCommentList.isResultStatus == 2 && !myCommentListReducer.data.isCompleted) {
                        this.props.getCommentListMore()
                    }
                }}
                ListEmptyComponent={myCommentListReducer.getCommentList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={myCommentListReducer.getCommentListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myCommentListReducer: state.myCommentListReducer,
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentList: () => {
        dispatch(reduxActions.myCommentList.getCommentList())
    },
    getCommentListWaiting: () => {
        dispatch(reduxActions.myCommentList.getCommentListWaiting())
    },
    getCommentListMore: () => {
        dispatch(reduxActions.myCommentList.getCommentListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCommentList)