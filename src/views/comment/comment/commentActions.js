import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { Portal, Toast } from '@ant-design/react-native'

export const createComment = reqParam => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('发送评论', 0)
        // console.log('reqParam',reqParam)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.comment.create_comment_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msgComment`
        // console.log('url', url)
        const res = await httpRequest.post(url, reqParam)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.comment.create_comment_success })
            Portal.remove(likeLoading)
            Toast.success("评论成功！", 0.5)
        } else {
            dispatch({ type: reduxActionTypes.comment.create_comment_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("评论失败！", 0.5)
        }

    } catch (err) {
        dispatch({ type: reduxActionTypes.comment.create_comment_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("评论失败！", 0.5)
    }
}