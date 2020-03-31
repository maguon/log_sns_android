import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    createComment: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.comment.create_comment_success]: (state, action) => {
        return {
            ...state,
            createComment: {
                ...state.createComment,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.comment.create_comment_waiting]: (state, action) => {
        return {
            ...state,
            createComment: {
                ...state.createComment,
                isResultStatus: 1
            }
        }
    },
    [reduxActionTypes.comment.create_comment_failed]: (state, action) => {
        return {
            ...state,
            createComment: {
                ...state.createComment,
                isResultStatus: 3
            }
        }
    },
},initialState)