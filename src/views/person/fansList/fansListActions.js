import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 20

export const getFansList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/attentionUserInfo?start=0&size=${pageSize}`
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.fansList.get_fansList_success, payload: {
                    fansList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.fansList.get_fansList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.fansList.get_fansList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFansListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.fansList.get_fansList_waiting })
}

export const getFansListMore = () => async (dispatch, getState) => {
    const { loginReducer, fansListReducer } = getState()
    if (fansListReducer.getFansListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getFansListMore)
    } else {
        if (!fansListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.fansList.get_fansListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/attentionUserInfo?start=${fansListReducer.data.fansList.length}&size=${pageSize}`
                const res = await httpRequest.get(url)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.fansList.get_fansListMore_success, payload: {
                            fansList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.fansList.get_fansListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.fansList.get_fansListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const followFans = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer, } = getState()
        const { followUserId } = reqParams
        dispatch({ type: reduxActionTypes.fansList.followFans_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userRelation`
        const res = await httpRequest.post(url, { _userById: followUserId })
        if (res.success) {
            dispatch({ type: reduxActionTypes.fansList.followFans_success, payload: { followUserId } })
        } else {
            dispatch({ type: reduxActionTypes.fansList.followFans_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.fansList.followFans_failed, payload: { failedMsg: `${err}` } })
    }
}

export const removeFollowFans = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const { followUserId } = reqParams
        dispatch({ type: reduxActionTypes.fansList.removeFollowFans_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/followUser/${followUserId}/del`
        console.log('url',url)
        const res = await httpRequest.del(url)
        console.log('res',res)

        if (res.success) {
            dispatch({ type: reduxActionTypes.fansList.removeFollowFans_success, payload: { followUserId } })
        } else {
            dispatch({ type: reduxActionTypes.fansList.removeFollowFans_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.fansList.removeFollowFans_failed, payload: { failedMsg: `${err}` } })
    }
}