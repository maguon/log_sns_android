import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'

export const getNoticeSetting = () => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user } } } = getState()
        const url = `${host.base_host}/user/${user._id}/notice`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.noticeSetting.get_noticeSetting_success, payload: {
                    noticeInfo: {
                        sysmsg: res.result[0].sysmsg,
                        praise: res.result[0].praise,
                        comment: res.result[0].comment,
                        attention: res.result[0].attention,
                        others: res.result[0].others,
                        follow_addmsg: res.result[0].follow_addmsg,
                    },
                    noticeId: res.result[0]._id
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.noticeSetting.get_noticeSetting_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.noticeSetting.get_noticeSetting_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getNoticeSettingWaiting = () => (dispatch, getState) => {
    dispatch({ type: reduxActionTypes.noticeSetting.get_noticeSetting_waiting })
}

export const changeNoticeSetting = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user } }, noticeSettingReducer: { data: { noticeId } } } = getState()
        const url = `${host.base_host}/user/${user._id}/notice/${noticeId}/notice`
        // console.log('url', url)
        const res = await httpRequest.put(url, reqParams)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.noticeSetting.change_noticeSetting_success, payload: { noticeInfo: reqParams } })
        } else {
            dispatch({ type: reduxActionTypes.noticeSetting.change_noticeSetting_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.noticeSetting.change_noticeSetting_failed, payload: { failedMsg: `${err}` } })
    }
}