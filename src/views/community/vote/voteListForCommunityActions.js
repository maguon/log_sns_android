import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 20

export const getVoteList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/vote?start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.voteListForCommunity.get_voteListForCommunity_success, payload: {
                    voteList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunity_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunity_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getVoteListWaiting = () => (dispatch) => {

    dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunity_waiting })
}

export const getVoteListMore = () => async (dispatch, getState) => {
    const { loginReducer, voteListForCommunityReducer } = getState()
    if (voteListForCommunityReducer.getVoteListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getVoteListMore)
    } else {
        if (!voteListForCommunityReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/vote?start=${(voteListForCommunityReducer.data.voteList.length)}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_success, payload: {
                            voteList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                // console.log('err', err)
                dispatch({ type: reduxActionTypes.voteListForCommunity.get_voteListForCommunityMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}