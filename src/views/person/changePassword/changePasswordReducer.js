import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    changePassword:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.changePassword.change_password_success]: (state, action) => {
        return {
            ...state,
            changePassword:{
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.changePassword.change_password_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            changePassword:{
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.changePassword.change_password_waiting]: (state, action) => {
        return {
            ...state,
            changePassword:{
                isResultStatus: 1
            }
        }
    }
}, initialState)