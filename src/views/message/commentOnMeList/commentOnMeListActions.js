import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getCommentOnMeList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_failed, payload: {} })
    }
}

export const getCommentOnMeListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_waiting })
}

export const getCommentOnMeListMore = () => (dispatch) => {

}