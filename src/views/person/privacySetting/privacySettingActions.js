import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'

export const getPrivacySetting = () => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user } } } = getState()
        const url = `${host.base_host}/user/${user._id}/privacie`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.privacySetting.get_privacySetting_success, payload: {
                    privacyInfo: {
                        name: res.result[0].name,
                        phone: res.result[0].phone,
                        city: res.result[0].city,
                        car: res.result[0].car,
                        recommend_to_friends: res.result[0].recommend_to_friends
                    },
                    privacyId: res.result[0]._id
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.privacySetting.get_privacySetting_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.privacySetting.get_privacySetting_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getPrivacySettingWaiting = () => (dispatch, getState) => {
    dispatch({ type: reduxActionTypes.privacySetting.get_privacySetting_waiting })
}

export const changePrivacySetting = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user } }, privacySettingReducer: { data: { privacyId } } } = getState()
        const url = `${host.base_host}/user/${user._id}/privacie/${privacyId}/privacie`
        // console.log('url', url)
        const res = await httpRequest.put(url, reqParams)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.privacySetting.change_privacySetting_success, payload: { privacyInfo: reqParams } })
        } else {
            dispatch({ type: reduxActionTypes.privacySetting.change_privacySetting_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.privacySetting.change_privacySetting_failed, payload: { failedMsg: `${err}` } })
    }
}