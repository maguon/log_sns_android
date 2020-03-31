import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        lvOneCommentList: [],
        isCompleted: false
    },
    getLvOneCommentList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getLvOneCommentListMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    likeLvOneComment: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.lvOneCommentList.get_lvOneCommentList_success]: (state, action) => {
        const { payload: { lvOneCommentList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                lvOneCommentList,
                isCompleted
            },
            getLvOneCommentList: {
                ...state.getLvOneCommentList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.get_lvOneCommentList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getLvOneCommentList: {
                ...state.getLvOneCommentList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.get_lvOneCommentList_waiting]: (state, action) => {
        return {
            ...state,
            getLvOneCommentList: {
                ...state.getLvOneCommentList,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_success]: (state, action) => {
        const { payload: { lvOneCommentList, isCompleted } } = action
        console.log('lvOneCommentList', lvOneCommentList)
        return {
            ...state,
            data: {
                ...state.data,
                lvOneCommentList: [...state.data.lvOneCommentList, ...lvOneCommentList],
                isCompleted
            },
            getLvOneCommentListMore: {
                ...state.getLvOneCommentListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getLvOneCommentListMore: {
                ...state.getLvOneCommentListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_waiting]: (state, action) => {
        return {
            ...state,
            getLvOneCommentListMore: {
                ...state.getLvOneCommentListMore,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.lvOneCommentList.like_lvOneComment_success]: (state, action) => {
        const { payload: { lvOneComment } } = action
        return {
            ...state,
            data: {
                ...state.data,
                lvOneCommentList: state.data.lvOneCommentList.map(item => {
                    if (item._id != lvOneComment._id) {
                        return item
                    } else {
                        return lvOneComment
                    }
                })
            },
            likeLvOneComment: {
                ...state.likeLvOneComment,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.like_lvOneComment_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            likeLvOneComment: {
                ...state.likeLvOneComment,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.lvOneCommentList.like_lvOneComment_waiting]: (state, action) => {
        return {
            ...state,
            likeLvOneComment: {
                ...state.likeLvOneComment,
                isResultStatus: 1
            }
        }
    }
}, initialState)