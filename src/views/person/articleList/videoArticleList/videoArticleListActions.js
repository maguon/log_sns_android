import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

const pageSize = 1

export const getVideoArticleList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages${ObjectToUrl({
            start: 0,
            size: pageSize,
            ...reqParams
        })}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.videoArticleList.get_videoArticleList_success, payload: {
                    videoArticleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getVideoArticleListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleList_waiting })
}

export const getVideoArticleListMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, videoArticleListReducer } = getState()
    if (videoArticleListReducer.getVideoArticleListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getVideoArticleListMore)
    } else {
        if (!videoArticleListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages${ObjectToUrl({
                    start: videoArticleListReducer.data.videoArticleList.length,
                    size: pageSize,
                    ...reqParams
                })}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.videoArticleList.get_videoArticleListMore_success, payload: {
                            videoArticleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.videoArticleList.get_videoArticleListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const rmVideoArticleList = () =>  (dispatch) => {
    dispatch({ type: reduxActionTypes.videoArticleList.rm_videoArticleList })
}