import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'
import { sleep } from '../../utils/util'

const pageSize = 20

export const getArticleListOfFriend = reqParams => async (dispatch, getState) => {
    try {
        // console.log('reqParams', reqParams)
        const { loginReducer } = getState()
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?sendMsgUserId=${reqParams.friendId}&start=0&size=${pageSize}`
        // console.log('url', url)
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.articleListOfFriend.get_articleListOfFriend_success, payload: {
                    articleList: res.result,
                    isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0)
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriend_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        // console.log('err', err)
        dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriend_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getArticleListOfFriendWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriend_waiting, payload: {} })
}

export const getArticleListOfFriendMore = reqParams => async (dispatch, getState) => {
    const { articleListOfFriendReducer, loginReducer } = getState()
    if (articleListOfFriendReducer.getArticleListOfFriendMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getArticleListOfFriendMore)
    } else {
        if (!articleListOfFriendReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?sendMsgUserId=${reqParams.friendId}&start=${articleListOfFriendReducer.data.articleList.length}&size=${pageSize}`
                // console.log('url', url)
                const res = await httpRequest.get(url)
                // console.log('res', res)
                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_success, payload: {
                            articleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                // console.log('err', err)
                dispatch({ type: reduxActionTypes.articleListOfFriend.get_articleListOfFriendMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}

export const likeArticle = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.articleListOfFriend.like_articleForFriend_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userPraise`
        const res = await httpRequest.post(url, {
            type: 1,
            _messageId: reqParams.messageId
        })
        if (res.success) {
            const urlArticle = `${host.base_host}/user/${loginReducer.data.user._id}/allMessages?${reqParams.messageId}`
            const resArticle = await httpRequest.get(urlArticle)
            if (res.success) {
                dispatch({ type: reduxActionTypes.articleListOfFriend.like_articleForFriend_success, payload: {} })
                Portal.remove(likeLoading)
                Toast.success("点赞成功！", 0.5)
            } else {
                dispatch({ type: reduxActionTypes.articleListOfFriend.like_articleForFriend_failed, payload: { failedMsg: `${resArticle.msg}` } })
                Portal.remove(likeLoading)
                Toast.success("点赞失败！", 0.5)
            }

        } else {
            dispatch({ type: reduxActionTypes.articleListOfFriend.like_articleForFriend_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.articleListOfFriend.like_articleForFriend_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)

    }
}
