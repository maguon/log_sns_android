import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'

export const getFriendInfo = reqParams => async (dispatch) => {
    try {
        const url = `${host.base_host}/user/${reqParams.friendId}/userInfoAndDetail`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_success, payload: { friendInfo: res.result[0] } })
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFriendInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.friendInfo.get_friendInfo_waiting })
}

export const getContactInfo = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/contact?beInvitedUserId=${reqParams.friendId}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.friendInfo.get_contactInfoForFriend_success, payload: { contactInfo: res.result[0] ? res.result[0] : {} } })
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.get_contactInfoForFriend_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.get_contactInfoForFriend_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getContactInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.friendInfo.get_contactInfoForFriend_waiting })
}

export const getFelationInfo = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/follow?userById=${reqParams.friendId}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.friendInfo.get_relationInfoForFriend_success, payload: { relationInfo: res.result[0] ? res.result[0] : {} } })
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.get_relationInfoForFriend_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.get_relationInfoForFriend_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getFelationInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.friendInfo.get_relationInfoForFriend_waiting })
}

export const applyContact = reqParams => async (dispatch) => {

}

export const follow = reqParams => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.friendInfo.followForFriend_waiting })
        const { loginReducer, } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userRelation`
        console.log('url', url)
        const res = await httpRequest.post(url, { userById: reqParams.friendId })
        console.log('res', res)
        if (res.success) {
            const followInfoUrl = `${host.base_host}/user/${loginReducer.data.user._id}/follow?userById=${reqParams.friendId}`
            console.log('followInfoUrl', followInfoUrl)
            const followInfoRes = await httpRequest.get(followInfoUrl)
            console.log('followInfoRes', followInfoRes)
            if (followInfoRes.success) {
                dispatch({ type: reduxActionTypes.friendInfo.followForFriend_success, payload: { relationInfo: followInfoRes.result[0] ? followInfoRes.result[0] : {} } })
            } else {
                dispatch({ type: reduxActionTypes.friendInfo.followForFriend_failed, payload: { failedMsg: `${followInfoRes.msg}` } })
            }
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.followForFriend_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.followForFriend_failed, payload: { failedMsg: `${err}` } })
    }
}


export const removeFollow = reqParams => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.friendInfo.remove_followForFriend_waiting })
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/followUser/${reqParams.friendId}/del`
        console.log('url', url)
        const res = await httpRequest.del(url)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.friendInfo.remove_followForFriend_success })
        } else {
            dispatch({ type: reduxActionTypes.friendInfo.remove_followForFriend_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.friendInfo.remove_followForFriend_failed, payload: { failedMsg: `${err}` } })
    }
}