import React, { Component } from 'react'
import { View, Text, ScrollView, InteractionManager } from 'react-native'
import { Tabs, Portal, Toast, Provider } from '@ant-design/react-native'
import VideoArticleList from './videoArticleList/VideoArticleList'
import ImageArticleList from './imageArticleList/ImageArticleList'
import ArticleAllList from './articleAllList/ArticleAllList'
import TextArticleList from './textArticleList/TextArticleList'
import SeekHelpArticleList from './seekHelpArticleList/SeekHelpArticleList'
import reduxActions from '../../../reduxActions'

import { connect } from 'react-redux'

const DefaultTabBar = Tabs.DefaultTabBar

//我的文章
class ArticleList extends Component {
    render() {
        const tabs2 = [
            { title: '所有' },
            { title: '文章' },
            { title: '视频' },
            { title: '图片' },
            { title: '求助' }
        ]
        return (
            <View style={{ flex: 1 }}>
                <Tabs
                    destroyInactiveTab={true}
                    renderTabBar={params => <DefaultTabBar  {...params} animated={true} page={3.5} />}
                    tabs={tabs2} tabBarPosition="top">

                    <ArticleAllList />
                    <TextArticleList />
                    <VideoArticleList />
                    <ImageArticleList  />
                    <SeekHelpArticleList />
                </Tabs>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleListReducer: state.articleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleList: reqParams => {
        dispatch(reduxActions.articleList.getArticleList(reqParams))
    },
    getArticleListWaiting: () => {
        dispatch(reduxActions.articleList.getArticleListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
