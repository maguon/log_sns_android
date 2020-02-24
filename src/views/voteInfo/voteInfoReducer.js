import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        voteInfo:{}
    },
    getVoteInfo: {
        isResultStatus: 0,
        failedMsg: ''
    }
}


export default handleActions({
    [reduxActionTypes.voteInfo.get_voteInfo_success]: (state, action) => {
        return {
            ...state,
            getVoteInfo: {
                ...state.getVoteInfo,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.voteInfo.get_voteInfo_failed]: (state, action) => {
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
    [reduxActionTypes.voteInfo.get_voteInfo_waiting]: (state, action) => {
        return {
            ...state,
            getVoteInfo: {
                ...state.getVoteInfo,
                isResultStatus: 1
            },
        }
    }
}, initialState)