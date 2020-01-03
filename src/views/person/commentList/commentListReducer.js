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
    [reduxActionTypes.commentList.get_commentList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentList.get_commentList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentList.get_commentList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.commentList.get_commentListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentList.get_commentListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentList.get_commentListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)