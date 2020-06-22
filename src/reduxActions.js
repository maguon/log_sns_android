import * as home from './views/home/homeReduxActions'
import * as login from './views/auth/login/loginActions'
import * as init from './views/init/initReduxActions'
import * as retrievePassword from './views/auth/retrievePassword/retrievePasswordActions'
import * as userRegister from './views/auth/userRegister/userRegisterActions'
import * as followingList from './views/message/followingList/followingListActions'
import * as likeMeList from './views/message/likeMeList/likeMeListActions'
import * as commentOnMeList from './views/message/commentOnMeList/commentOnMeListActions'
import * as requestContactList from './views/message/requestContactList/requestContactListActions'

import * as followList from './views/person/followList/followListActions'
import * as fansList from './views/person/fansList/fansListActions'

import * as collectionList from './views/person/collectionList/collectionListActions'
import * as voteList from './views/person/voteList/voteListActions'
import * as collectionLocationList from './views/person/collectionLocationList/collectionLocationListActions'

import * as articleAllList from './views/person/articleList/articleAllList/articleAllListActions'
import * as imageArticleList from './views/person/articleList/imageArticleList/imageArticleListActions'
import * as seekHelpArticleList from './views/person/articleList/seekHelpArticleList/seekHelpArticleListActions'
import * as textArticleList from './views/person/articleList/textArticleList/textArticleListActions'
import * as videoArticleList from './views/person/articleList/videoArticleList/videoArticleListActions'
import * as articleList from './views/person/articleList/articleListActions'

import * as friendInfo from './views/articleListOfFriend/friendInfo/friendInfoActions'
import * as articleListOfFriend from './views/articleListOfFriend/articleListOfFriendActions'

import * as followingListForHome from './views/home/followingListForHome/followingListForHomeActions'
import * as hotListForHome from './views/home/hotListForHome/hotListForHomeActions'
import * as nearbyListForHome from './views/home/nearbyListForHome/nearbyListForHomeActions'


import * as textArticleInfo from './views/person/articleInfo/textArticleInfo/textArticleInfoActions'
import * as myCommentList from './views/person/myCommentList/myCommentListActions'
import * as publishBlog from './views/publishBlog/publishBlogActions'

import * as newestArticleListForCommunity from './views/community/newest/newestArticleListForCommunityActions'
import * as seekHelpListForCommunity from './views/community/seekHelp/seekHelpListForCommunityActions'
import * as videoArticleListForCommunity from './views/community/video/videoArticleListForCommunityActions'
import * as voteListForCommunity from './views/community/vote/voteListForCommunityActions'

import * as voteInfo from './views/voteInfo/voteInfoActions'
import * as publishSeekHelp from './views/publishSeekHelp/publishSeekHelpActions'

import * as lvOneCommentList from './views/comment/lvOneCommentList/LvOneCommentListActions'
import * as lvTwoCommentList from './views/comment/lvTwoCommentList/lvTwoCommentListActions'
import * as comment from './views/comment/comment/commentActions'

import * as camera from './views/camera/cameraActions'
import * as currentlocation from './components/inputs/currentlocation/currentLocationActions'
import * as publishPictureBlog from './views/publishPictureBlog/publishPictureBlogActions'
import * as about from './views/person/about/aboutActions'

import * as userRegisterVCode from './views/auth/userRegister/userRegisterVCode/userRegisterVCodeActions'
import * as retrievePasswordVCode from './views/auth/retrievePassword/retrievePasswordVCode/retrievePasswordVCodeActions'
import * as personCenter from './views/person/personCenter/personCenterActions'

import * as changePhone from './views/person/changePhone/changePhoneActions'
import * as changePassword from './views/person/changePassword/changePasswordActions'


import * as changePhoneVCode from './views/person/changePhone/changePhoneVCode/changePhoneVCodeActions'
import * as changePasswordVCode from './views/person/changePassword/changePasswordVCode/changePasswordVCodeActions'

export default {
    home,
    login,
    init,
    retrievePassword,
    userRegister,

    followingList,
    likeMeList,
    commentOnMeList,
    requestContactList,

    articleList,
    articleAllList,
    imageArticleList,
    seekHelpArticleList,
    textArticleList,
    videoArticleList,
    
    followList,
    fansList,
    
    collectionList,
    voteList,
    collectionLocationList,


    friendInfo,
    articleListOfFriend,



    followingListForHome,
    hotListForHome,
    nearbyListForHome,


    textArticleInfo,
    myCommentList,
    publishBlog,

    newestArticleListForCommunity,
    seekHelpListForCommunity,
    videoArticleListForCommunity,
    voteListForCommunity,


    voteInfo,
    publishSeekHelp,
    
    lvOneCommentList,
    lvTwoCommentList,
    comment,

    camera,

    currentlocation,
    publishPictureBlog,

    about,
    userRegisterVCode,
    retrievePasswordVCode,
    personCenter,


    changePhone,
    changePassword,

    changePhoneVCode,
    changePasswordVCode
    
}