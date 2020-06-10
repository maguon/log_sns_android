import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false,
        coords: {}

    },
    getNearbyListForHome: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getNearbyListForHomeMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.nearbyListForHome.get_nearbyListForHome_success]: (state, action) => {
        const { payload: { articleList, isCompleted, coords } } = action
        return {
            ...initialState,
            data: {
                ...initialState.data,
                articleList,
                isCompleted,
                coords
            },
            getNearbyListForHome: {
                ...initialState.getNearbyListForHome,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.nearbyListForHome.get_nearbyListForHome_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getNearbyListForHome: {
                ...state.getNearbyListForHome,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.nearbyListForHome.get_nearbyListForHome_waiting]: (state, action) => {
        return {
            ...state,
            getNearbyListForHome: {
                ...state.getNearbyListForHome,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getNearbyListForHomeMore: {
                ...state.getNearbyListForHomeMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getNearbyListForHomeMore: {
                ...state.getNearbyListForHomeMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_waiting]: (state, action) => {
        return {
            ...state,
            getNearbyListForHomeMore: {
                ...state.getNearbyListForHomeMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)