import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 1

export const getCommentList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userMsgComment?start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.myCommentList.get_myCommentList_success, payload: {
                    commentList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err',err)
        dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getCommentListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.myCommentList.get_myCommentList_waiting })
}

export const getCommentListMore = () => async (dispatch, getState) => {
    const { loginReducer, myCommentListReducer } = getState()
    if (myCommentListReducer.getCommentListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getCommentListMore)
    } else {
        if (!myCommentListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.myCommentList.get_myCommentListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/userMsgComment?start=${(myCommentListReducer.data.commentList.length)}&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.myCommentList.get_myCommentListMore_success, payload: {
                            followList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.myCommentList.get_myCommentListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err',err)
                dispatch({ type: reduxActionTypes.myCommentList.get_myCommentListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}