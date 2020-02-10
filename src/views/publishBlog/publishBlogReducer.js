import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        currentAddr: '',
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
        }
    },
    [reduxActionTypes.publishBlog.create_article_failed]: (state, action) => {
        return {
            ...state,
        }
    },
    [reduxActionTypes.publishBlog.create_article_waiting]: (state, action) => {
        return {
            ...state,
        }
    },


    [reduxActionTypes.publishBlog.get_currentAddr_success]: (state, action) => {
        const { payload: { currentAddr, longitude, latitude } } = action
        // console.log('action',action)
        return {
            ...state,
            data:{
                currentAddr, longitude, latitude
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
    }
}, initialState)