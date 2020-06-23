import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../../reduxActionTypes'

const initialState = {
    data: {
        noticeInfo: {
            sysmsg: 0,
            praise: 0,
            comment: 0,
            attention: 0,
            others: 0,
            follow_addmsg: 0,
        },
        noticeId: 0
    },
    getNoticeSetting: {
        isResultStatus: 0,
        failedMsg: ''
    },
    changeNoticeSetting: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.noticeSetting.get_noticeSetting_success]: (state, action) => {
        const { payload: { noticeInfo, noticeId } } = action

        return {
            ...state,
            data: {
                ...state.data,
                noticeInfo,
                noticeId
            },
            getNoticeSetting: {
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.noticeSetting.get_noticeSetting_failed]: (state, action) => {
        const { payload: { failedMsg } } = action

        return {
            ...state,
            getNoticeSetting: {
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.noticeSetting.get_noticeSetting_waiting]: (state, action) => {
        return {
            ...state,
            getNoticeSetting: {
                isResultStatus: 1
            }
        }
    },


    [reduxActionTypes.noticeSetting.change_noticeSetting_success]: (state, action) => {
        const { payload: { noticeInfo } } = action
        return {
            ...state,
            data: {
                ...state.data,
                noticeInfo
            },
            changeNoticeSetting: {
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.noticeSetting.change_noticeSetting_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            changeNoticeSetting: {
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.noticeSetting.change_noticeSetting_waiting]: (state, action) => {
        return {
            ...state,
            changeNoticeSetting: {
                isResultStatus: 1
            }
        }
    }
}, initialState)