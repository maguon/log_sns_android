import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getLikeMeList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.likeMeList.get_likeMeList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.likeMeList.get_likeMeList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.likeMeList.get_likeMeList_failed, payload: {} })
    }
}

export const getLikeMeListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.likeMeList.get_likeMeList_waiting })
}

export const getLikeMeListMore = () => (dispatch) => {

}