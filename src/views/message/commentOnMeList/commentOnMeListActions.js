import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 1

export const getCommentOnMeList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)

        if (res.success) {
            dispatch({
                type: reduxActionTypes.commentOnMeList.get_commentOnMeList_success, payload: {
                    commentOnMeList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_failed, payload: {} })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_failed, payload: {} })
    }
}

export const getCommentOnMeListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeList_waiting })
}

export const getCommentOnMeListMore = () => async (dispatch, getState) => {
    const { loginReducer, commentOnMeListReducer } = getState()
    if (commentOnMeListReducer.getCommentOnMeListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getCommentOnMeListMore)
    } else {
        if (!commentOnMeListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=${(commentOnMeListReducer.data.commentOnMeList.length)}&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.commentOnMeList.get_commentOnMeListMore_success, payload: {
                            commentOnMeList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)

                dispatch({ type: reduxActionTypes.commentOnMeList.get_commentOnMeListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}