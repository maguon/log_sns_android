import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'

export const createArticle = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.publishBlog.create_article_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg`
        const res = await httpRequest.post(url, reqParams)
        if (res.success) {
            dispatch({ type: reduxActionTypes.publishBlog.create_article_success })
        } else {
            dispatch({ type: reduxActionTypes.publishBlog.create_article_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.publishBlog.create_article_failed, payload: { failedMsg: `${err}` } })
    }
}
