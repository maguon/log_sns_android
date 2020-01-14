import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'

const pageSize = 1

export const getComment = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userMsgComment?msgId=${reqParams.msgId}&msgType=1&level=1&start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_success, payload: {
                    commentList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getCommentWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfo_waiting })

}

export const getCommentMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, textArticleInfoReducer } = getState()
    if (textArticleInfoReducer.getCommentMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getCommentMore)
    } else {
        if (!textArticleInfoReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/userMsgComment?
                msgId=${reqParams.msgId}&msgType=1&level=1&start=${textArticleInfoReducer.data.commentList.length}&size=${pageSize}`

                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_success, payload: {
                            commentList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)

                dispatch({ type: reduxActionTypes.textArticleInfo.get_commentForTextArticleInfoMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const getTextArticleInfo = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?msgId=${reqParams.msgId}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.textArticleInfo.get_textArticleInfo_success, payload: { articleInfo: res.result[0] } })
        } else {
            dispatch({ type: reduxActionTypes.textArticleInfo.get_textArticleInfo_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err',err)
        dispatch({ type: reduxActionTypes.textArticleInfo.get_textArticleInfo_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getTextArticleInfoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.textArticleInfo.get_textArticleInfo_waiting, payload: {} })
}