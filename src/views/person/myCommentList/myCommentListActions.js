import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getCommentList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_failed, payload: {} })
    }
}

export const getCommentListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_waiting })
}

export const getCommentListMore = () => (dispatch) => {

}