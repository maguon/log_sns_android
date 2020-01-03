import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        fansList: [],
        isCompleted: false
    },
    getFansList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getFansListMore: {
        isResultStatus: 0,
        failedMsg: ''
    },
    followFans:{
        isResultStatus: 0,
        failedMsg: ''
    },
    removeFollowFans:{
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.fansList.get_fansList_success]: (state, action) => {
        const { payload: { fansList, isCompleted } } = action
        return {
            ...initialState,
            data: {
                ...initialState.data,
                fansList,
                isCompleted
            },
            getFansList: {
                ...initialState.getFansList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.fansList.get_fansList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getFansList: {
                ...state.getFansList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.fansList.get_fansList_waiting]: (state, action) => {
        return {
            ...state,
            getFansList: {
                ...state.getFansList,
                isResultStatus: 1,
            }
        }
    },


    [reduxActionTypes.fansList.get_fansListMore_success]: (state, action) => {
        const { payload: { fansList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                fansList: [...state.data.fansList, ...fansList],
                isCompleted
            },
            getFansListMore: {
                ...state.getFansListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.fansList.get_fansListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getFansListMore: {
                ...state.getFansListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.fansList.get_fansListMore_waiting]: (state, action) => {
        return {
            ...state,
            getFansListMore: {
                ...state.getFansListMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.fansList.followFans_success]: (state, action) => {
        const { payload: { followUserId } } = action
        return {
            ...state,
            data: {
                ...state.data,
                fansList: state.data.fansList.map(item => {
                    if (item._userId == followUserId) {
                        return { ...item, type: 1 }
                    } else {
                        return item
                    }
                })
            },
            follow: {
                ...state.follow,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.fansList.followFans_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            followFans: {
                ...state.followFans,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.fansList.followFans_waiting]: (state, action) => {
        return {
            ...state,
            followFans: {
                ...state.followFans,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.fansList.removeFollowFans_success]: (state, action) => {
        const { payload: { followUserId } } = action
        return {
            ...state,
            data: {
                ...state.data,
                fansList: state.data.fansList.map(item => {
                    if (item._userId == followUserId) {
                        return { ...item, type: 0 }
                    } else {
                        return item
                    }
                })
            },
            removeFollow: {
                ...state.removeFollow,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.fansList.removeFollowFans_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            removeFollowFans: {
                ...state.removeFollowFans,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.fansList.removeFollowFans_waiting]: (state, action) => {
        return {
            ...state,
            removeFollowFans: {
                ...state.removeFollowFans,
                isResultStatus: 1
            }
        }
    }
}, initialState)