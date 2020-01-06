import React, { Component } from 'react'
import { FlatList, RefreshControl, View ,InteractionManager} from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { styleColor } from '../../../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../../../components/list'
import moment from 'moment'

//我的文章
class ImageArticleList extends Component {

    componentDidMount() {
        this.props.getImageArticleListWaiting()
        InteractionManager.runAfterInteractions(()=>this.props.getImageArticleList({ type: 1, carrier: 2 }))
    }

    componentWillUnmount(){
        this.props.rmImageArticleList()
    }

    render() {
        const { imageArticleListReducer } = this.props
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={imageArticleListReducer.data.imageArticleList}
                renderItem={params => {
                    const { item, index } = params
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <Header />
                                <CardContent />
                                <Image />
                                <Footer />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={imageArticleListReducer.getImageArticleList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getImageArticleListWaiting()
                            this.props.getImageArticleList({ type: 1, carrier: 2 })
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (imageArticleListReducer.getImageArticleList.isResultStatus == 2 && !imageArticleListReducer.data.isCompleted) {
                        this.props.getImageArticleListMore({ type: 1, carrier: 2 })
                    }
                }}
                ListEmptyComponent={imageArticleListReducer.getImageArticleList.isResultStatus != 1 && <ListEmpty title='暂无图片文章' />}
                ListFooterComponent={imageArticleListReducer.getImageArticleListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        imageArticleListReducer: state.imageArticleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getImageArticleList: reqParams => {
        dispatch(reduxActions.imageArticleList.getImageArticleList(reqParams))
    },
    getImageArticleListWaiting: () => {
        dispatch(reduxActions.imageArticleList.getImageArticleListWaiting())
    },
    getImageArticleListMore: reqParams => {
        dispatch(reduxActions.imageArticleList.getImageArticleListMore(reqParams))
    },
    delArticle: reqParams => {
        dispatch(reduxActions.articleList.delArticle(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleList.likeArticle(reqParams))
    },
    rmImageArticleList:()=>{
        dispatch(reduxActions.imageArticleList.rmImageArticleList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageArticleList)
