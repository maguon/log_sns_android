import httpRequest from '../../../utils/HttpRequest'
import reduxActionTypes from '../../../reduxActionTypes'
import localStorageKey from '../../../utils/LocalStorageKey'
import localStorage from '../../../utils/LocalStorage'
import { base_host } from '../../../utils/host'
import NavigationService from '../../../routers/NavigationService'


export const login = reqParams => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.login.login_waiting })
        const { username, password } = reqParams
        // 基本检索URL
        const url = `${base_host}/userLogin`
        const res = await httpRequest.post(url, {
            userName: username,
            password: password
        })

        if (res.success === true) {
            const getUserInfoUrl = `${base_host}/user?userId=${res.result.userId}`
            const getUserInfoRes = await httpRequest.get(getUserInfoUrl)
            console.log('getUserInfoRes', getUserInfoRes)
            if (getUserInfoRes.success) {
                dispatch({
                    type: reduxActionTypes.login.login_success, payload: {
                        userInfo: {
                            _id: res.result.userId,
                            _userDriveId: getUserInfoRes.result[0]._user_drive_id,
                            _userDetailId: getUserInfoRes.result[0]._user_detail_id,
                            type: getUserInfoRes.result[0].type,
                            phone: getUserInfoRes.result[0].phone
                        }
                    }
                })
                localStorage.save({
                    key: localStorageKey.USER,
                    data: {
                        _id: res.result.userId,
                        _userDriveId: getUserInfoRes.result[0]._user_drive_id,
                        _userDetailId: getUserInfoRes.result[0]._user_detail_id,
                        token: res.result.accessToken
                    }
                })
                NavigationService.navigate('MainStack')
            } else {
                dispatch({ type: reduxActionTypes.login.login_failed, payload: { failedMsg: `${getUserInfoRes.msg}` } })
            }
        } else {
            dispatch({ type: reduxActionTypes.login.login_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.login.login_failed, payload: { failedMsg: `${err}` } })
    }

}
