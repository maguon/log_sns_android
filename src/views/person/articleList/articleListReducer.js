import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    delArticle: {
        isResultStatus: 0,
        failedMsg: ''
    },
    likeArticle: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.articleList.del_articleForMyself_success]: (state, action) => {
        return {
            ...initialState,
            delArticle: {
                ...initialState.delArticle,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleList.del_articleForMyself_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            delArticle: {
                ...state.delArticle,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleList.del_articleForMyself_waiting]: (state, action) => {
        return {
            ...state,
            delArticle: {
                ...state.delArticle,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.articleList.like_articleForMyself_success]: (state, action) => {
        return {
            ...state,
            likeArticle: {
                ...state.likeArticle,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleList.like_articleForMyself_failed]: (state, action) => {
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
    [reduxActionTypes.articleList.like_articleForMyself_waiting]: (state, action) => {
        return {
            ...state,
            likeArticle: {
                ...state.likeArticle,
                isResultStatus: 1
            }
        }
    }
}, initialState)