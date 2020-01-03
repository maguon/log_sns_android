import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        voteList: []
    },
    getVoteList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getVoteListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.voteList.get_voteList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.voteList.get_voteList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.voteList.get_voteList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.voteList.get_voteListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.voteList.get_voteListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.voteList.get_voteListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)