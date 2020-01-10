import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getArticleListOfFriend: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getArticleListOfFriendMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    likeArticle: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.articleListOfFriend.get_articleListOfFriend_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList,
                isCompleted
            },
            getArticleListOfFriend: {
                ...state.getArticleListOfFriend,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.get_articleListOfFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getArticleListOfFriend: {
                ...state.getArticleListOfFriend,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.get_articleListOfFriend_waiting]: (state, action) => {
        return {
            ...state,
            getArticleListOfFriend: {
                ...state.getArticleListOfFriend,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getArticleListOfFriendMore: {
                ...state.getArticleListOfFriendMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getArticleListOfFriendMore: {
                ...state.getArticleListOfFriendMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_waiting]: (state, action) => {
        return {
            ...state,
            getArticleListOfFriendMore: {
                ...state.getArticleListOfFriendMore,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.articleListOfFriend.like_articleForFriend_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            likeArticle: {
                ...state.likeArticle,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.like_articleForFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            likeArticle: {
                ...state.likeArticle,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleListOfFriend.like_articleForFriend_waiting]: (state, action) => {
        return {
            ...state,
            likeArticle: {
                ...state.likeArticle,
                isResultStatus: 1
            }
        }
    }
}, initialState)