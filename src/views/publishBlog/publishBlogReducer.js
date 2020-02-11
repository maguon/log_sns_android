import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        currentAddrName: '',
        currentAddrReal: '',
        longitude: 0,
        latitude: 0
    },
    createArticle: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCurrentAddr: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.publishBlog.create_article_success]: (state, action) => {
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.publishBlog.create_article_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.publishBlog.create_article_waiting]: (state, action) => {
        return {
            ...state,
            createArticle: {
                ...state.createArticle,
                isResultStatus: 1
            },
        }
    },


    [reduxActionTypes.publishBlog.get_currentAddr_success]: (state, action) => {
        const { payload: { currentAddrName, currentAddrReal, longitude, latitude } } = action
        // console.log('action',action)
        return {
            ...state,
            data: {
                currentAddrName, currentAddrReal, longitude, latitude
            },
            getCurrentAddr: {
                ...state.getCurrentAddr,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.publishBlog.get_currentAddr_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getCurrentAddr: {
                ...state.getCurrentAddr,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.publishBlog.get_currentAddr_waiting]: (state, action) => {
        return {
            ...state,
            getCurrentAddr: {
                ...state.getCurrentAddr,
                isResultStatus: 1
            }
        }
    },
    [reduxActionTypes.publishBlog.remove_currentAddr]: (state, action) => {
        return {
            ...state,
            data: {
                ...initialState.data
            }
        }
    }
}, initialState)