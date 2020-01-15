import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'

const pageSize = 1

export const getCommentList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgComId=${reqParams.parentCommentId}&msgType=1&start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.commentList.get_commentList_success, payload: {
                    commentList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.commentList.get_commentList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.commentList.get_commentList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getCommentListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.commentList.get_commentList_waiting })
}

export const getCommentListMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, commentListReducer } = getState()
    if (commentListReducer.getCommentListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getCommentListMore)
    } else {
        if (!commentListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.commentList.get_commentListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgComId=${reqParams.parentCommentId}&msgType=1&start=${commentListReducer.data.commentList.length}&size=${pageSize}`

                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.commentList.get_commentListMore_success, payload: {
                            commentList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.commentList.get_commentListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)

                dispatch({ type: reduxActionTypes.commentList.get_commentListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}