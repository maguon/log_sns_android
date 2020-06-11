import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import TabsStack from './TabsStack'
import BlackNavBar from './navBar/BlackNavBar'

import MyCommentList from '../views/person/myCommentList/MyCommentList' //我的评论
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
import PublishPictureBlog from '../views/publishPictureBlog/PublishPictureBlog' //微博照片详情
// import BlogVideo from '../views/blogVideo/BlogVideo' //微博视频详情
import CollectionAddr from '../views/collectionAddr/CollectionAddr' //收藏地址
import SeekHelp from '../views/seekHelp/SeekHelp' //发帮助
import Scan from '../views/scan/Scan' //扫一扫
import PublishBlog from '../views/publishBlog/PublishBlog' //写文章
import NavBar from './navBar/NavBar'
import NavPulishBlog from './navBar/NavPulishBlog'

import ArticleListOfFriend from '../views/articleListOfFriend/ArticleListOfFriend'
import TextArticleInfo from '../views/person/articleInfo/textArticleInfo/TextArticleInfo'
import VoteInfo from '../views/voteInfo/VoteInfo'
import PublishSeekHelp from '../views/publishSeekHelp/PublishSeekHelp'
import NavPulishSeekHelp from './navBar/NavPulishSeekHelp'
import NavPubishPictrueBlog from './navBar/NavPubishPictrueBlog'
import NavComment from './navBar/NavComment'

import LvOneCommentList from '../views/comment/lvOneCommentList/LvOneCommentList'
import LvTwoCommentList from '../views/comment/lvTwoCommentList/LvTwoCommentList' //评论列表
import Comment from '../views/comment/comment/Comment'
import Camera from '../views/camera/Camera'
import PictureViewer from '../views/pictureViewer/PictureViewer'
import About from '../views/person/about/About'

import ChangePassword from '../views/person/changePassword/ChangePassword'
import ChangePhone from '../views/person/changePhone/ChangePhone'
import PrivacySetting from '../views/person/privacySetting/PrivacySetting'
import NoticeSetting from '../views/person/noticeSetting/NoticeSetting'

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
    LvTwoCommentList: {
        screen: LvTwoCommentList,
        navigationOptions: {
            title: '评论列表'
        }
    },
    MyCommentList: {
        screen: MyCommentList,
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
    About: {
        screen: About,
        navigationOptions: {
            title: '关于我们'
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
            title: '关于我们'
        }
    },
    ChangePhone: {
        screen: ChangePhone,
        navigationOptions: {
            title: '关于我们'
        }
    },
    PrivacySetting: {
        screen: PrivacySetting,
        navigationOptions: {
            title: '关于我们'
        }
    },
    NoticeSetting: {
        screen: NoticeSetting,
        navigationOptions: {
            title: '关于我们'
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
    // BlogVideo: {
    //     screen: BlogVideo,
    //     navigationOptions: {
    //         title: '微博视频',
    //     }
    // },
    Scan: {
        screen: Scan,
        navigationOptions: {
            title: '扫一扫'
        }
    },
    PublishPictureBlog: {
        screen: PublishPictureBlog,
        navigationOptions: {
            title: '微博照片',
            header:({ scene, previous, navigation }) => {
                // console.log('props',props)
                return <NavPubishPictrueBlog scene={scene} previous={previous} navigation={navigation} />
            }
            
        }
    },
    PictureViewer: {
        screen: PictureViewer,
        navigationOptions: {
            title: '' ,
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return <BlackNavBar scene={scene} previous={previous} navigation={navigation} />
            } 
        }
    },
    PublishSeekHelp: {
        screen: PublishSeekHelp,
        navigationOptions: {
            title: '发布求助',
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return <NavPulishSeekHelp scene={scene} previous={previous} navigation={navigation} />
            }
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
    VoteInfo: {
        screen: VoteInfo,
        navigationOptions: {
            title: '投票详情'
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
    },
    LvOneCommentList: {
        screen: LvOneCommentList,
        navigationOptions: {
            title: '对方昵称'
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            header:null
        }
    },
    Comment: {
        screen: Comment,
        navigationOptions: {
            title: '评价',
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return <NavComment scene={scene} previous={previous} navigation={navigation} />
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
