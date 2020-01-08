import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'

const pageSize = 1

export const getArticleListOfFriend = reqParams => (dispatch) => {
    try {
        const url = `${host}/user/${reqParams.friendId}/userInfoAndDetail`
        console.log('url', url)
        const res = httpRequest.get(url)

    } catch (err) {

    }
}

export const getArticleListOfFriendWaiting = reqParams => (dispatch) => {
    dispatch({type:reduxActionTypes})
}

export const getArticleListOfFriendMore = reqParams => (dispatch) => {

}