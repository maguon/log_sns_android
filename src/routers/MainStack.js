import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import TabsStack from './TabsStack'
import CommentList from '../views/person/commentList/CommentList' //我的评论
import FollowList from '../views/person/followList/FollowList' //我的关注
import ArticleList from '../views/person/articleList/ArticleList' //我的文章 
import FansList from '../views/person/fansList/FansList' //我的粉丝
import PersonInfo from '../views/person/personInfo/PersonInfo'
import VoteList from '../views/person/voteList/VoteList' //我参与的投票
import CollectionList from '../views/person/collectionList/CollectionList' //我的收藏
import CollectionLocationList from '../views/person/collectionLocationList/CollectionLocationList' //我收藏的位置
import Settings from '../views/person/settings/Settings' //设置
import CommentOnMeList from '../views/message/commentOnMeList/CommentOnMeList' //评价我
import FollowingList from '../views/message/followingList/FollowingList' //关注我
import LikeMeList from '../views/message/likeMeList/LikeMeList' //赞我
import RequestContact from '../views/message/requestContact/RequestContact' //申请联系方式
import NavBar from './navBar/NavBar'

export default createStackNavigator({
    TabsStack: {
        screen: TabsStack,
        navigationOptions: {
            header: null
        }
    },   
    CommentOnMeList: {
        screen: CommentOnMeList,
        navigationOptions: {
            title: '评价我'
        }
    },
    FollowingList: {
        screen: FollowingList,
        navigationOptions: {
            title: '关注我',
        }
    },
    LikeMeList: {
        screen: LikeMeList,
        navigationOptions: {
            title: '赞我'
        }
    },
    RequestContact: {
        screen: RequestContact,
        navigationOptions: {
            title: '申请联系方式'
        }
    },
    PersonInfo: {
        screen: PersonInfo,
        navigationOptions: {
            title: '个人资料'
        }
    },
    ArticleList: {
        screen: ArticleList,
        navigationOptions: {
            title: '我的文章'
        }
    },
    FollowList: {
        screen: FollowList,
        navigationOptions: {
            title: '我的关注'
        }
    },
    FansList: {
        screen: FansList,
        navigationOptions: {
            title: '我的粉丝'
        }
    },
    CollectionList: {
        screen: CollectionList,
        navigationOptions: {
            title: '我的收藏'
        }
    },
    CommentList: {
        screen: CommentList,
        navigationOptions: {
            title: '我的评论'
        }
    },
    VoteList: {
        screen: VoteList,
        navigationOptions: {
            title: '我参与的投票'
        }
    },
    CollectionLocationList: {
        screen: CollectionLocationList,
        navigationOptions: {
            title: '我收藏的位置',
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: '设置'
        }
    }
}, {
    transitionConfig: () => ({ // 跳转时，从右向左，滑入
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
    
    defaultNavigationOptions:{
        header: ({ scene, previous, navigation }) => {
            // console.log('props',props)
            return <NavBar scene={scene} previous={previous} navigation={navigation} />
        }
    }
})
