import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { ToastAndroid } from 'react-native'

export const changePassword = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user } } } = getState()
        dispatch({ type: reduxActionTypes.changePassword.change_password_waiting, payload: {} })
        const url = `${host.base_host}/phone/${user.phone}/password`
        console.log('url', url)
        const res = await httpRequest.put(url, {
            code: reqParams.vCode,
            newPassword: reqParams.password
        })
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.changePassword.change_password_success, payload: {} })
            ToastAndroid.show('密码修改成功！', 10)
        } else {
            dispatch({ type: reduxActionTypes.changePassword.change_password_failed, payload: { failedMsg: `${res.msg}` } })
            ToastAndroid.show(`密码修改失败，${res.msg}`, 10)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.changePassword.change_password_failed, payload: { failedMsg: `${err}` } })
        ToastAndroid.show(`密码修改失败，${err}`, 10)
    }
}

