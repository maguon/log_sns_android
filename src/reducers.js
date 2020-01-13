import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from './views/home/homeReducer'
import initReducer from './views/init/initReducer'
import loginReducer from './views/auth/login/loginReducer'
import retrievePasswordReducer from './views/auth/retrievePassword/retrievePasswordReducer'
import userRegisterReducer from './views/auth/userRegister/userRegisterReducer'

import followingListReducer from './views/message/followingList/followingListReducer'
import likeMeListReducer from './views/message/likeMeList/likeMeListReducer'
import commentOnMeListReducer from './views/message/commentOnMeList/commentOnMeListReducer'
import requestContactListReducer from './views/message/requestContactList/requestContactListReducer'


import followListReducer from './views/person/followList/followListReducer'
import fansListReducer from './views/person/fansList/fansListReducer'
import commentListReducer from './views/person/commentList/commentListReducer'
import collectionListReducer from './views/person/collectionList/collectionListReducer'
import voteListReducer from './views/person/voteList/voteListReducer'
import collectionLocationListReducer from './views/person/collectionLocationList/collectionLocationListReducer'

import articleListReducer from './views/person/articleList/articleListReducer'
import articleAllListReducer from './views/person/articleList/articleAllList/articleAllListReducer'
import imageArticleListReducer from './views/person/articleList/imageArticleList/imageArticleListReducer'
import seekHelpArticleListReducer from './views/person/articleList/seekHelpArticleList/seekHelpArticleListReducer'
import textArticleListReducer from './views/person/articleList/textArticleList/textArticleListReducer'
import videoArticleListReducer from './views/person/articleList/videoArticleList/videoArticleListReducer'

import friendInfoReducer from './views/articleListOfFriend/friendInfo/friendInfoReducer'
import articleListOfFriendReducer from './views/articleListOfFriend/articleListOfFriendReducer'

import followingListForHomeReducer from './views/home/followingListForHome/followingListForHomeReducer'
import hotListForHomeReducer from './views/home/hotListForHome/hotListForHomeReducer'
import nearbyListForHomeReducer from './views/home/nearbyListForHome/nearbyListForHomeReducer'

import textArticleInfoReducer from './views/person/articleInfo/textArticleInfo/textArticleInfoReducer'


export default combineReducers({
    formReducer,
    homeReducer,
    initReducer,
    loginReducer,
    retrievePasswordReducer,
    userRegisterReducer,

    followingListReducer,
    likeMeListReducer,
    commentOnMeListReducer,
    requestContactListReducer,

    fansListReducer,
    followListReducer,
    commentListReducer,
    collectionListReducer,
    voteListReducer,
    collectionLocationListReducer,

    articleListReducer,
    articleAllListReducer,
    imageArticleListReducer,
    seekHelpArticleListReducer,
    textArticleListReducer,
    videoArticleListReducer,

    friendInfoReducer,
    articleListOfFriendReducer,

    followingListForHomeReducer,
    hotListForHomeReducer,
    nearbyListForHomeReducer,


    textArticleInfoReducer
})