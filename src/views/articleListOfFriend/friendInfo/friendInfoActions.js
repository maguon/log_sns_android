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
            console.log(res.result[0] ? res.result[0] : {} )
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
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/follow?userRelationId=${reqParams.friendId}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            console.log(res.result[0] ? res.result[0] : {} )

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

export const follow = reqParams => async (dispatch) => {

}

