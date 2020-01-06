import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        seekHelpArticleList: [],
        isCompleted: false
    },
    getSeekHelpArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getSeekHelpArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_success]: (state, action) => {
        const { payload: { seekHelpArticleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                seekHelpArticleList,
                isCompleted
            },
            getSeekHelpArticleList: {
                ...initialState.getSeekHelpArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getSeekHelpArticleList: {
                ...state.getSeekHelpArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_waiting]: (state, action) => {
        return {
            ...state,
            getSeekHelpArticleList: {
                ...state.getSeekHelpArticleList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_success]: (state, action) => {
        const { payload: { seekHelpArticleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                seekHelpArticleList: [...state.data.seekHelpArticleList, ...seekHelpArticleList],
                isCompleted
            },
            getSeekHelpArticleListMore: {
                ...state.getSeekHelpArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getSeekHelpArticleListMore: {
                ...state.getSeekHelpArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_waiting]: (state, action) => {
        return {
            ...state,
            getSeekHelpArticleListMore: {
                ...state.getSeekHelpArticleListMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.seekHelpArticleList.rm_seekHelpArticleList]: (state, action) => {
        return {
            ...initialState
        }
    },



    [reduxActionTypes.seekHelpArticleList.rm_itemForSeekHelpArticleList_byId]: (state, action) => {
        const { payload: { messageId } } = action
        return {
            ...state,
            data: {
                ...state.data,
                seekHelpArticleList: state.data.seekHelpArticleList.filter(item => item._id != messageId)
            }
        }
    }
}, initialState)