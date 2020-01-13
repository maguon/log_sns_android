import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        commentList: [],
        isCompleted: false,
        articleInfo: {}
    },
    getComment: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCommentMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getTextArticleInfo: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_success]: (state, action) => {
        const { payload: { commentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentList,
                isCompleted
            },
            getComment: {
                ...state.getComment,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getComment: {
                ...state.getComment,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_waiting]: (state, action) => {
        return {
            ...state,
            getComment: {
                ...state.getComment,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_success]: (state, action) => {
        const { payload: { commentList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                commentList: [...state.data.commentList, ...commentList],
                isCompleted
            },
            getCommentMore: {
                ...state.getCommentMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getCommentMore: {
                ...state.getCommentMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_waiting]: (state, action) => {
        return {
            ...state,
            getCommentMore: {
                ...state.getCommentMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.textArticleInfo.get_textArticleInfo_success]: (state, action) => {
        const { payload: { articleInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                articleInfo
            },
            getTextArticleInfo: {
                ...state.getTextArticleInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_textArticleInfo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getTextArticleInfo: {
                ...state.getTextArticleInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.textArticleInfo.get_textArticleInfo_waiting]: (state, action) => {
        return {
            ...state,
            getTextArticleInfo: {
                ...state.getTextArticleInfo,
                isResultStatus: 1
            }
        }
    }
}, initialState)