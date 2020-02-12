import * as home from './views/home/homeReduxActionTypes'
import * as login from './views/auth/login/loginActionTypes'
import * as init from './views/init/initReduxActionTyps'
import * as retrievePassword from './views/auth/retrievePassword/retrievePasswordActionTypes'
import * as userRegister from './views/auth/userRegister/userRegisterActionTypes'

import * as likeMeList from './views/message/likeMeList/likeMeListActionTypes'
import * as followingList from './views/message/followingList/followingListActionTypes'
import * as commentOnMeList from './views/message/commentOnMeList/commentOnMeListActionTypes'
import * as requestContactList from './views/message/requestContactList/requestContactListActionTypes'

import * as followList from './views/person/followList/followListActionTypes'
import * as fansList from './views/person/fansList/fansListActionTypes'
import * as commentList from './views/person/commentList/commentListActionTypes'
import * as collectionList from './views/person/collectionList/collectionListActionTypes'
import * as voteList from './views/person/voteList/voteListActionTypes'
import * as collectionLocationList from './views/person/collectionLocationList/collectionLocationListActionTypes'

import * as articleAllList from './views/person/articleList/articleAllList/articleAllListActionTypes'
import * as imageArticleList from './views/person/articleList/imageArticleList/imageArticleListActionTypes'
import * as seekHelpArticleList from './views/person/articleList/seekHelpArticleList/seekHelpArticleListActionTypes'
import * as textArticleList from './views/person/articleList/textArticleList/textArticleListActionTypes'
import * as videoArticleList from './views/person/articleList/videoArticleList/videoArticleListActionTypes'
import * as articleList from './views/person/articleList/articleListActionTypes'

import * as friendInfo from './views/articleListOfFriend/friendInfo/friendInfoActionTypes'
import * as articleListOfFriend from './views/articleListOfFriend/articleListOfFriendActionTypes'

import * as followingListForHome from './views/home/followingListForHome/followingListForHomeActionTypes'
import * as hotListForHome from './views/home/hotListForHome/hotListForHomeActionTypes'
import * as nearbyListForHome from './views/home/nearbyListForHome/nearbyListForHomeActionTypes'

import * as textArticleInfo from './views/person/articleInfo/textArticleInfo/textArticleInfoActionTypes'

import * as myCommentList from './views/person/myCommentList/myCommentListActionTypes'
import * as publishBlog from './views/publishBlog/publishBlogActionTypes'

import * as newestArticleListForCommunity from './views/community/newest/newestArticleListForCommunityActionTypes'
import * as seekHelpListForCommunity from './views/community/seekHelp/seekHelpListForCommunityActionTypes'
import * as videoArticleListForCommunity from './views/community/video/videoArticleListForCommunityActionTypes'

export default {
    home,
    login,
    retrievePassword,
    init,
    userRegister,

    likeMeList,
    followingList,
    commentOnMeList,
    requestContactList,

    articleAllList,
    imageArticleList,
    seekHelpArticleList,
    textArticleList,
    videoArticleList,
    articleList,

    followList,
    fansList,
    commentList,
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
    videoArticleListForCommunity
}