import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        lvTwoCommentList: [],
        isCompleted: false
    },
    getLvTwoCommentList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getLvTwoCommentListMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    likeLvTwoComment: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_success]: (state, action) => {
        const { payload: { lvTwoCommentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                lvTwoCommentList,
                isCompleted
            },
            getLvTwoCommentList: {
                ...state.getLvTwoCommentList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getLvTwoCommentList: {
                ...state.getLvTwoCommentList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_waiting]: (state, action) => {
        return {
            ...state,
            getLvTwoCommentList: {
                ...state.getLvTwoCommentList,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_success]: (state, action) => {
        const { payload: { lvTwoCommentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                lvTwoCommentList: [...state.data.lvTwoCommentList, ...lvTwoCommentList],
                isCompleted
            },
            getLvTwoCommentListMore: {
                ...state.getLvTwoCommentListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getLvTwoCommentListMore: {
                ...state.getLvTwoCommentListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_waiting]: (state, action) => {
        return {
            ...state,
            getLvTwoCommentListMore: {
                ...state.getLvTwoCommentListMore,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.lvTwoCommentList.like_lvTwoComment_success]: (state, action) => {
        const { payload: { commentInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                lvTwoCommentList: state.data.lvTwoCommentList.map(item => {
                    if (item._id != commentInfo._id) {
                        return item
                    } else {
                        return commentInfo
                    }
                })
            },
            likeLvTwoComment: {
                ...state.likeLvTwoComment,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.like_lvTwoComment_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            likeLvTwoComment: {
                ...state.likeLvTwoComment,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvTwoCommentList.like_lvTwoComment_waiting]: (state, action) => {
        return {
            ...state,
            likeLvTwoComment: {
                ...state.likeLvTwoComment,
                isResultStatus: 1
            }
        }
    }
}, initialState)