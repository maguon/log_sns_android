import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        articleAllList: [],
        isCompleted: false
    },
    getArticleAllList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getArticleAllListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.articleAllList.get_articleAllList_success]: (state, action) => {
        const { payload: { articleAllList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                articleAllList,
                isCompleted
            },
            getArticleAllList: {
                ...initialState.getArticleAllList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleAllList.get_articleAllList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getArticleAllList: {
                ...state.getArticleAllList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleAllList.get_articleAllList_waiting]: (state, action) => {
        return {
            ...state,
            getArticleAllList: {
                ...state.getArticleAllList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.articleAllList.get_articleAllListMore_success]: (state, action) => {
        const { payload: { articleAllList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleAllList: [...state.data.articleAllList, ...articleAllList],
                isCompleted
            },
            getArticleAllListMore: {
                ...state.getArticleAllListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleAllList.get_articleAllListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getArticleAllListMore: {
                ...state.getArticleAllListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleAllList.get_articleAllListMore_waiting]: (state, action) => {
        return {
            ...state,
            getArticleAllListMore: {
                ...state.getArticleAllListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)