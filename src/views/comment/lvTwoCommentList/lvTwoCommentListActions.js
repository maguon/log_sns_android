import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'
import { Portal, Toast } from '@ant-design/react-native'

const pageSize = 20

export const getLvTwoCommentList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgComId=${reqParams.parentCommentId}&msgType=1&start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_success, payload: {
                    lvTwoCommentList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getLvTwoCommentListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentList_waiting })
}

export const getLvTwoCommentListMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, lvTwoCommentListReducer } = getState()
    if (lvTwoCommentListReducer.getLvTwoCommentListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getLvTwoCommentListMore)
    } else {
        if (!lvTwoCommentListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgComId=${reqParams.parentCommentId}&msgType=1&start=${lvTwoCommentListReducer.data.lvTwoCommentList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_success, payload: {
                            lvTwoCommentList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                // console.log('err', err)
                dispatch({ type: reduxActionTypes.lvTwoCommentList.get_lvTwoCommentListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}


export const lvTwoCommentList = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.lvTwoCommentList.like_lvTwoComment_waiting, payload: {} })
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
                dispatch({ type: reduxActionTypes.lvTwoCommentList.like_lvTwoComment_success, payload: { commentInfo: resComment.result[0] } })
                Portal.remove(likeLoading)
                Toast.success("点赞成功！", 0.5)
            } else {
                dispatch({ type: reduxActionTypes.lvTwoCommentList.like_lvTwoComment_failed, payload: { failedMsg: `${resComment.msg}` } })
                Portal.remove(likeLoading)
                Toast.success("点赞失败！", 0.5)
            }
        } else {
            dispatch({ type: reduxActionTypes.lvTwoCommentList.like_lvTwoComment_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.lvTwoCommentList.like_lvTwoComment_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)
    }
}