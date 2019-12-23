import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

export const getArticleList = () => async (dispatch) => {
    try {
        const url = ``
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.articleList.get_articleList_success, payload: {} })
        } else {
            dispatch({ type: reduxActionTypes.articleList.get_articleList_failed, payload: {} })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.articleList.get_articleList_failed, payload: {} })
    }
}

export const getArticleListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.articleList.get_articleList_waiting })
}

export const getArticleListMore = () => (dispatch) => {

}
