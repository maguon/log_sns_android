import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { sleep } from '../../../utils/util'
import { PermissionsAndroid } from 'react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { geoKey } from '../../../utils/keys'

const pageSize = 1

export const getNearbyListForHome = () => async (dispatch, getState) => {
    try {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
        await init({ android: geoKey })
        Geolocation.getCurrentPosition(async ({ coords }) => {
            try {
                const { loginReducer } = getState()
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/nearbyMsg?address=%5B${coords.longitude}%2C${coords.latitude}%5D&radius=1&start=0&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)
                if (res.success) {
                    dispatch({
                        type: reduxActionTypes.nearbyListForHome.get_nearbyListForHome_success, payload: {
                            articleList: res.result,
                            isCompleted: (res.result.length == 0 || res.result.length % pageSize != 0),
                            coords: { longitude: coords.longitude, latitude: coords.latitude }
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHome_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                console.log('err', err)
                dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHome_failed, payload: { failedMsg: `${err}` } })
            }
        })
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHome_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getNearbyListForHomeWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHome_waiting })

}

export const getNearbyListForHomeMore = () => async (dispatch, getState) => {
    const { loginReducer, nearbyListForHomeReducer } = getState()
    console.log('nearbyListForHomeReducer',nearbyListForHomeReducer)
    if (nearbyListForHomeReducer.getNearbyListForHomeMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(getNearbyListForHomeMore)
    } else {
        if (!nearbyListForHomeReducer.data.isCompleted) {
            dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_waiting, payload: {} })
            try {
                const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg?start=${nearbyListForHomeReducer.data.articleList.length}&size=${pageSize}`
                console.log('url', url)
                const res = await httpRequest.get(url)
                console.log('res', res)

                if (res.success) {
                    const isCompleted = res.result.length == 0 || res.result.length % pageSize != 0
                    // if (isCompleted) {
                    //     ToastAndroid.show('已全部加载完毕！', 10)
                    // }
                    dispatch({
                        type: reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_success, payload: {
                            articleList: res.result,
                            isCompleted
                        }
                    })
                } else {
                    dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_failed, payload: { failedMsg: `${res.msg}` } })
                }
            } catch (err) {
                dispatch({ type: reduxActionTypes.nearbyListForHome.get_nearbyListForHomeMore_failed, payload: { failedMsg: `${err}` } })
            }
        }
    }
}