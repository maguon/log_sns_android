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
import myCommentListReducer from './views/person/myCommentList/myCommentListReducer'
import publishBlogReducer from './views/publishBlog/publishBlogReducer'

import newestArticleListForCommunityReducer from './views/community/newest/newestArticleListForCommunityReducer'
import seekHelpListForCommunityReducer from './views/community/seekHelp/seekHelpListForCommunityReducer'
import videoArticleListForCommunityReducer from './views/community/video/videoArticleListForCommunityReducer'
import voteListForCommunityReducer from './views/community/vote/voteListForCommunityReducer'

import voteInfoReducer from './views/voteInfo/voteInfoReducer'
import publishSeekHelpReducer from './views/publishSeekHelp/publishSeekHelpReducer'

import LvOneCommentListReducer from './views/comment/lvOneCommentList/LvOneCommentListReducer'
import commentReducer from './views/comment/comment/commentReducer'
import lvTwoCommentListReducer from './views/comment/lvTwoCommentList/lvTwoCommentListReducer'

import cameraReducer from './views/camera/cameraReducer'
import currentLocationReducer from './components/inputs/currentlocation/currentLocationReducer'
import publishPictureBlogReducer from './views/publishPictureBlog/publishPictureBlogReducer'
import publishVideoBlogReducer from './views/publishVideoBlog/publishVideoBlogReducer'

import aboutReducer from './views/person/about/aboutReducer'

import retrievePasswordVCodeReducer from './views/auth/retrievePassword/retrievePasswordVCode/retrievePasswordVCodeReducer'
import userRegisterVCodeReducer from './views/auth/userRegister/userRegisterVCode/userRegisterVCodeReducer'
import personCenterReducer from './views/person/personCenter/personCenterReducer'


import changePhoneReducer from './views/person/changePhone/changePhoneReducer'
import changePasswordReducer from './views/person/changePassword/changePasswordReducer'

import changePhoneVCodeReducer from './views/person/changePhone/changePhoneVCode/changePhoneVCodeReducer'
import changePasswordVCodeReducer from './views/person/changePassword/changePasswordVCode/changePasswordVCodeReducer'


import noticeSettingReducer from './views/person/noticeSetting/noticeSettingReducer'
import privacySettingReducer from './views/person/privacySetting/privacySettingReducer'

export default combineReducers({
    form: formReducer,
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


    textArticleInfoReducer,
    myCommentListReducer,
    publishBlogReducer,


    newestArticleListForCommunityReducer,
    seekHelpListForCommunityReducer,
    videoArticleListForCommunityReducer,
    voteListForCommunityReducer,


    voteInfoReducer,
    publishSeekHelpReducer,

    LvOneCommentListReducer,
    lvTwoCommentListReducer,
    commentReducer,

    cameraReducer,

    currentLocationReducer,
    publishPictureBlogReducer,
    aboutReducer,

    retrievePasswordVCodeReducer,
    userRegisterVCodeReducer,

    personCenterReducer,

    changePhoneReducer,
    changePasswordReducer,

    changePhoneVCodeReducer,
    changePasswordVCodeReducer,

    noticeSettingReducer,
    privacySettingReducer,
    publishVideoBlogReducer
})