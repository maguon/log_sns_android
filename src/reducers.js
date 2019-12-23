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

import articleListReducer from './views/person/articleList/articleListReducer'


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


    articleListReducer
})