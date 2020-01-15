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
        return {
            ...state,
        }
    },
    [reduxActionTypes.myCommentList.get_myCommentList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.myCommentList.get_myCommentList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.myCommentList.get_myCommentListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.myCommentList.get_myCommentListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.myCommentList.get_myCommentListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)