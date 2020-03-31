import reduxActionTypes from '../../../../reduxActionTypes'
import httpRequest from '../../../../utils/HttpRequest'
import * as host from '../../../../utils/host'
import { sleep } from '../../../../utils/util'
import { Portal, Toast } from '@ant-design/react-native'

const pageSize = 20

export const getComment = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgId=${reqParams.msgId}&msgType=1&level=1&start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
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
        // console.log('err', err)
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
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgId=${reqParams.msgId}&msgType=1&level=1&start=${textArticleInfoReducer.data.commentList.length}&size=${pageSize}`

                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

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
                // console.log('err', err)
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

export const likeComment = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.textArticleInfo.like_commentForTextArticleInfo_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userPraise`
        // console.log('url', url)
        const res = await httpRequest.post(url, {
            type: 2,
            msgId: reqParams.msgId,
            msgUserId: reqParams.msgUserId,
            msgComId: reqParams.msgComId,
            msgComUserId: reqParams.msgComUserId
        })
        // console.log('res', res)
        if (res.success) {
            const urlComment = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?oneMsgComId=${reqParams.msgComId}`
            // console.log('urlComment', urlComment)
            const resComment = await httpRequest.get(urlComment)
            // console.log('resComment', resComment)
            if (resComment.success) {
                dispatch({ type: reduxActionTypes.textArticleInfo.like_commentForTextArticleInfo_success, payload: { commentInfo: resComment.result[0] } })
                Portal.remove(likeLoading)
                Toast.success("点赞成功！", 0.5)
            } else {
                dispatch({ type: reduxActionTypes.textArticleInfo.like_commentForTextArticleInfo_failed, payload: { failedMsg: `${resComment.msg}` } })
                Portal.remove(likeLoading)
                Toast.success("点赞失败！", 0.5)
            }
        } else {
            dispatch({ type: reduxActionTypes.textArticleInfo.like_commentForTextArticleInfo_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.textArticleInfo.like_commentForTextArticleInfo_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)
    }
}