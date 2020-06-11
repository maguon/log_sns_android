import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        aboutInfo:{}
    },
    getAbout:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.about.get_about_success]: (state, action) => {
        const { payload: { aboutInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                aboutInfo
            },
            getAbout: {
                ...state.getAbout,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.about.get_about_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getAbout: {
                ...state.getAbout,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.about.get_about_waiting]: (state, action) => {
        return {
            ...state,
            getNearbyListForHome: {
                ...state.getAbout,
                isResultStatus: 1
            }
        }
    }
}, initialState)