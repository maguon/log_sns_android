import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        commentList: []
    },
    getCommentList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCommentListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.myCommentList.get_myCommentList_success]: (state, action) => {
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
    [reduxActionTypes.myCommentList.get_myCommentList_failed]: (state, action) => {
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
    [reduxActionTypes.myCommentList.get_myCommentList_waiting]: (state, action) => {
        return {
            ...state,
            getCommentList: {
                ...state.getCommentList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.myCommentList.get_myCommentListMore_success]: (state, action) => {
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
    [reduxActionTypes.myCommentList.get_myCommentListMore_failed]: (state, action) => {
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
    [reduxActionTypes.myCommentList.get_myCommentListMore_waiting]: (state, action) => {
        return {
            ...state,
            getCommentListMore: {
                ...state.getCommentListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)