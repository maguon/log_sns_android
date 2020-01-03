import React, { Component } from 'react'
import { FlatList, RefreshControl, View, InteractionManager } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
class ArticleAllList extends Component {

    componentDidMount() {
        console.log('ArticleAllListcomponentDidMount')
        this.props.getArticleListWaiting()
        InteractionManager.runAfterInteractions(this.props.getArticleList)
    }

    render() {
        const { articleListReducer } = this.props
        // console.log('articleListReducer', articleListReducer)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={articleListReducer.data.articleList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header />
                                <CardContent />
                                <Map />
                                <Footer />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={articleListReducer.getArticleList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getArticleListWaiting()
                            this.props.getArticleList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (articleListReducer.getArticleList.isResultStatus == 2 && !articleListReducer.data.isCompleted) {
                        this.props.getArticleListMore()
                    }
                }}
                ListEmptyComponent={articleListReducer.getArticleList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={articleListReducer.getArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
            // <ScrollView style={{ flex: 1 }}>
            //     <WhiteSpace size='md' />
            //     <WingBlank size='md'>
            //         <Card>
            //             <Header />
            //             <CardContent />
            //             <Map />
            //             <Footer />
            //         </Card>
            //         <WhiteSpace size='md' />
            //     </WingBlank>
            //     <WingBlank size='md'>
            //         <Card>
            //             <Header />
            //             <CardContent />
            //             <Image />
            //             <Footer />
            //         </Card>
            //         <WhiteSpace size='md' />
            //     </WingBlank>
            //     <WingBlank size='md'>
            //         <Card>
            //             <Header />
            //             <CardContent />
            //             <Video />
            //             <Footer />
            //         </Card>
            //         <WhiteSpace size='md' />
            //     </WingBlank>
            // </ScrollView>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        articleListReducer: state.articleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleList: () => {
        dispatch(reduxActions.articleList.getArticleList())
    },
    getArticleListWaiting: () => {
        dispatch(reduxActions.articleList.getArticleListWaiting())
    },
    getArticleListMore: () => {
        dispatch(reduxActions.articleList.getArticleListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAllList)