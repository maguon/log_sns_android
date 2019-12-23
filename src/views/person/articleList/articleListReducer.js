import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: []
    },
    getArticleList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    },
    getArticleListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    }
}

export default handleActions({
    [reduxActionTypes.articleList.get_articleList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.articleList.get_articleList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.articleList.get_articleList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.articleList.get_articleListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.articleList.get_articleListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.articleList.get_articleListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)