import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 1

export const getFollowingListForHome = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages?start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.followingListForHome.get_followingListForHome_success, payload: {
                    articleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHome_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHome_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFollowingListForHomeWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHome_waiting })
}

export const getFollowingListForHomeMore = () => async (dispatch, getState) => {
    const { loginReducer, followingListForHomeReducer } = getState()
    if (followingListForHomeReducer.getFollowingListForHomeMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getFollowingListForHomeMore)
    } else {
        if (!followingListForHomeReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHomeMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages?start=${followingListForHomeReducer.data.articleList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.followingListForHome.get_followingListForHomeMore_success, payload: {
                            articleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHomeMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.followingListForHome.get_followingListForHomeMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}