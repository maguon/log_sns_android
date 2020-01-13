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
import * as commentList from './views/person/commentList/commentListActions'
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
    commentList,
    collectionList,
    voteList,
    collectionLocationList,


    friendInfo,
    articleListOfFriend,



    followingListForHome,
    hotListForHome,
    nearbyListForHome,


    textArticleInfo
}