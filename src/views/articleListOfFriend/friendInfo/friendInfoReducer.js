import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        friendInfo: {}
    },
    getFriendInfo: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.friendInfo.get_friendInfo_success]: (state, action) => {
        const { payload: { friendInfo } } = action
        return {
            ...initialState,
            data: {
                ...initialState.data,
                friendInfo
            },
            getFriendInfo: {
                ...initialState.getFriendInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.get_friendInfo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFriendInfo: {
                ...initialState.getFriendInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.get_friendInfo_waiting]: (state, action) => {
        return {
            ...state,
            getFriendInfo: {
                ...initialState.getFriendInfo,
                isResultStatus: 1
            }
        }
    }
}, initialState)