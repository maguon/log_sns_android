import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        user: {
            _id: '5df1fe3924f71f3e37d37292'
        }
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.login.get]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)