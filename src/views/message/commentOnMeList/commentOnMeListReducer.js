import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        commentOnMeList:[]
    },
    getCommentOnMeList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    },
    getCommentOnMeListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: '',
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)