import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        textArticleList: [],
        isCompleted: false
    },
    getTextArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getTextArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.textArticleList.get_textArticleList_success]: (state, action) => {
        const { payload: { textArticleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                textArticleList,
                isCompleted
            },
            getTextArticleList: {
                ...initialState.getTextArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.textArticleList.get_textArticleList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getTextArticleList: {
                ...state.getTextArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.textArticleList.get_textArticleList_waiting]: (state, action) => {
        return {
            ...state,
            getTextArticleList: {
                ...state.getTextArticleList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.textArticleList.get_textArticleListMore_success]: (state, action) => {
        const { payload: { textArticleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                textArticleList: [...state.data.textArticleList, ...textArticleList],
                isCompleted
            },
            getTextArticleListMore: {
                ...state.getTextArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.textArticleList.get_textArticleListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getTextArticleListMore: {
                ...state.getTextArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.textArticleList.get_textArticleListMore_waiting]: (state, action) => {
        return {
            ...state,
            getTextArticleListMore: {
                ...state.getTextArticleListMore,
                isResultStatus: 1
            }
        }
    }
}, initialState)