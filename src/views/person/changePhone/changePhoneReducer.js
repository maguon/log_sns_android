import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    changePhone:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.changePhone.change_phone_success]: (state, action) => {
        return {
            ...state,
            changePhone:{
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.changePhone.change_phone_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            changePhone:{
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.changePhone.change_phone_waiting]: (state, action) => {
        return {
            ...state,
            changePhone:{
                isResultStatus: 1
            }
        }
    }
}, initialState)