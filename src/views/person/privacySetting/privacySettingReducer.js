import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        privacyInfo: {
            name: 0,
            phone: 0,
            city: 0,
            car: 0,
            recommend_to_friends: 0
        },
        privacyId: 0
    },
    getPrivacySetting: {
        isResultStatus: 0,
        failedMsg: ''
    },
    changePrivacySetting: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.privacySetting.get_privacySetting_success]: (state, action) => {
        const { payload: { privacyInfo, privacyId } } = action

        return {
            ...state,
            data: {
                ...state.data,
                privacyInfo,
                privacyId
            },
            getPrivacySetting: {
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.privacySetting.get_privacySetting_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getPrivacySetting: {
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.privacySetting.get_privacySetting_waiting]: (state, action) => {
        return {
            ...state,
            getPrivacySetting: {
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.privacySetting.change_privacySetting_success]: (state, action) => {
        const { payload: { privacyInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                privacyInfo
            },
            changePrivacySetting: {
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.privacySetting.change_privacySetting_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            changePrivacySetting: {
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.privacySetting.change_privacySetting_waiting]: (state, action) => {
        return {
            ...state,
            changePrivacySetting: {
                isResultStatus: 1
            }
        }
    }
}, initialState)