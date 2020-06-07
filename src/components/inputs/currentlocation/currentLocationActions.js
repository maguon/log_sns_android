import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'
import { geoWebapiKey } from '../../../utils/keys'


export const getCurrentLocation = reqParams => async (dispatch) => {
    try {
        dispatch({ type: reduxActionTypes.currentlocation.get_currentLocation_waiting })
        const url = `https://restapi.amap.com/v3/geocode/regeo?key=${geoWebapiKey}&location=${reqParams.longitude},${reqParams.latitude}&extensions=base&batch=false`
        const res = await httpRequest.get(url)
        if (res.info == 'OK') {
            dispatch({
                type: reduxActionTypes.currentlocation.get_currentLocation_success, payload: {
                    currentAddrName: res.regeocode.formatted_address,
                    currentAddrReal: `${res.regeocode.addressComponent.province ? res.regeocode.addressComponent.province : ''}${res.regeocode.addressComponent.city ? res.regeocode.addressComponent.city : ''}${res.regeocode.addressComponent.district ? res.regeocode.addressComponent.district : ''}${res.regeocode.addressComponent.township ? res.regeocode.addressComponent.township : ''}${res.regeocode.addressComponent.streetNumber.street ? res.regeocode.addressComponent.streetNumber.street : ''}${res.regeocode.addressComponent.streetNumber.number ? res.regeocode.addressComponent.streetNumber.number : ''}`,
                    longitude: reqParams.longitude,
                    latitude: reqParams.latitude
                }
            })
        } else {
            dispatch({ type: reduxActionTypes.currentlocation.get_currentLocation_failed, payload: { failedMsg: `${res.infocode}` } })
        }
    } catch (err) {
        dispatch({ type: reduxActionTypes.currentlocation.get_currentLocation_failed, payload: { failedMsg: `${err}` } })
    }
}

export const removeCurrentLocation = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.currentlocation.remove_currentLocation })
}