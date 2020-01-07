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
class SeekHelpArticleList extends Component {

    componentDidMount() {
        this.props.getSeekHelpArticleListWaiting()
        InteractionManager.runAfterInteractions(() => this.props.getSeekHelpArticleList({ type: 2, carrier: 1 }))
    }

    componentWillUnmount(){
        this.props.rmSeekHelpArticleList()
    }

    render() {
        const { seekHelpArticleListReducer } = this.props
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={seekHelpArticleListReducer.data.seekHelpArticleList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header />
                                <CardContent />
                                <Footer />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={seekHelpArticleListReducer.getSeekHelpArticleList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getSeekHelpArticleListWaiting()
                            this.props.getSeekHelpArticleList({ type: 2, carrier: 1 })
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (seekHelpArticleListReducer.getSeekHelpArticleList.isResultStatus == 2 && !seekHelpArticleListReducer.data.isCompleted) {
                        this.props.getSeekHelpArticleListMore({ type: 2, carrier: 1 })
                    }
                }}
                ListEmptyComponent={seekHelpArticleListReducer.getSeekHelpArticleList.isResultStatus != 1 && <ListEmpty title='暂无求助' />}
                ListFooterComponent={seekHelpArticleListReducer.getSeekHelpArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        seekHelpArticleListReducer: state.seekHelpArticleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSeekHelpArticleList: reqParams => {
        dispatch(reduxActions.seekHelpArticleList.getSeekHelpArticleList(reqParams))
    },
    getSeekHelpArticleListWaiting: () => {
        dispatch(reduxActions.seekHelpArticleList.getSeekHelpArticleListWaiting())
    },
    getSeekHelpArticleListMore: reqParams => {
        dispatch(reduxActions.seekHelpArticleList.getSeekHelpArticleListMore(reqParams))
    },
    delArticle: reqParams => {
        dispatch(reduxActions.articleList.delArticle(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleList.likeArticle(reqParams))
    },
    rmSeekHelpArticleList:()=>{
        dispatch(reduxActions.seekHelpArticleList.rmSeekHelpArticleList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeekHelpArticleList)
