import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    createPictureBlog: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.publishPictureBlog.create_pushPictureBlog_success]: (state, action) => {
        return {
            ...state,
            createPictureBlog: {
                ...state.createPictureBlog,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.publishPictureBlog.create_pushPictureBlog_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            createPictureBlog: {
                ...state.createPictureBlog,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.publishPictureBlog.create_pushPictureBlog_waiting]: (state, action) => {
        return {
            ...state,
            createPictureBlog: {
                ...state.createPictureBlog,
                isResultStatus: 1
            },
        }
    }
}, initialState)