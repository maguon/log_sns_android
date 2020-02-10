import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'

const geoWebapiKey = '22d16ea40b6fdb3ebc3daa1b48db3287'

export const createArticle = reqParams => async (dispatch) => {
    try {
        dispatch({ type: reduxActionTypes.publishBlog.create_article_waiting })
        const url = `${host.base_host}`
        console.log('url', url)
        const res = await httpRequest.post(url, {})
        console.log('res', res)
        if (res.success) {

        } else {
            dispatch({ type: reduxActionTypes.publishBlog.create_article_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.publishBlog.create_article_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getCurrentAddr = reqParams => async (dispatch) => {
    try {
        dispatch({ type: reduxActionTypes.publishBlog.get_currentAddr_waiting })
        const url = `https://restapi.amap.com/v3/geocode/regeo?key=${geoWebapiKey}&location=${reqParams.longitude},${reqParams.latitude}&extensions=base&batch=false`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.info == 'OK') {
            console.log('ok')
            dispatch({
                type: reduxActionTypes.publishBlog.get_currentAddr_success, payload: {
                    currentAddr: res.regeocode.formatted_address,
                    longitude: reqParams.longitude,
                    latitude: reqParams.latitude
                }
            })
        } else {
        
            dispatch({ type: reduxActionTypes.publishBlog.get_currentAddr_failed, payload: { failedMsg: `${res.infocode}` } })

        }
    } catch (err) {
        console.log('err',err)
        dispatch({ type: reduxActionTypes.publishBlog.get_currentAddr_failed, payload: { failedMsg: `${err}` } })
    }
}