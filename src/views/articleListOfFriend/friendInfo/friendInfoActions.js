import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'

export const getFriendInfo = reqParams => async (dispatch) => {
    try {
        const url = `${host}/user/${reqParams.friendId}/userInfoAndDetail`
        console.log('url', url)
        const res = httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_success, payload: { friendInfo: res.result[0] } })
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFriendInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_waiting })
}