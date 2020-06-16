import httpRequest from '../../../utils/HttpRequest'
import reduxActionTypes from '../../../reduxActionTypes'
import localStorageKey from '../../../utils/LocalStorageKey'
import localStorage from '../../../utils/LocalStorage'
import { base_host } from '../../../utils/host'

export const login = props => async (dispatch, getState) => {
    const { LoginReducer: { user, password } } = getState()
    try {
        //参数
        const params = { userName: user, password: password }
        // 基本检索URL
        const url = `${base_host}/userLogin`
        console.log('url', url)
        const res = await httpRequest.post(url, params)
        if (res.success === true) {
            //用户信息
            const user = {
                userId: res.result.userId, status: res.result.status, type: res.result.type,
                token: res.result.accessToken
            }
            //更新reducer
            // dispatch({ type: reduxActionTypes.login.set_UserLogin, payload: { user } })
            // dispatch({ type: reduxActionTypes.LoginActionType.set_UserId, payload: { userId: res.result.userId } })
            //保存本地
            localStorage.save({
                key: localStorageKey.USER,
                data: user
            })

        } else {
            dispatch({ type: reduxActionTypes.login.login_failed, payload: { failedMsg: `${res.msg}` } })
            // Toast.loading('Loading...', 0.5, () => {
            //     Alert.alert("", res.msg, [{ text: "确定" }])
            // })
        }

    } catch (err) {
        dispatch({ type: reduxActionTypes.login.login_failed, payload: { failedMsg: `${err}` } })
        // Toast.fail(err.message)
    }

}
