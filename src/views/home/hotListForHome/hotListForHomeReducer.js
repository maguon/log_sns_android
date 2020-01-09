import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        articleList: [],
        isCompleted: false
    },
    getHotListForHome: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getHotListForHomeMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.hotListForHome.get_hotListForHome_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        return {
            ...initialState,
            data: {
                ...initialState.data,
                articleList,
                isCompleted
            },
            getHotListForHome: {
                ...initialState.getHotListForHome,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.hotListForHome.get_hotListForHome_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getHotListForHome: {
                ...state.getHotListForHome,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.hotListForHome.get_hotListForHome_waiting]: (state, action) => {
        return {
            ...state,
            getHotListForHome: {
                ...state.getHotListForHome,
                isResultStatus: 1
            }
        }
    },




    [reduxActionTypes.hotListForHome.get_hotListForHomeMore_success]: (state, action) => {
        const { payload: { articleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...state,
            data: {
                ...state.data,
                articleList: [...state.data.articleList, ...articleList],
                isCompleted
            },
            getHotListForHomeMore: {
                ...state.getHotListForHomeMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.hotListForHome.get_hotListForHomeMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getHotListForHomeMore: {
                ...state.getHotListForHomeMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.hotListForHome.get_hotListForHomeMore_waiting]: (state, action) => {
        return {
            ...state,
            getHotListForHomeMore: {
                ...state.getHotListForHomeMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)