import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        commentOnMeList: [],
        isCompleted: false
    },
    getCommentOnMeList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCommentOnMeListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_success]: (state, action) => {
        const { payload: { commentOnMeList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentOnMeList,
                isCompleted
            },
            getCommentOnMeList: {
                ...state.getCommentOnMeList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getCommentOnMeList: {
                ...state.getCommentOnMeList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeList_waiting]: (state, action) => {
        return {
            ...state,
            getCommentOnMeList: {
                ...state.getCommentOnMeList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_success]: (state, action) => {
        const { payload: { commentOnMeList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                commentOnMeList: [...state.data.commentOnMeList, ...commentOnMeList],
                isCompleted
            },
            getCommentOnMeListMore: {
                ...state.getCommentOnMeListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getCommentOnMeListMore: {
                ...state.getCommentOnMeListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.commentOnMeList.get_commentOnMeListMore_waiting]: (state, action) => {
        return {
            ...state,
            getCommentOnMeListMore: {
                ...state.getCommentOnMeListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)