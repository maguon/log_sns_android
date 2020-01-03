import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        followList: [],
        isCompleted: false,
        removeCount: 0
    },
    getFollowList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getFollowListMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    follow: {
        isResultStatus: 0,
        failedMsg: ''
    },
    removeFollow: {
        isResultStatus: 0,
        failedMsg: ''
    }
}


//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(失败)]
export default handleActions({
    [reduxActionTypes.followList.get_followList_success]: (state, action) => {
        const { payload: { followList, isCompleted } } = action
        return {
            ...initialState,
            data: {
                ...initialState.data,
                followList,
                isCompleted
            },
            getFollowList: {
                ...initialState.getFollowList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followList.get_followList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getFollowList: {
                ...state.getFollowList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followList.get_followList_waiting]: (state, action) => {
        return {
            ...state,
            getFollowList: {
                ...state.getFollowList,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.followList.get_followListMore_success]: (state, action) => {
        const { payload: { followList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                followList: [...state.data.followList, ...followList],
                isCompleted
            },
            getFollowListMore: {
                ...state.getFollowListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followList.get_followListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getFollowListMore: {
                ...state.getFollowListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followList.get_followListMore_waiting]: (state, action) => {
        return {
            ...state,
            getFollowListMore: {
                ...state.getFollowListMore,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.followList.follow_success]: (state, action) => {
        const { payload: { followUserId } } = action

        return {
            ...state,
            data: {
                ...state.data,
                followList: state.data.followList.map(item => {
                    if (item._userById == followUserId) {
                        return { ...item, follow_status: 1 }
                    } else {
                        return item
                    }
                }),
                removeCount: state.data.removeCount - 1
            },
            follow: {
                ...state.follow,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followList.follow_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            follow: {
                ...state.follow,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followList.follow_waiting]: (state, action) => {
        return {
            ...state,
            follow: {
                ...state.follow,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.followList.removeFollow_success]: (state, action) => {
        const { payload: { followUserId } } = action

        return {
            ...state,
            data: {
                ...state.data,
                followList: state.data.followList.map(item => {
                    if (item._userById == followUserId) {
                        return { ...item, follow_status: 0 }
                    } else {
                        return item
                    }
                }),
                removeCount: state.data.removeCount + 1
            },
            removeFollow: {
                ...state.removeFollow,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.followList.removeFollow_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            removeFollow: {
                ...state.removeFollow,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.followList.removeFollow_waiting]: (state, action) => {
        return {
            ...state,
            removeFollow: {
                ...state.removeFollow,
                isResultStatus: 1
            }
        }
    }
}, initialState)