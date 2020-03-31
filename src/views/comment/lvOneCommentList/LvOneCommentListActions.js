import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'
import { Portal, Toast } from '@ant-design/react-native'

const pageSize = 1

export const getLvOneCommentList = reqParams => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgId=${reqParams.msgId}&msgType=1&level=1&start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.lvOneCommentList.get_lvOneCommentList_success, payload: {
                    lvOneCommentList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentList_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentList_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getLvOneCommentListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentList_waiting })

}

export const getLvOneCommentListMore = reqParams => async (dispatch, getState) => {
    const { loginReducer, LvOneCommentListReducer } = getState()
    if (LvOneCommentListReducer.getLvOneCommentListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getLvOneCommentListMore)
    } else {
        if (!LvOneCommentListReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/allMsgComment?msgId=${reqParams.msgId}&msgType=1&level=1&start=${LvOneCommentListReducer.data.lvOneCommentList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    dispatch({
                        type: reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_success, payload: {
                            lvOneCommentList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                // console.log('err', err)
                dispatch({ type: reduxActionTypes.lvOneCommentList.get_lvOneCommentListMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const likeLvOneComment = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.lvOneCommentList.like_lvOneComment_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userPraise`
        // console.log('url', url)
        const res = await httpRequest.post(url, reqParams)
        // console.log('res', res)
        // const res = { success: true }
        if (res.success) {
            // console.log('likeLoading',likeLoading)
            dispatch({ type: reduxActionTypes.lvOneCommentList.like_lvOneComment_success })
            Portal.remove(likeLoading)
            Toast.success("点赞成功！", 0.5)

        } else {
            dispatch({ type: reduxActionTypes.lvOneCommentList.like_lvOneComment_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.lvOneCommentList.like_lvOneComment_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)
    }
}