import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

//忘记密码获得验证码
export const getVCode = props => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_waiting})
        const { phoneNo } = props
        const url = `${host.base_host}/phone/${phoneNo}/passwordSms`
        // console.log('url', url)
        const res = await httpRequest.post(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_success})
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_failed, payload: { failedMsg: `${err}` } })
    }
}

export const countDown = () => async (dispatch, getState) => {
    const { retrievePasswordVCodeReducer: { data: { countDownTime } } } = getState()
    try {
        if (countDownTime > 0) {
            // console.log('countDownTime',countDownTime)
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.countDownForRetrievePassword_start, payload: { countDownTime: countDownTime - 1 } })
            await sleep(1000)
            dispatch(countDown())
        } else {
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.countDownForRetrievePassword_end, payload: { countDownTime: 60 } })
        }
    } catch (err) {
        ToastAndroid.show(`倒计时错误！`, 10)
    }
}

