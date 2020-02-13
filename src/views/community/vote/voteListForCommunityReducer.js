import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        voteList: [],
        isCompleted: false
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

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.voteListForCommunity.get_voteListForCommunity_success]: (state, action) => {
        const { payload: { voteList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                voteList,
                isCompleted
            },
            getVoteList: {
                ...state.getVoteList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.voteListForCommunity.get_voteListForCommunity_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getVoteList: {
                ...state.getVoteList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.voteListForCommunity.get_voteListForCommunity_waiting]: (state, action) => {
        return {
            ...state,
            getVoteList: {
                ...state.getVoteList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_success]: (state, action) => {
        const { payload: { voteList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                voteList: [...state.data.voteList, ...voteList],
                isCompleted
            },
            getVoteListMore: {
                ...state.getVoteListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getVoteListMore: {
                ...state.getVoteListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_waiting]: (state, action) => {
        return {
            ...state,
            getVoteListMore: {
                ...state.getVoteListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)