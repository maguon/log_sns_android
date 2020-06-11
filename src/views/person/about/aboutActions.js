import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'


export const getAbout = () => async (dispatch, getState) => {
    try {
        console.log('getState', getState())
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.about.get_about_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/about`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.about.get_about_success, payload: { aboutInfo: res.result.length > 0 ? res.result[0] : {} } })
        } else {
            dispatch({ type: reduxActionTypes.about.get_about_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.about.get_about_failed, payload: { failedMsg: `${err}` } })

    }
}