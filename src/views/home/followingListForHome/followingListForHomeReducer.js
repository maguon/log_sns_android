import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false,
        followingUserList:[]
    },
    getFollowingListForHome: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getFollowingListForHomeMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getFollowingUserListForHome:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.followingListForHome.get_followingListForHome_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList,
                isCompleted
            },
            getFollowingListForHome: {
                ...initialState.getFollowingListForHome,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingListForHome_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFollowingListForHome: {
                ...state.getFollowingListForHome,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingListForHome_waiting]: (state, action) => {
        return {
            ...state,
            getFollowingListForHome: {
                ...state.getFollowingListForHome,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.followingListForHome.get_followingListForHomeMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getFollowingListForHomeMore: {
                ...state.getFollowingListForHomeMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingListForHomeMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFollowingListForHomeMore: {
                ...state.getFollowingListForHomeMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingListForHomeMore_waiting]: (state, action) => {
        return {
            ...state,
            getFollowingListForHomeMore: {
                ...state.getFollowingListForHomeMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.followingListForHome.get_followingUserListForHome_success]: (state, action) => {
        const { payload: { followingUserList } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                followingUserList
            },
            getFollowingUserListForHome: {
                ...state.getFollowingUserListForHome,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingUserListForHome_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFollowingUserListForHome: {
                ...state.getFollowingUserListForHome,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followingListForHome.get_followingUserListForHome_waiting]: (state, action) => {
        return {
            ...state,
            getFollowingUserListForHome: {
                ...state.getFollowingUserListForHome,
                isResultStatus: 1
            }
        }
    }    
}, initialState)