import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 20

export const getFollowList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/followUserInfo?start=0&size=${pageSize}`
        console.log('url',url)
        const res = await httpRequest.get(url)
        console.log('res',res)

        if (res.success) {
            dispatch({
                type: reduxActionTypes.followList.get_followList_success, payload: {
                    followList: res.result.map(item => ({ ...item, follow_status: 1 })),
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.followList.get_followList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.followList.get_followList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFollowListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.followList.get_followList_waiting })
}

export const getFollowListMore = () => async (dispatch, getState) => {
    const { loginReducer, followListReducer } = getState()
    if (followListReducer.getFollowListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getFollowListMore)
    } else {
        if (!followListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.followList.get_followListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/followUserInfo?start=${(followListReducer.data.followList.length - followListReducer.data.removeCount)}&size=${pageSize}`
                console.log('url',url)
                const res = await httpRequest.get(url)
                console.log('res',res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.followList.get_followListMore_success, payload: {
                            followList: res.result.map(item => ({ ...item, follow_status: 1 })),
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.followList.get_followListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.followList.get_followListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const follow = reqParams => async (dispatch, getState) => {
    const { loginReducer, } = getState()
    const { followUserId } = reqParams
    try {
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userRelation`
        console.log('url',url)
        const res = await httpRequest.post(url, { _userById: followUserId })
        console.log('res',res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.followList.follow_success, payload: { followUserId } })
        } else {
            dispatch({ type: reduxActionTypes.followList.follow_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.followList.follow_failed, payload: { failedMsg: `${err}` } })
    }
}

export const removeFollow = reqParams => async (dispatch, getState) => {
    const { loginReducer } = getState()
    const { followUserId } = reqParams
    try {
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/followUser/${followUserId}/del`
        console.log('url',url)
        const res = await httpRequest.del(url)
        console.log('res',res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.followList.removeFollow_success, payload: { followUserId } })
        } else {
            dispatch({ type: reduxActionTypes.followList.removeFollow_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.followList.removeFollow_failed, payload: { failedMsg: `${err}` } })
    }
}
