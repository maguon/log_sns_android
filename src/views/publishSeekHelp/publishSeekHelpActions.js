import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'

const geoWebapiKey = '22d16ea40b6fdb3ebc3daa1b48db3287'

export const createSeekHelp = reqParams => async (dispatch, getState) => {
    try {
        console.log('reqParams', reqParams)
        const { publishBlogReducer: { data }, loginReducer } = getState()
        dispatch({ type: reduxActionTypes.publishSeekHelp.create_seekHelp_waiting })
        const url = `${host.base_host}/user/${loginReducer.data.user._id}/msg`
        console.log('url', url)
        let params = {}
        if (reqParams.addressShow) {
            params = {
                type: 2,
                carrier: 1,
                info: reqParams.info,
                address: [data.longitude, data.latitude],
                addressName: data.currentAddrName,
                addressReal: data.currentAddrReal,
                addressShow: 1,
            }
        } else {
            params = {
                type: 2,
                carrier: 1,
                info: reqParams.info,
                addressShow: 0,
            }
        }
        console.log('params', params)
        const res = await httpRequest.post(url, params)
        console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.publishSeekHelp.create_seekHelp_success })
        } else {
            dispatch({ type: reduxActionTypes.publishSeekHelp.create_seekHelp_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.publishSeekHelp.create_seekHelp_failed, payload: { failedMsg: `${err}` } })
    }
}

export const getCurrentAddr = reqParams => async (dispatch) => {
    try {
        dispatch({ type: reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_waiting })
        const url = `https://restapi.amap.com/v3/geocode/regeo?key=${geoWebapiKey}&location=${reqParams.longitude},${reqParams.latitude}&extensions=base&batch=false`
        console.log('url', url)
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.info == 'OK') {
            // console.log('ok')
            dispatch({
                type: reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_success, payload: {
                    currentAddrName: res.regeocode.formatted_address,
                    currentAddrReal: `${res.regeocode.addressComponent.province ? res.regeocode.addressComponent.province : ''}${res.regeocode.addressComponent.city ? res.regeocode.addressComponent.city : ''}${res.regeocode.addressComponent.district ? res.regeocode.addressComponent.district : ''}${res.regeocode.addressComponent.township ? res.regeocode.addressComponent.township : ''}${res.regeocode.addressComponent.streetNumber.street ? res.regeocode.addressComponent.streetNumber.street : ''}${res.regeocode.addressComponent.streetNumber.number ? res.regeocode.addressComponent.streetNumber.number : ''}`,
                    longitude: reqParams.longitude,
                    latitude: reqParams.latitude
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_failed, payload: { failedMsg: `${res.infocode}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.publishSeekHelp.get_currentAddrForSeekHelp_failed, payload: { failedMsg: `${err}` } })
    }
}

export const removeCurrentAddr = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.publishSeekHelp.remove_currentAddrForSeekHelp })
}