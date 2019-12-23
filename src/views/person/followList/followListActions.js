import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getFollowList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.followList.get_followList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.followList.get_followList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.followList.get_followList_failed, payload: {} })
    }
}

export const getFollowListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.followList.get_followList_waiting })
}

export const getFollowListMore = () => (dispatch) => {

}

export const follow = () => (dispatch) => {

}

export const removeFollow = () => (dispatch) => {

}
