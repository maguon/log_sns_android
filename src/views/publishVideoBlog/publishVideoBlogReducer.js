import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    createVideoBlog: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.publishVideoBlog.create_pushVideoBlog_success]: (state, action) => {
        return {
            ...state,
            createVideoBlog: {
                ...state.createVideoBlog,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.publishVideoBlog.create_pushVideoBlog_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            createVideoBlog: {
                ...state.createVideoBlog,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.publishVideoBlog.create_pushVideoBlog_waiting]: (state, action) => {
        return {
            ...state,
            createVideoBlog: {
                ...state.createVideoBlog,
                isResultStatus: 1
            },
        }
    }
}, initialState)