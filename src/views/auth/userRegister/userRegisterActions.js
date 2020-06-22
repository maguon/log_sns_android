import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { ToastAndroid } from 'react-native'

export const register = reqParams => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.userRegister.register_account_waiting })
        const url = `${host.base_host}/user`
        // console.log('url', url)
        const res = await httpRequest.post(url, {
            phone: reqParams.phone,
            captcha: reqParams.vCode,
            password: reqParams.password,
            type: 0
        })
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.userRegister.register_account_success })
            ToastAndroid.show(`注册成功，请登录！`, 10)
        } else {
            dispatch({ type: reduxActionTypes.userRegister.register_account_failed, payload: { failedMsg: `${res.msg}` } })
            ToastAndroid.show(`注册失败：${res.msg}！`, 10)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.userRegister.register_account_failed, payload: { failedMsg: `${err}` } })
        ToastAndroid.show(`注册失败：${err}！`, 10)
    }
}