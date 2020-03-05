import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        currentAddrName: '',
        currentAddrReal: '',
        longitude: 0,
        latitude: 0
    },
    createSeekHelp: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getCurrentAddr: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.publishSeekHelp.create_seekHelp_success]: (state, action) => {
        return {
            ...state,
            createSeekHelp: {
                ...state.createSeekHelp,
                isResultStatus: 2
            },
        }
    },
    [reduxActionTypes.publishSeekHelp.create_seekHelp_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            createSeekHelp: {
                ...state.createSeekHelp,
                isResultStatus: 3,
                failedMsg
            },
        }
    },
    [reduxActionTypes.publishSeekHelp.create_seekHelp_waiting]: (state, action) => {
        return {
            ...state,
            createSeekHelp: {
                ...state.createSeekHelp,
                isResultStatus: 1
            },
        }
    },


    [reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_success]: (state, action) => {
        const { payload: { currentAddrName, currentAddrReal, longitude, latitude } } = action
        console.log('action',action)
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
    [reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_failed]: (state, action) => {
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
    [reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_waiting]: (state, action) => {
        return {
            ...state,
            getCurrentAddr: {
                ...state.getCurrentAddr,
                isResultStatus: 1
            }
        }
    },
    [reduxActionTypes.publishSeekHelp.remove_currentAddrForSeekHelp]: (state, action) => {
        return {
            ...state,
            data: {
                ...initialState.data
            }
        }
    }
}, initialState)