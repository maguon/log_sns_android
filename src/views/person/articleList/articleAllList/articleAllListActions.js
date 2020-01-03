import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

const pageSize = 1

export const getArticleAllList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages?start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.articleAllList.get_articleAllList_success, payload: {
                    articleAllList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.articleAllList.get_articleAllList_failed, payload: {} })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.articleAllList.get_articleAllList_failed, payload: {} })
    }
}

export const getArticleAllListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.articleAllList.get_articleAllList_waiting })
}

export const getArticleAllListMore = () => async (dispatch, getState) => {
    const { loginReducer, articleAllListReducer } = getState()
    if (articleAllListReducer.getArticleAllListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getArticleAllListMore)
    } else {
        if (!articleAllListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.articleAllList.get_articleAllListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages?start=${articleAllListReducer.data.articleAllList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.articleAllList.get_articleAllListMore_success, payload: {
                            articleAllList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.articleAllList.get_articleAllListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.articleAllList.get_articleAllListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}
