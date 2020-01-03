import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

const pageSize = 1

export const getImageArticleList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/messages${ObjectToUrl({
            start: 0,
            size: pageSize,
            ...reqParams
        })}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.imageArticleList.get_imageArticleList_success, payload: {
                    imageArticleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleList_failed, payload: {} })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleList_failed, payload: {} })
    }
}

export const getImageArticleListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleList_waiting })
}

export const getImageArticleListMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, imageArticleListReducer } = getState()
    if (imageArticleListReducer.getImageArticleListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getImageArticleListMore)
    } else {
        if (!imageArticleListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/messages${ObjectToUrl({
                    start: 0,
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
                        type: reduxActionTypes.imageArticleList.get_imageArticleListMore_success, payload: {
                            imageArticleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.imageArticleList.get_imageArticleListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}
