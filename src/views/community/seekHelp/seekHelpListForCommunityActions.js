import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'

const pageSize = 1

export const getSeekHelpList = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=0&size=${pageSize}`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)

        if (res.success) {
            dispatch({
                type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_success, payload: {
                    articleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunity_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getSeekHelpListWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.seekHelpListForCommunity.getseekHelpListForCommunity_waiting })
}

export const getSeekHelpListMore = () => async (dispatch, getState) => {
    const { loginReducer, seekHelpListForCommunityReducer } = getState()
    if (seekHelpListForCommunityReducer.getSeekHelpListMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getSeekHelpListMore)
    } else {
        if (!seekHelpListForCommunityReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/userBeMsgComment?start=${(seekHelpListForCommunityReducer.data.articleList.length)}&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_success, payload: {
                            articleList: res.result,
                            isCompleted,
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)

                dispatch({ type: reduxActionTypes.seekHelpListForCommunity.get_seekHelpListForCommunityMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}