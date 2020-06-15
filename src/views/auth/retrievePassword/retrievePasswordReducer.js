import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    retrievePassword:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.retrievePassword.retrieve_password_success]: (state, action) => {
        return {
            ...state,
            retrievePassword:{
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.retrievePassword.retrieve_password_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            retrievePassword:{
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.retrievePassword.retrieve_password_waiting]: (state, action) => {
        return {
            ...state,
            retrievePassword:{
                isResultStatus: 1
            }
        }
    }
}, initialState)