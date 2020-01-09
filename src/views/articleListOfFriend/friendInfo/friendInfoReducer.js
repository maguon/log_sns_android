import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        friendInfo: {},
        contactInfo: {},
        relationInfo: {}
    },
    getFriendInfo: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getContactInfo: {
        isResultStatus: 0,
        failedMsg: ''
    },
    getFelationInfo: {
        isResultStatus: 0,
        failedMsg: ''
    },
    applyContact: {
        isResultStatus: 0,
        failedMsg: ''
    },
    follow: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.friendInfo.get_friendInfo_success]: (state, action) => {
        const { payload: { friendInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                friendInfo
            },
            getFriendInfo: {
                ...state.getFriendInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.get_friendInfo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFriendInfo: {
                ...state.getFriendInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.get_friendInfo_waiting]: (state, action) => {
        return {
            ...state,
            getFriendInfo: {
                ...state.getFriendInfo,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.friendInfo.get_contactInfoForFriend_success]: (state, action) => {
        const { payload: { contactInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                contactInfo
            },
            getContactInfo: {
                ...state.getContactInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.get_contactInfoForFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getContactInfo: {
                ...state.getContactInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.get_contactInfoForFriend_waiting]: (state, action) => {
        return {
            ...state,
            getContactInfo: {
                ...state.getContactInfo,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.friendInfo.get_relationInfoForFriend_success]: (state, action) => {
        const { payload: { felationInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                felationInfo
            },
            getFelationInfo: {
                ...state.getFelationInfo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.get_relationInfoForFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getFelationInfo: {
                ...state.getFelationInfo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.get_relationInfoForFriend_waiting]: (state, action) => {
        return {
            ...state,
            getFelationInfo: {
                ...state.getFelationInfo,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.friendInfo.followForFriend_success]: (state, action) => {
        const { payload: { relationInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                relationInfo
            },
            follow: {
                ...state.follow,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.followForFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            follow: {
                ...state.follow,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.followForFriend_waiting]: (state, action) => {
        return {
            ...state,
            follow: {
                ...state.follow,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.friendInfo.applyContactForFriend_success]: (state, action) => {
        const { payload: { contactInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                contactInfo
            },
            applyContact: {
                ...state.applyContact,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.friendInfo.applyContactForFriend_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            applyContact: {
                ...state.applyContact,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.friendInfo.applyContactForFriend_waiting]: (state, action) => {
        return {
            ...state,
            applyContact: {
                ...state.applyContact,
                isResultStatus: 1
            }
        }
    }
}, initialState)