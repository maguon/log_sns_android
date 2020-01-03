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

// import articleListReducer from './views/person/articleList/articleListReducer'
import followListReducer from './views/person/followList/followListReducer'
import fansListReducer from './views/person/fansList/fansListReducer'
import commentListReducer from './views/person/commentList/commentListReducer'
import collectionListReducer from './views/person/collectionList/collectionListReducer'
import voteListReducer from './views/person/voteList/voteListReducer'
import collectionLocationListReducer from './views/person/collectionLocationList/collectionLocationListReducer'


import articleAllListReducer from './views/person/articleList/articleAllList/articleAllListReducer'
import imageArticleListReducer from './views/person/articleList/imageArticleList/imageArticleListReducer'
import seekHelpArticleListReducer from './views/person/articleList/seekHelpArticleList/seekHelpArticleListReducer'
import textArticleListReducer from './views/person/articleList/textArticleList/textArticleListReducer'
import videoArticleListReducer from './views/person/articleList/videoArticleList/videoArticleListReducer'


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


    articleAllListReducer,
    imageArticleListReducer,
    seekHelpArticleListReducer,
    textArticleListReducer,
    videoArticleListReducer
})