import * as home from './views/home/homeReduxActions'
import * as login from './views/auth/login/loginActions'
import * as init from './views/init/initReduxActions'
import * as retrievePassword from './views/auth/retrievePassword/retrievePasswordActions'
import * as userRegister from './views/auth/userRegister/userRegisterActions'
import * as followingList from './views/message/followingList/followingListActions'
import * as likeMeList from './views/message/likeMeList/likeMeListActions'
import * as commentOnMeList from './views/message/commentOnMeList/commentOnMeListActions'
import * as requestContactList from './views/message/requestContactList/requestContactListActions'


import * as articleList from './views/person/articleList/articleListActions'
import * as followList from './views/person/followList/followListActions'

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
    followList
}