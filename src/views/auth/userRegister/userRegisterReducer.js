import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    registerAccount: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.userRegister.register_account_success]: (state, action) => {
        return {
            ...state,
            registerAccount: {
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.userRegister.register_account_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            registerAccount: {
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.userRegister.register_account_waiting]: (state, action) => {
        return {
            ...state,
            registerAccount: {
                isResultStatus: 1,
                failedMsg: ''
            },
        }
    }

}, initialState)