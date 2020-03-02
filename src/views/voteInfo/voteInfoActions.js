import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'
import { Portal, Toast } from '@ant-design/react-native'


export const vote = reqParams => async (dispatch, getState) => {
    try {
        const delLoading = Toast.loading('投票', 0)
        dispatch({ type: reduxActionTypes.voteInfo.vote_waiting, payload: {} })
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userVote`
        const res = await httpRequest.post(url, reqParams)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.voteInfo.vote_success, payload: {} })
            Portal.remove(delLoading)
            Toast.success("投票成功！", 0.5)
        } else {
            dispatch({ type: reduxActionTypes.voteInfo.vote_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(delLoading)
            Toast.success(`投票失败：${res.msg}`, 0.5)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.voteInfo.vote_failed, payload: { failedMsg: `${err}` } })
        Toast.success(`投票失败：${err}`, 0.5)
    }
}

export const setVote = voteInfo => (dispatch) => {
    dispatch({ type: reduxActionTypes.voteInfo.set_voteInfo, payload: { voteInfo } })
}