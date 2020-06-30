import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'
import { ToastAndroid } from 'react-native'

//注册获得验证码
export const getVCode = props => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_waiting })
        const { phoneNo } = props
        const url = `${host.base_host}/phone/${phoneNo}/regSms`
        const res = await httpRequest.post(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_success })
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_failed, payload: { failedMsg: `${res.msg}` } })
            ToastAndroid.show(`${res.msg}`, 10)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_failed, payload: { failedMsg: `${err}` } })
        ToastAndroid.show(`${err}`, 10)
    }
}

export const countDown = () => async (dispatch, getState) => {
    const { userRegisterVCodeReducer: { data: { countDownTime } } } = getState()
    try {
        if (countDownTime > 0) {
            dispatch({ type: reduxActionTypes.userRegisterVCode.countDownForUserRegister_start, payload: { countDownTime: countDownTime - 1 } })
            await sleep(1000)
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.userRegisterVCode.countDownForUserRegister_end, payload: { countDownTime: 60 } })
        }
    } catch (err) {
        ToastAndroid.show(`倒计时错误！`, 10)
    }
}