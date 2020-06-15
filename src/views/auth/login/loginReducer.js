import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        user: {
            _id: '5df1fe3924f71f3e37d37292',
            _userDriveId: '5df1fe3924f71f3e37d37294',
            _userDetailId: '5df1fe3924f71f3e37d37293'
        }
    },
    login: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.login.login_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.login.login_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.login.login_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)