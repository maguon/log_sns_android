import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        commentList: [],
        isCompleted: false
    },
    getCommentList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCommentListMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    likeComment: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.commentList.get_commentList_success]: (state, action) => {
        const { payload: { commentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentList,
                isCompleted
            },
            getCommentList: {
                ...state.getCommentList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.commentList.get_commentList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getCommentList: {
                ...state.getCommentList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.commentList.get_commentList_waiting]: (state, action) => {
        return {
            ...state,
            getCommentList: {
                ...state.getCommentList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.commentList.get_commentListMore_success]: (state, action) => {
        const { payload: { commentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentList: [...state.data.commentList, ...commentList],
                isCompleted
            },
            getCommentListMore: {
                ...state.getCommentListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.commentList.get_commentListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getCommentListMore: {
                ...state.getCommentListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.commentList.get_commentListMore_waiting]: (state, action) => {
        return {
            ...state,
            getCommentListMore: {
                ...state.getCommentListMore,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.commentList.like_commentForCommentList_success]: (state, action) => {
        const { payload: { commentInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentList: state.data.commentList.map(item => {
                    if (item._id != commentInfo._id) {
                        return item
                    } else {
                        return commentInfo
                    }
                })
            },
            likeComment: {
                ...state.likeComment,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.commentList.like_commentForCommentList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            likeComment: {
                ...state.likeComment,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.commentList.like_commentForCommentList_waiting]: (state, action) => {
        return {
            ...state,
            likeComment: {
                ...state.likeComment,
                isResultStatus: 1
            }
        }
    }
}, initialState)