import React, { Component } from 'react'
import { FlatList, RefreshControl, View, InteractionManager } from 'react-native'
import { Card, Content as CardContent, FooterForDel, Header, Video, Image, Map } from '../../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
class TextArticleList extends Component {

    componentDidMount() {
        this.props.getTextArticleListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getTextArticleList({ type: 1, carrier: 1 }))
    }

    componentWillUnmount() {
        this.props.rmTextArticleList()
    }

    render() {
        const { textArticleListReducer } = this.props
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={textArticleListReducer.data.textArticleList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header
                                 params={{
                                    nick: item.user_detail_info[0].nick_name,
                                    date: item.created_at,
                                    address: item.addressName,
                                    avatar: item.user_detail_info[0].avatar
                                }} 
                                />
                                <CardContent  params={{ content: item.info }} />
                                <FooterForDel
                                    msgCount={item.commentsNum}
                                    likeCount={item.agreeNum}
                                    delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                                    msgOnPress={() => { console.log('msgOnPress') }}
                                    likeOnPress={() => { this.props.likeArticle({ messageId: item._id }) }} />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={textArticleListReducer.getTextArticleList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getTextArticleListWaiting()
                            this.props.getTextArticleList({ type: 1, carrier: 1 })
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (textArticleListReducer.getTextArticleList.isResultStatus == 2 && !textArticleListReducer.data.isCompleted) {
                        this.props.getTextArticleListMore({ type: 1, carrier: 1 })
                    }
                }}
                ListEmptyComponent={textArticleListReducer.getTextArticleList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={textArticleListReducer.getTextArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        textArticleListReducer: state.textArticleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getTextArticleList: reqParams => {
        dispatch(reduxActions.textArticleList.getTextArticleList(reqParams))
    },
    getTextArticleListWaiting: () => {
        dispatch(reduxActions.textArticleList.getTextArticleListWaiting())
    },
    getTextArticleListMore: reqParams => {
        dispatch(reduxActions.textArticleList.getTextArticleListMore(reqParams))
    },
    delArticle: reqParams => {
        dispatch(reduxActions.articleList.delArticle(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleList.likeArticle(reqParams))
    },
    rmTextArticleList: () => {
        dispatch(reduxActions.textArticleList.rmTextArticleList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextArticleList)