import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'
import { Portal, Toast } from '@ant-design/react-native'

const pageSize = 20

export const getHotListForHome = () => async (dispatch, getState) => {
    try {
        const { loginReducer } = getState()
        // console.log('reqParams', reqParams)
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?status=1&start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.hotListForHome.get_hotListForHome_success, payload: {
                    articleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHome_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHome_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getHotListForHomeWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHome_waiting })

}

export const getHotListForHomeMore = () => async (dispatch, getState) => {
    const { loginReducer, hotListForHomeReducer } = getState()
    if (hotListForHomeReducer.getHotListForHomeMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getHotListForHomeMore)
    } else {
        if (!hotListForHomeReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHomeMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?status=1&start=${hotListForHomeReducer.data.articleList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.hotListForHome.get_hotListForHomeMore_success, payload: {
                            articleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHomeMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                // console.log('err', err)
                dispatch({ type: reduxActionTypes.hotListForHome.get_hotListForHomeMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const likeArticle = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.hotListForHome.like_commentForHotList_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userPraise`
        console.log('url', url)
        const res = await httpRequest.post(url, {
            type: 1,
            msgId: reqParams.msgId,
            msgUserId: reqParams.msgUserId
        })
        console.log('res', res)
        if (res.success) {
            const urlArticle = `${host.base_host}/user/${loginReducer.data.user._id}/msg?msgId=${reqParams.msgId}`
            console.log('urlArticle', urlArticle)
            const resArticle = await httpRequest.get(urlArticle)
            console.log('resArticle', resArticle)
            if (resArticle.success) {
                dispatch({ type: reduxActionTypes.hotListForHome.like_commentForHotList_success, payload: { articleInfo: resArticle.result[0] } })
                Portal.remove(likeLoading)
                Toast.success("点赞成功！", 0.5)
            } else {
                dispatch({ type: reduxActionTypes.hotListForHome.like_commentForHotList_failed, payload: { failedMsg: `${resArticle.msg}` } })
                Portal.remove(likeLoading)
                Toast.success("点赞失败！", 0.5)
            }
        } else {
            dispatch({ type: reduxActionTypes.hotListForHome.like_commentForHotList_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.hotListForHome.like_commentForHotList_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)
    }
}