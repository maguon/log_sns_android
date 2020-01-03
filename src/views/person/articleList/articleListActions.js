import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

export const delArticle = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/messsages/${reqParams.messageId}/del`
        console.log('url', url)
        const res = await httpRequest.del(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err',err)
        dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_failed, payload: { failedMsg: `${err}` } })

    }
}

export const likeArticle = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_waiting, payload: {} })
        const url = ``
        console.log('url', url)
        const res = await httpRequest.put(url, {

        })
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err',err)
        dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_failed, payload: { failedMsg: `${err}` } })

    }
}