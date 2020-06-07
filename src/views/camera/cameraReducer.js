import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxActionTypes'

const initialState = {
    data: {
        imageUri: '',
        videoUri: '',
        uploadImageUri: '',
        uploadVideoUri: '',
        opType: 0  //0无操作，1：takePicture , 2:recordVideo,3：uploadImage，4：uploadVideo
    },
    uploadImage: {
        isResultStatus: 0,
        failedMsg: ''
    },
    uploadVideo: {
        isResultStatus: 0,
        failedMsg: ''
    },
    takePicture: {
        isResultStatus: 0,
        failedMsg: ''
    },
    recordVideo: {
        isResultStatus: 0,
        failedMsg: ''
    }
}

export default handleActions({
    [reduxActionTypes.camera.upload_image_success]: (state, action) => {
        const { payload: { uploadImageUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                uploadImageUri,
                opType: 3
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
            data: {
                ...state.data,
                opType: 3
            },
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
            data: {
                ...state.data,
                opType: 3
            },
            uploadImage: {
                ...state.uploadImage,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.camera.upload_video_success]: (state, action) => {
        const { payload: { uploadVideoUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                uploadVideoUri,
                opType: 4
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
            data: {
                ...state.data,
                opType: 4
            },
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
            data: {
                ...state.data,
                opType: 4
            },
            uploadVideo: {
                ...state.uploadVideo,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.camera.takePicture_success]: (state, action) => {
        const { payload: { imageUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                imageUri,
                opType: 1
            },
            takePicture: {
                ...state.takePicture,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.camera.takePicture_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            data: {
                ...state.data,
                opType: 1
            },
            takePicture: {
                ...state.takePicture,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.camera.takePicture_waiting]: (state, action) => {
        return {
            ...state,
            data: {
                ...state.data,
                opType: 1
            },
            takePicture: {
                ...state.takePicture,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.camera.recordVideo_success]: (state, action) => {
        const { payload: { videoUri } } = action
        return {
            ...state,
            data: {
                ...state.data,
                videoUri,
                opType: 2
            },
            recordVideo: {
                ...state.recordVideo,
                isResultStatus: 2
            }
        }
    },
    [reduxActionTypes.camera.recordVideo_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            data: {
                ...state.data,
                opType: 2
            },
            recordVideo: {
                ...state.recordVideo,
                isResultStatus: 3,
                failedMsg
            }
        }
    },
    [reduxActionTypes.camera.recordVideo_waiting]: (state, action) => {
        return {
            ...state,
            data: {
                ...state.data,
                opType: 2
            },
            recordVideo: {
                ...state.recordVideo,
                isResultStatus: 1
            }
        }
    },

    [reduxActionTypes.camera.reset_camera]: (state, action) => {
        return {
            ...initialState
        }
    }

}, initialState)