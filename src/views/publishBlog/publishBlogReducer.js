import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    createArticle: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.publishBlog.create_article_success]: (state, action) => {
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.publishBlog.create_article_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.publishBlog.create_article_waiting]: (state, action) => {
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 1
            },
        }
    }
}, initialState)