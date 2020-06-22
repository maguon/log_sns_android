import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'
import { ToastAndroid } from 'react-native'

//忘记密码获得验证码
export const getVCode = () => async (dispatch, getState) => {
    try {
        // console.log('getState', getState())
        const { loginReducer: { data: { user } } } = getState()
        dispatch({ type: reduxActionTypes.changePhoneVCode.get_vCodeForChangePhone_waiting })
        const url = `${host.base_host}/user/${user._id}/phone/${user.phone}/resetSms`
        // console.log('url', url)
        const res = await httpRequest.post(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.changePhoneVCode.get_vCodeForChangePhone_success })
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.changePhoneVCode.get_vCodeForChangePhone_failed, payload: { failedMsg: `${res.msg}` } })
            ToastAndroid.show(`${res.msg}`, 10)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.changePhoneVCode.get_vCodeForChangePhone_failed, payload: { failedMsg: `${err}` } })
        ToastAndroid.show(`${err}`, 10)
    }
}

export const countDown = () => async (dispatch, getState) => {
    const { changePhoneVCodeReducer: { data: { countDownTime } } } = getState()
    try {
        if (countDownTime > 0) {
            // console.log('countDownTime',countDownTime)
            dispatch({ type: reduxActionTypes.changePhoneVCode.countDownForChangePhone_start, payload: { countDownTime: countDownTime - 1 } })
            await sleep(1000)
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.changePhoneVCode.countDownForChangePhone_end, payload: { countDownTime: 60 } })
        }
    } catch (err) {
        ToastAndroid.show(`倒计时错误！`, 10)
    }
}

