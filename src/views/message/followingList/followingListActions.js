import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getFollowingList = () =>async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.followingList.get_followingList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.followingList.get_followingList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.followingList.get_followingList_failed, payload: {} })
    }
}

export const getFollowingListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.followingList.get_followingList_waiting })
}

export const getFollowingListMore = () => (dispatch) => {

}