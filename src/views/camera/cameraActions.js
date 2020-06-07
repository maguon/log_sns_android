import reduxActionTypes from '../../reduxActionTypes'
import httpRequest from '../../utils/HttpRequest'
import * as host from '../../utils/host'

export const uploadImage = reqParams => async (dispatch, getState) => {
    try {
        // console.log('this',this)
        // dispatch({ type: reduxActionTypes.camera.upload_image_waiting })
        const { loginReducer } = getState()
        const url = `${host.file_host}/user/${loginReducer.data.user._id}/image?imageType=0`
        // console.log('reqParams', {
        //     imageUrl:reqParams.uri, 
        //     imageType:'image', 
        //     imageName:reqParams.imgName
        // })
        console.log('url', url)
        const res = await httpRequest.postFile(url, {
            // imageUrl: reqParams.uri,
            // imageType: 'image/jpg',
            // imageName: reqParams.imgName,
            // key: 'file'
        })
        console.log('res', res)
        // if (res.success) {

        // } else {
        //     // dispatch({ type: reduxActionTypes.camera.upload_image_failed, payload: { failedMsg: `${res.msg}` } })

        // }
    } catch (err) {
        console.log('err', err)
        // dispatch({ type: reduxActionTypes.camera.upload_image_failed, payload: { failedMsg: `${err}` } })

    }
}

export const uploadVideo = () => async (dispatch, getState) => {
    try {

    } catch (err) {

    }
}