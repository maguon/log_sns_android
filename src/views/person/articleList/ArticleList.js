import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Tabs } from '@ant-design/react-native'
import VideoArticleList from './VideoArticleList'
import ImageArticleList from './ImageArticleList'
import ArticleAllList from './ArticleAllList'
import TextArticleList from './TextArticleList'
import SeekHelpArticleList from './SeekHelpArticleList'
import reduxActions from '../../../reduxActions'

import { connect } from 'react-redux'

const DefaultTabBar = Tabs.DefaultTabBar

//我的文章
const ArticleList = props => {
    const tabs2 = [
        { title: '所有（30）' },
        { title: '文章（30）' },
        { title: '视频（30）' },
        { title: '图片（30）' },
        { title: '求助（30）' }
    ]
    return (
        <View style={{ flex: 1 }}>
            <Tabs
                onChange={(params, index) => {
                    console.log('params', params)
                    console.log('index', index)
                }}
                renderTabBar={params => <DefaultTabBar {...params} page={3.5} />}
                tabs={tabs2} tabBarPosition="top">
                <ArticleAllList />
                <TextArticleList />
                <VideoArticleList />
                <ImageArticleList />
                <SeekHelpArticleList />
            </Tabs>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        articleListReducer: state.articleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleListMore: () => {
        dispatch(reduxActions.articleList.getArticleListMore())
    },
    getArticleList: () => {
        dispatch(reduxActions.articleList.getArticleList())
    },
    getArticleListWaiting: () => {
        dispatch(reduxActions.articleList.getArticleListWaiting())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList)
