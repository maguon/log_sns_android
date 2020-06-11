import React, { Component } from 'react'
import { FlatList, RefreshControl, View, InteractionManager } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map, FooterForDel } from '../../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank, Toast } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
class ArticleAllList extends Component {

    componentDidMount() {
        this.props.getArticleAllListWaiting()
        InteractionManager.runAfterInteractions(this.props.getArticleAllList)
    }

    componentWillUnmount() {
        this.props.rmArticleAllList()
    }

    render() {
        const { articleAllListReducer } = this.props
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={articleAllListReducer.data.articleAllList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header params={{
                                    nick: item.user_detail_info[0].nick_name,
                                    date: item.created_at,
                                    address: item.addressName,
                                    avatar: item.user_detail_info[0].avatar
                                }} />
                                <CardContent params={{ content: item.info }} />
                                {item.type == 1 && item.carrier == 4 && <Map />}
                                {/* {item.type == 1 && item.carrier == 2 && <Image />}
                                {item.type == 1 && item.carrier == 3 && <Video />} */}
                                <FooterForDel
                                    msgCount={item.comment_num}
                                    likeCount={item.agree_num}
                                    delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                                    msgOnPress={() => { console.log('msgOnPress') }}
                                    likeOnPress={() => { this.props.likeArticle({ 
                                        msgId: item._id,
                                        msgUserId: item._user_id
                                     }) }} />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={articleAllListReducer.getArticleAllList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getArticleAllListWaiting()
                            this.props.getArticleAllList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (articleAllListReducer.getArticleAllList.isResultStatus == 2 && !articleAllListReducer.data.isCompleted) {
                        this.props.getArticleAllListMore()
                    }
                }}
                ListEmptyComponent={articleAllListReducer.getArticleAllList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={articleAllListReducer.getArticleAllListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        articleAllListReducer: state.articleAllListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleAllList: () => {
        dispatch(reduxActions.articleAllList.getArticleAllList())
    },
    getArticleAllListWaiting: () => {
        dispatch(reduxActions.articleAllList.getArticleAllListWaiting())
    },
    getArticleAllListMore: () => {
        dispatch(reduxActions.articleAllList.getArticleAllListMore())
    },
    delArticle: reqParams => {
        dispatch(reduxActions.articleList.delArticle(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleList.likeArticle(reqParams))
    },
    rmArticleAllList: () => {
        dispatch(reduxActions.articleAllList.rmArticleAllList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAllList)