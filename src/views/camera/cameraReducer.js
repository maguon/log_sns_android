import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'


const initialState = {
    data: {
        imageUri: '',
        videoUri: ''
    },
    uploadImage: {
        isResultStatus: 0,
        failedMsg: ''
    },
    uploadVideo: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.camera.upload_image_success]: (state, action) => {
        const { payload: { imageUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                imageUri
            },
            uploadImage: {
                ...state.uploadImage,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.camera.upload_image_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            uploadImage: {
                ...state.uploadImage,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.camera.upload_image_waiting]: (state, action) => {
        return {
            ...state,
            uploadImage: {
                ...state.uploadImage,
                isResultStatus: 1
            }
        }
    },



    [reduxActionTypes.camera.upload_video_success]: (state, action) => {
        const { payload: { videoUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                videoUri
            },
            uploadVideo: {
                ...state.uploadVideo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.camera.upload_video_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            uploadVideo: {
                ...state.uploadVideo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.camera.upload_video_waiting]: (state, action) => {
        return {
            ...state,
            uploadVideo: {
                ...state.uploadVideo,
                isResultStatus: 1
            }
        }
    }

}, initialState)