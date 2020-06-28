import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'


export const createPictureBlog = reqParams => async (dispatch, getState) => {
    try {
        // console.log('reqParams', reqParams)
        const { publishBlogReducer: { data }, loginReducer } = getState()
        dispatch({ type: reduxActionTypes.publishPictureBlog.create_pushPictureBlog_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg`
        // console.log('url', url)
        const res = await httpRequest.post(url, reqParams)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.publishPictureBlog.create_pushPictureBlog_success })
        } else {
            dispatch({ type: reduxActionTypes.publishPictureBlog.create_pushPictureBlog_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.publishPictureBlog.create_pushPictureBlog_failed, payload: { failedMsg: `${err}` } })
    }
}

