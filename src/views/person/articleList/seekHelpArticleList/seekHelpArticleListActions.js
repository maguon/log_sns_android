import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

const pageSize = 1

export const getSeekHelpArticleList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/messages`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_success, payload: {
                    seekHelpArticleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_failed, payload: {} })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_failed, payload: {} })
    }
}

export const getSeekHelpArticleListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleList_waiting })
}

export const getSeekHelpArticleListMore = () => async (dispatch, getState) => {
    const { loginReducer, articleListReducer } = getState()
    if (articleListReducer.getArticleListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getArticleListMore)
    } else {
        if (!articleListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/messages`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_success, payload: {
                            seekHelpArticleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.seekHelpArticleList.get_seekHelpArticleListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}
