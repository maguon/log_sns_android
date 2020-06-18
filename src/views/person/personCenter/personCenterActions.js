import httpRequest from '../../../utils/HttpRequest'
import reduxActionTypes from '../../../reduxActionTypes'
import { base_host } from '../../../utils/host'

export const getUserInfo = () => async (dispatch, getstate) => {
    try {
        const { loginReducer: { data: { user } } } = getstate()
        const url = `${base_host}/user/${user._id}/userDetail`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.personCenter.get_userInfo_success, payload: {
                    userInfo: res.result[0]
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.personCenter.get_userInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.personCenter.get_userInfo_failed, payload: { failedMsg: `${err}` } })
    }
}


export const getUserInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.personCenter.get_userInfo_waiting })
}