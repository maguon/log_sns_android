import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        likeMeList: []
    },
    getLikeMeList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    },
    getLikeMeListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.likeMeList.get_likeMeList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.likeMeList.get_likeMeList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.likeMeList.get_likeMeList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.likeMeList.get_likeMeListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.likeMeList.get_likeMeListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.likeMeList.get_likeMeListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)