import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getVoteList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.voteList.get_voteList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.voteList.get_voteList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.voteList.get_voteList_failed, payload: {} })
    }
}

export const getVoteListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.voteList.get_voteList_waiting })
}

export const getVoteListMore = () => (dispatch) => {

}