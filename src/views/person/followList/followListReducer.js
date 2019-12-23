import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        followList: []
    },
    getFollowList: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: ''
    },
    getFollowListMore: {
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: ''
    },
    follow:{
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: ''
    },
    removeFollow:{
        isResultStatus: 0,
        errorMsg: '',
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.followList.get_followList_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.get_followList_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.get_followList_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.followList.get_followListMore_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.get_followListMore_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.get_followListMore_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.followList.follow_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.follow_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.follow_waiting]: (state, action) => {
        return {
            ...state,
        }
    },



    [reduxActionTypes.followList.removeFollow_success]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.removeFollow_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.followList.removeFollow_waiting]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)