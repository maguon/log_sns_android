import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getCollectionList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.collectionList.get_collectionList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.collectionList.get_collectionList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.collectionList.get_collectionList_failed, payload: {} })
    }
}

export const getCollectionListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.collectionList.get_collectionList_waiting })
}

export const getCollectionListMore = () => (dispatch) => {

}