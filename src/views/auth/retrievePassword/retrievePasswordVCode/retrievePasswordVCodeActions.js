import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'

//忘记密码获得验证码
export const getVCode = props => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_waiting})
        const { RegisterReducer: { account } } = getState()
        const url = `${host.base_host}/phone/${account}/passwordSms`
        console.log('url', url)
        const res = await httpRequest.post(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_success})
        } else {
            dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.retrievePasswordVCode.get_vCodeForRetrievePassword_failed, payload: { failedMsg: `${err}` } })
    }
}
