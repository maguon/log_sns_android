import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        followingList:[]
    },
    getFollowingList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    },
    getFollowingListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.followingList.get_followingList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followingList.get_followingList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followingList.get_followingList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.followingList.get_followingListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followingList.get_followingListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followingList.get_followingListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)