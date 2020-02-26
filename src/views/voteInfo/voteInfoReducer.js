import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        voteInfo:{}
    },
    Vote: {
        isResultStatus: 0,
        failedMsg: ''
    }
}


export default handleActions({
    [reduxActionTypes.voteInfo.vote_success]: (state, action) => {
        const { payload: { voteInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                voteInfo
            },
            getVoteInfo: {
                ...state.getVoteInfo,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.voteInfo.vote_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getVoteInfo: {
                ...state.getVoteInfo,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.voteInfo.vote_waiting]: (state, action) => {
        return {
            ...state,
            getVoteInfo: {
                ...state.getVoteInfo,
                isResultStatus: 1
            },
        }
    },


    [reduxActionTypes.voteInfo.set_voteInfo]: (state, action) => {
        const { payload: { voteInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                voteInfo
            },
        }
    }
}, initialState)