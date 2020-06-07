import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        currentAddrName: '',
        currentAddrReal: '',
        longitude: 0,
        latitude: 0
    },
    getCurrentLocation: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.currentlocation.get_currentLocation_success]: (state, action) => {
        const { payload: { currentAddrName, currentAddrReal, longitude, latitude } } = action
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
    [reduxActionTypes.currentlocation.get_currentLocation_failed]: (state, action) => {
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
    [reduxActionTypes.currentlocation.get_currentLocation_waiting]: (state, action) => {
        return {
            ...state,
            getCurrentAddr: {
                ...state.getCurrentAddr,
                isResultStatus: 1
            }
        }
    },
    [reduxActionTypes.currentlocation.remove_currentLocation]: (state, action) => {
        return {
            ...state,
            data: {
                ...initialState.data
            }
        }
    }
}, initialState)