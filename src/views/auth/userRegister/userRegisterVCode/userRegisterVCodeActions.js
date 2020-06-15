import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import reduxActionTypes from '../../../../reduxActionTypes'

export const getCode = props => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_waiting})
        const { RegisterReducer: { account } } = getState()
        const url = `${host.base_host}/phone/${account}/regSms`
        console.log('url', url)
        const res = await HttpRequest.post(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_success})

        } else {
            dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.userRegisterVCode.get_vCodeForUserRegister_failed, payload: { failedMsg: `${err}` } })
    }
}
