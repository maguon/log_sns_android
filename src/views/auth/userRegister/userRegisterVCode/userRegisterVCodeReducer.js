import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        countDownTime: 60
    },
    countDown: {
        isResultStatus: 0
    },
    getVCode: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_success]: (state, action) => {
        return {
            ...state,
            getVCode: {
                ...state.getVCode,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getVCode: {
                ...state.getVCode,
                failedMsg,
                isResultStatus: 3
            }
        }
    },
    [reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_waiting]: (state, action) => {
        return {
            ...state,
            getVCode: {
                ...state.getVCode,
                isResultStatus: 1
            }
        }
    },




    [(reduxActionTypes.userRegisterVCode.countDownForUserRegister_start)]: (state, action) => {
        const { payload: { countDownTime } } = action
        return {
            ...state,
            data: {
                countDownTime
            },
            countDown: {
                ...state.countDown,
                isResultStatus: 1
            }
        }
    },
    
    [(reduxActionTypes.userRegisterVCode.countDownForUserRegister_end)]: (state, action) => {
        const { payload: { countDownTime } } = action
        return {
            ...state,
            data: {
                countDownTime
            },
            countDown: {
                ...state.countDown,
                isResultStatus: 0
            }
        }
    }

}, initialState)