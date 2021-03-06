import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'
import { Portal, Toast } from '@ant-design/react-native'

export const delArticle = reqParams => async (dispatch, getState) => {
    try {
        const delLoading = Toast.loading('删除文章', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/messages/${reqParams.messageId}/del`
        const res = await httpRequest.del(url)
        if (res.success) {
            dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_success, payload: {} })
            dispatch({ type: reduxActionTypes.articleAllList.rm_itemForArticleAllList_byId, payload: { messageId: reqParams.messageId } })
            dispatch({ type: reduxActionTypes.imageArticleList.rm_itemForImageArticleList_byId, payload: { messageId: reqParams.messageId } })
            dispatch({ type: reduxActionTypes.videoArticleList.rm_itemForVideoArticleList_byId, payload: { messageId: reqParams.messageId } })
            dispatch({ type: reduxActionTypes.seekHelpArticleList.rm_itemForSeekHelpArticleList_byId, payload: { messageId: reqParams.messageId } })
            dispatch({ type: reduxActionTypes.textArticleList.rm_itemForTextArticleList_byId, payload: { messageId: reqParams.messageId } })
            Portal.remove(delLoading)
            Toast.success("删除成功！", 0.5)
        } else {
            dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(delLoading)
            Toast.success("删除失败！", 0.5)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.articleList.del_articleForMyself_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(delLoading)
        Toast.success("删除失败！", 0.5)
    }
}

export const likeArticle = reqParams => async (dispatch, getState) => {
    try {
        const likeLoading = Toast.loading('点赞', 0)
        const { loginReducer } = getState()
        dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_waiting, payload: {} })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/userPraise`
        const res = await httpRequest.post(url, {
            type: 1,
            msgId: reqParams.msgId,
            msgUserId: reqParams.msgUserId
        })
        if (res.success) {
            const urlArticle = `${host.base_host}/user/${loginReducer.data.user._id}/msg?msgId=${reqParams.msgId}`
            const resArticle = await httpRequest.get(urlArticle)
            if (res.success) {
                dispatch({ type: reduxActionTypes.articleAllList.update_itemForArticleAllList_byId, payload: { article: resArticle.result[0] } })
                dispatch({ type: reduxActionTypes.imageArticleList.update_itemForImageArticleList_byId, payload: { article: resArticle.result[0] } })
                dispatch({ type: reduxActionTypes.textArticleList.update_itemForTextArticleList_byId, payload: { article: resArticle.result[0] } })
                dispatch({ type: reduxActionTypes.videoArticleList.update_itemForVideoArticleList_byId, payload: { article: resArticle.result[0] } })
                dispatch({ type: reduxActionTypes.seekHelpArticleList.update_itemForSeekHelpArticleList_byId, payload: { article: resArticle.result[0] } })
                dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_success, payload: {} })
                Portal.remove(likeLoading)
                Toast.success("点赞成功！", 0.5)
            } else {
                dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_failed, payload: { failedMsg: `${resArticle.msg}` } })
                Portal.remove(likeLoading)
                Toast.success("点赞失败！", 0.5)
            }
        } else {
            dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_failed, payload: { failedMsg: `${res.msg}` } })
            Portal.remove(likeLoading)
            Toast.success("点赞失败！", 0.5)
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.articleList.like_articleForMyself_failed, payload: { failedMsg: `${err}` } })
        Portal.remove(likeLoading)
        Toast.success("点赞失败！", 0.5)
    }
}
