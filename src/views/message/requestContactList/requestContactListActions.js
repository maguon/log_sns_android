import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getRequestContactList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.requestContactList.get_requestContactList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.requestContactList.get_requestContactList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.requestContactList.get_requestContactList_failed, payload: {} })
    }
}

export const getRequestContactListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.requestContactList.get_requestContactList_waiting })
}

export const getRequestContactListMore = () => (dispatch) => {

}

export const refuseRequestContact = () => (dispatch) => {

}

export const agreeRequestContact = () => (dispatch) => {

}
