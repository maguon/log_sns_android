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
import RequestContactList from '../views/message/requestContactList/RequestContactList' //申请联系方式
import Blog from '../views/blog/Blog' //微博详情
import BlogPicture from '../views/blogPicture/BlogPicture' //微博照片详情
import BlogVideo from '../views/blogVideo/BlogVideo' //微博视频详情
import CollectionAddr from '../views/collectionAddr/CollectionAddr' //收藏地址
import SeekHelp from '../views/seekHelp/SeekHelp' //发帮助
import Scan from '../views/scan/Scan' //扫一扫
import PublishBlog from '../views/publishBlog/PublishBlog' //写文章
import NavBar from './navBar/NavBar'
import NavPulishBlog from './navBar/NavPulishBlog'

import ArticleListOfFriend from '../views/articleListOfFriend/ArticleListOfFriend'
import TextArticleInfo from '../views/person/articleInfo/textArticleInfo/TextArticleInfo'

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
    RequestContactList: {
        screen: RequestContactList,
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
    },
    Blog: {
        screen: Blog,
        navigationOptions: {
            title: '微博'
        }
    },
    CollectionAddr: {
        screen: CollectionAddr,
        navigationOptions: {
            title: '收藏地址'
        }
    },
    BlogVideo: {
        screen: BlogVideo,
        navigationOptions: {
            title: '微博视频',
        }
    },
    Scan: {
        screen: Scan,
        navigationOptions: {
            title: '扫一扫'
        }
    },
    BlogPicture: {
        screen: BlogPicture,
        navigationOptions: {
            title: '微博照片'
        }
    },
    SeekHelp: {
        screen: SeekHelp,
        navigationOptions: {
            title: '发布帮助',
        }
    },
    ArticleListOfFriend: {
        screen: ArticleListOfFriend,
        navigationOptions: {
            title: '',
        }
    },
    TextArticleInfo: {
        screen: TextArticleInfo,
        navigationOptions: {
            title: '文章',
        }
    },
    PublishBlog: {
        screen: PublishBlog,
        navigationOptions: {
            title: '写文章',
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return <NavPulishBlog scene={scene} previous={previous} navigation={navigation} />
            }
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
