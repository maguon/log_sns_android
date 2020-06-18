import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        userInfo:{}
    },
    getUserInfo:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.personCenter.get_userInfo_success]: (state, action) => {
        const { payload: { userInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                userInfo
            },
            getUserInfo: {
                ...state.getUserInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.personCenter.get_userInfo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getUserInfo: {
                ...state.getUserInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.personCenter.get_userInfo_waiting]: (state, action) => {
        return {
            ...state,
            getUserInfo: {
                ...state.getUserInfo,
                isResultStatus: 1
            }
        }
    }
}, initialState)