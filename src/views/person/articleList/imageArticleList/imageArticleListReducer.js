import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../../reduxActionTypes'

const initialState = {
    data: {
        imageArticleList: [],
        isCompleted: false
    },
    getImageArticleList: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getImageArticleListMore: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.imageArticleList.get_imageArticleList_success]: (state, action) => {
        const { payload: { imageArticleList, isCompleted } } = action
        // console.log('articleList', articleList)
        return {
            ...initialState,
            data: {
                ...initialState.data,
                imageArticleList,
                isCompleted
            },
            getImageArticleList: {
                ...initialState.getImageArticleList,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.imageArticleList.get_imageArticleList_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getImageArticleList: {
                ...state.getImageArticleList,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.imageArticleList.get_imageArticleList_waiting]: (state, action) => {
        return {
            ...state,
            getImageArticleList: {
                ...state.getImageArticleList,
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.imageArticleList.get_imageArticleListMore_success]: (state, action) => {
        const { payload: { imageArticleList, isCompleted } } = action
        return {
            ...state,
            data: {
                ...state.data,
                imageArticleList: [...state.data.imageArticleList, ...imageArticleList],
                isCompleted
            },
            getImageArticleListMore: {
                ...state.getImageArticleListMore,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.imageArticleList.get_imageArticleListMore_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getImageArticleListMore: {
                ...state.getImageArticleListMore,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.imageArticleList.get_imageArticleListMore_waiting]: (state, action) => {
        return {
            ...state,
            getImageArticleListMore: {
                ...state.getImageArticleListMore,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.imageArticleList.rm_imageArticleList]: (state, action) => {
        return {
            ...initialState
        }
    },



    [reduxActionTypes.imageArticleList.rm_itemForImageArticleList_byId]: (state, action) => {
        const { payload: { messageId } } = action
        return {
            ...state,
            data: {
                ...state.data,
                imageArticleList: state.data.imageArticleList.filter(item => item._id != messageId)
            }
        }
    }
}, initialState)