import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { ToastAndroid } from 'react-native'

export const changePhone = reqParams => async (dispatch, getState) => {
    try {
        // const url = `${host.base_host}/phone/${reqParams.phone}/password`
        // // console.log('url', url)
        // const res = await httpRequest.put(url, {
        //     code: reqParams.vCode,
        //     newPassword: reqParams.password
        // })
        // // console.log('res', res)
        // if (res.success) {
        //     dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_success, payload: {} })
        //     ToastAndroid.show('密码修改成功，请重新登录！', 10)
        // } else {
        //     dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_failed, payload: { failedMsg: `${res.msg}` } })
        //     ToastAndroid.show(`密码修改失败，${res.msg}`, 10)
        // }
    } catch (err) {
        dispatch({ type: reduxActionTypes.changePhone.change_phone_failed, payload: { failedMsg: `${err}` } })
        ToastAndroid.show(`密码修改失败，${err}`, 10)
    }
}

