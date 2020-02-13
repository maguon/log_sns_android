import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 1

export const getNewestArticleList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)

        if (res.success) {
            dispatch({
                type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_success, payload: {
                    articleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_failed, payload: {} })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_failed, payload: {} })
    }
}

export const getNewestArticleListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunity_waiting })
}

export const getNewestArticleListMore = () => async (dispatch, getState) => {
    const { loginReducer, newestArticleListForCommunityReducer } = getState()
    if (newestArticleListForCommunityReducer.getNewestArticleListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getNewestArticleListMore)
    } else {
        if (!newestArticleListForCommunityReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=${(newestArticleListForCommunityReducer.data.articleList.length)}&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_success, payload: {
                            articleList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)

                dispatch({ type: reduxActionTypes.newestArticleListForCommunity.get_newestArticleListForCommunityMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}