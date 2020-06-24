import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'


export const createVideoBlog = reqParams => async (dispatch, getState) => {
    try {
        console.log('reqParams', reqParams)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.publishVideoBlog.create_pushVideoBlog_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg`
        console.log('url', url)
        const res = await httpRequest.post(url, reqParams)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.publishVideoBlog.create_pushVideoBlog_success })
        } else {
            dispatch({ type: reduxActionTypes.publishVideoBlog.create_pushVideoBlog_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.publishVideoBlog.create_pushVideoBlog_failed, payload: { failedMsg: `${err}` } })
    }
}

