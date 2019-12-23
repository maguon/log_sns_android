import * as home from './views/home/homeReduxActionTypes'
import * as login from './views/auth/login/loginActionTypes'
import * as init from './views/init/initReduxActionTyps'
import * as retrievePassword from './views/auth/retrievePassword/retrievePasswordActionTypes'
import * as userRegister from './views/auth/userRegister/userRegisterActionTypes'

import * as likeMeList from './views/message/likeMeList/likeMeListActionTypes'
import * as followingList from './views/message/followingList/followingListActionTypes'
import * as commentOnMeList from './views/message/commentOnMeList/commentOnMeListActionTypes'
import * as requestContactList from './views/message/requestContactList/requestContactListActionTypes'

import * as articleList from './views/person/articleList/articleListActionTypes'
import * as followList from './views/person/followList/followActionTypes'


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


    articleList,
    followList
}