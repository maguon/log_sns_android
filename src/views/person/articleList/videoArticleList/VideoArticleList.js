import React, { Component } from 'react'
import { FlatList, RefreshControl, View, InteractionManager } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video } from '../../../../components/card'
import { WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
class VideoArticleList extends Component {
    componentDidMount() {
        // console.log('VideoArticleListcomponentDidMount')
        this.props.getVideoArticleListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getVideoArticleList({ type: 1, carrier: 3 }))
    }

    componentWillUnmount(){
        //console.log('ArticleAllListcomponentWillUnmount')
        this.props.rmVideoArticleList()
    }

    render() {
        const { videoArticleListReducer } = this.props
        // console.log('articleListReducer', articleListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={videoArticleListReducer.data.videoArticleList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header />
                                <CardContent />
                                <Video />
                                <Footer />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={videoArticleListReducer.getVideoArticleList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getVideoArticleListWaiting()
                            this.props.getVideoArticleList({ type: 1, carrier: 3 })
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (videoArticleListReducer.getVideoArticleList.isResultStatus == 2 && !videoArticleListReducer.data.isCompleted) {
                        this.props.getVideoArticleListMore({ type: 1, carrier: 3 })
                    }
                }}
                ListEmptyComponent={videoArticleListReducer.getVideoArticleList.isResultStatus != 1 && <ListEmpty title='暂无视频文章' />}
                ListFooterComponent={videoArticleListReducer.getVideoArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videoArticleListReducer: state.videoArticleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVideoArticleList: reqParams => {
        dispatch(reduxActions.videoArticleList.getVideoArticleList(reqParams))
    },
    getVideoArticleListWaiting: () => {
        dispatch(reduxActions.videoArticleList.getVideoArticleListWaiting())
    },
    getVideoArticleListMore: reqParams => {
        dispatch(reduxActions.videoArticleList.getVideoArticleListMore(reqParams))
    },
    delArticle: reqParams => {
        dispatch(reduxActions.articleList.delArticle(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleList.likeArticle(reqParams))
    },
    rmVideoArticleList:()=>{
        dispatch(reduxActions.videoArticleList.rmVideoArticleList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoArticleList)
