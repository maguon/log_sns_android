import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'
import NavigationService from '../../routers/NavigationService'


export const uploadImage = (key, reqParams) => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.camera.upload_image_waiting })
        const { loginReducer } = getState()
        const url = `${host.file_host}/user/${loginReducer.data.user._id}/image?imageType=0`
        // console.log('reqParams', reqParams)
        // console.log('url', url)
        const res = await httpRequest.postFile(url, key, reqParams)
        // console.log('res', res)
        if (res.success) {
            dispatch({ type: reduxActionTypes.camera.upload_image_success, payload: { uploadImageUri: res.imageId } })

        } else {
            dispatch({ type: reduxActionTypes.camera.upload_image_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.camera.upload_image_failed, payload: { failedMsg: `${err}` } })
    }
}

export const uploadVideo = (key, reqParams) => async (dispatch, getState) => {
    try {
        dispatch({ type: reduxActionTypes.camera.upload_video_waiting })
        const { loginReducer } = getState()
        const url = `${host.file_host}/user/${loginReducer.data.user._id}/media`
        console.log('reqParams', reqParams)
        // console.log('url', url)
        // console.log('key', key)
        const res = await httpRequest.postFile(url, key, reqParams)
        console.log('res', res)
        if (res.success) {
            dispatch({
                type: reduxActionTypes.camera.upload_video_success, payload: {
                    uploadVideoUri: res.result.url,
                    uploadPreViewUri: res.result.preview
                }
            })
            dispatch(resetCamera())
        } else {
            dispatch({ type: reduxActionTypes.camera.upload_video_failed, payload: { failedMsg: `${res.msg}` } })
        }
    } catch (err) {
        console.log('err', err)
        dispatch({ type: reduxActionTypes.camera.upload_image_failed, payload: { failedMsg: `${err}` } })
    }
}

export const takePictureSuccess = imageUri => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.takePicture_success, payload: { imageUri } })
}

export const takePictureFailed = failedMsg => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.takePicture_failed, payload: { failedMsg } })
}

export const takePictureWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.takePicture_waiting })
}

export const recordVideoSuccess = videoUri => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.recordVideo_success, payload: { videoUri } })
}

export const recordVideoFailed = failedMsg => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.recordVideo_failed, payload: { failedMsg } })
}

export const recordVideoWaiting = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.recordVideo_waiting })
}

export const resetCamera = () => (dispatch) => {
    dispatch({ type: reduxActionTypes.camera.reset_camera })
}