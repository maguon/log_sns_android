import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.articleList.get_articleList_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                articleList,
                isCompleted
            },
            getArticleList: {
                ...initialState.getArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleList.get_articleList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getArticleList: {
                ...state.getArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleList.get_articleList_waiting]: (state, action) => {
        return {
            ...state,
            getArticleList: {
                ...state.getArticleList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.articleList.get_articleListMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getArticleListMore: {
                ...state.getArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.articleList.get_articleListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getArticleListMore: {
                ...state.getArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.articleList.get_articleListMore_waiting]: (state, action) => {
        return {
            ...state,
            getArticleListMore: {
                ...state.getArticleListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)