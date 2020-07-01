import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Animated, TouchableOpacity, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CameraProgress from '../../components/CameraProgress'
import * as CacheManager from 'react-native-http-cache'
import { Button } from '@ant-design/react-native'
import reduxActions from '../../reduxActions'
import { connect } from 'react-redux'
import { LogLevel, RNFFmpeg } from 'react-native-ffmpeg'
import RNFS from 'react-native-fs'
import {video_host} from '../../utils/host'


class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBase64: '',
            type: RNCamera.Constants.Type.back,   //front   back
            flashMode: RNCamera.Constants.FlashMode.off,   //on  auto  torch
            paused: false
        }
        this.uploadImage = this.uploadImage.bind(this)
        this.uploadVideo = this.uploadVideo.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        // console.log('nextProps', nextProps)
        const { cameraReducer: { data: { opType, uploadImageUri ,uploadVideoUri}, uploadImage ,uploadVideo}, navigation } = nextProps
        //0无操作，1：takePicture , 2:recordVideo,3：uploadImage，4：uploadVideo
        if (opType == 0) {
            this.resetCamera()
        } else if (opType == 3) {
            if (uploadImage.isResultStatus == 2) {
                navigation.navigate('PublishPictureBlog', { imageUri: uploadImageUri })
                this.props.resetCamera()
            }
        } else if (opType == 4) {
            console.log('nextProps', nextProps)
            if (uploadVideo.isResultStatus == 2) {
                navigation.navigate('PublishVideoBlog', {
                    uri: uploadVideoUri
                })
            }

        }
    }

    requestReadPermission = async () => {
        try {
            //返回string类型
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要读写权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("你已获取了读写权限")
            } else {
                console.log("获取读写权限失败")
            }
        } catch (err) {
            console.log(err.toString())
        }
    }

    changeCameraType = () => {
        if (this.state.type === RNCamera.Constants.Type.back) {
            this.setState({ type: RNCamera.Constants.Type.front })
        } else if (this.state.type === RNCamera.Constants.Type.front) {
            this.setState({ type: RNCamera.Constants.Type.back })
        }
    }

    changeCameraFlashMode = () => {
        if (this.state.flashMode === RNCamera.Constants.FlashMode.auto) {
            this.setState({ flashMode: RNCamera.Constants.FlashMode.on })
        } else if (this.state.flashMode === RNCamera.Constants.FlashMode.on) {
            this.setState({ flashMode: RNCamera.Constants.FlashMode.off })
        } else if (this.state.flashMode === RNCamera.Constants.FlashMode.off) {
            this.setState({ flashMode: RNCamera.Constants.FlashMode.auto })
        }
    }

    takePicture = async () => {
        const { uploadImage, takePictureSuccess, takePictureFailed, takePictureWaiting } = this.props
        try {
            if (this.camera) {
                this.setState({ paused: true })
                takePictureWaiting()
                const options = {
                    quality: 0.5,
                    width: 900,
                    pauseAfterCapture: true
                }
                const data = await this.camera.takePictureAsync(options)
                takePictureSuccess(data.uri)
            }
        } catch (err) {
            takePictureFailed(`${err}`)
        }
    }

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }

    getPreview = (uri, previewImgUri) => {
        //截取视频第一帧缩略图 保存缓存路径
        console.log('=================================')

        console.log('previewImgUri', previewImgUri)
        return RNFFmpeg.execute(` -i ${uri} -ss 00:00:01  -frames:v 1  -f image2 -y ${previewImgUri}`)

    }

    compressVideo = (uri, compressUri) => {
        //压缩视频
        return RNFFmpeg.executeWithArguments(["-i", uri, "-b:v", "2M", "-vf", "scale=-2:1080", compressUri])
    }

    recordVideoStart = async () => {
        const { uploadImage, recordVideoSuccess, recordVideoFailed, recordVideoWaiting } = this.props
        try {
            recordVideoWaiting()
            if (this.camera) {
                const options = {
                    quality: 0.5,
                    width: 900,
                }
                const data = await this.camera.recordAsync(options)
                console.log('data', data)
                if (data && data.uri) {
                    const compressUri = `${RNFS.CachesDirectoryPath}/Camera/${this.guid()}.mp4`
                    const compressRes = await this.compressVideo(data.uri, compressUri)
                    console.log('data.uri', data.uri)
                    console.log('compressUri', compressUri)
                    if (compressRes.rc == 0) {
                        const unlinkRes = await RNFS.unlink(data.uri)
                        recordVideoSuccess(compressUri)
                    }
                }
            }
        } catch (err) {
            console.log('err', err)
            recordVideoFailed(`${err}`)
        }
    }

    recordVideoStop = () => {
        if (this.camera) {
            this.camera.stopRecording()
            this.camera.pausePreview()
            this.setState({ paused: true })
        }
    }

    resetCamera = () => {
        this.camera.resumePreview()
        this.setState({ paused: false })
    }

    upload = () => {
        const { cameraReducer } = this.props
        if (cameraReducer.data.opType == 1) {
            this.uploadImage()
        } else if (cameraReducer.data.opType == 2) {
            this.uploadVideo()
        }
    }

    uploadImage = () => {
        const { cameraReducer } = this.props
        const filePathArr = cameraReducer.data.imageUri.split('/')
        this.props.uploadImage('image', {
            uri: cameraReducer.data.imageUri,
            type: 'image/jpeg',
            name: filePathArr[filePathArr.length - 1]
        })
    }

    uploadVideo = async () => {
        const { navigation, cameraReducer } = this.props
        console.log('cameraReducer', cameraReducer)
        const previewImgName = `${this.guid()}.jpg`
        const previewImgUri = `${RNFS.CachesDirectoryPath}/Camera/${previewImgName}`
        const previewImgRes = await this.getPreview(cameraReducer.data.videoUri, previewImgUri)
        console.log('previewImgRes', previewImgRes)
        if (previewImgRes.rc == 0) {
            const filePathArr = cameraReducer.data.videoUri.split('/')
            this.props.uploadVideo('video', {
                uri: `file://${cameraReducer.data.videoUri}`,
                preview: `file://${previewImgUri}`,
                type: 'video/mp4',
                name: filePathArr[filePathArr.length - 1]
            })
            this.setState({ paused: false })

        }
    }

    render() {
        const { navigation, uploadImage, cameraReducer } = this.props

        console.log('cameraReducer', cameraReducer)
        let flag = 1  //1:拍照，2：完成  3:空白

        //判断是否是拍照，拍照流程
        const takePictureFlag = 1 //1:初始化：可拍照，2:拍照处理中：无button 3：拍照处理完成:显示完成按钮，重置按钮，4:图片上传中：无button,5:图片上传完毕：回到1状态  

        //判断是否是拍摄视频
        if (cameraReducer.data.opType == 1) {
            if (cameraReducer.takePicture.isResultStatus == 1)
                flag = 3
            else if (cameraReducer.takePicture.isResultStatus == 2)
                flag = 2
        } else if (cameraReducer.data.opType == 2) {
            if (cameraReducer.recordVideo.isResultStatus == 1)
                flag = 1
            else if (cameraReducer.recordVideo.isResultStatus == 2)
                flag = 2
        }
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref
                    }}
                    style={styles.preview}
                    type={this.state.type}
                    flashMode={this.state.flashMode}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    captureAudio={true}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    playSoundOnCapture={true}
                />
                {!this.state.paused && flag == 1 && <TouchableOpacity
                    style={{ position: 'absolute', top: 20, left: 20 }}
                    onPress={this.requestReadPermission}>
                    {this.state.flashMode === RNCamera.Constants.FlashMode.auto && <MaterialIcons name='flash-auto' size={30} style={{ color: "#fff" }} />}
                    {this.state.flashMode === RNCamera.Constants.FlashMode.off && <MaterialIcons name='flash-off' size={30} style={{ color: "#fff" }} />}
                    {this.state.flashMode === RNCamera.Constants.FlashMode.on && <MaterialIcons name='flash-on' size={30} style={{ color: "#fff" }} />}
                </TouchableOpacity>}
                {!this.state.paused && flag == 1 && <TouchableOpacity
                    style={{ position: 'absolute', left: 50, bottom: 60 }}
                    onPress={() => navigation.pop()}>
                    <Ionicons name="ios-arrow-down" size={40} style={{ color: "#fff" }} />
                </TouchableOpacity>}
                {!this.state.paused && flag == 1 && <TouchableOpacity
                    style={{ position: 'absolute', top: 20, right: 20 }}
                    onPress={this.changeCameraType}>
                    <Ionicons name="ios-reverse-camera" size={30} style={{ color: "#fff" }} />
                </TouchableOpacity>}
                {!this.state.paused && flag == 1 && <View style={{ position: 'absolute', alignSelf: 'center', bottom: 50 }}>
                    <CameraProgress
                        color={'#93C90F'}
                        recordVideoStart={() => this.recordVideoStart()} //this.recordVideoStart()
                        recordVideoStop={() => this.recordVideoStop()} //this.recordVideoStop()
                        takePicture={() => this.takePicture()} />
                </View>}
                {this.state.paused && flag == 2 && <TouchableOpacity style={{
                    position: 'absolute', left: 50, top: 50, width: 30, height: 30,
                    backgroundColor: 'rgba(255 ,255,255,0.6)', borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                }} onPress={this.props.resetCamera} >
                    <Ionicons name='ios-return-left' style={{ fontSize: 20 }} />
                </TouchableOpacity>}
                {this.state.paused && flag == 2 && <Button size='large' style={{
                    position: 'absolute', alignSelf: 'center', bottom: 50,
                    backgroundColor: '#00b00e', borderColor: '#00b00e'
                }} onPress={this.upload}>
                    <Text style={{ color: '#fff' }}>完成</Text>
                </Button>}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cameraReducer: state.cameraReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    uploadImage: (key, reqParams) => {
        dispatch(reduxActions.camera.uploadImage(key, reqParams))
    },
    uploadVideo: (key, reqParams) => {
        dispatch(reduxActions.camera.uploadVideo(key, reqParams))
    },
    takePictureSuccess: imageUri => {
        dispatch(reduxActions.camera.takePictureSuccess(imageUri))
    },
    takePictureWaiting: () => {
        dispatch(reduxActions.camera.takePictureWaiting())
    },
    takePictureFailed: failedMsg => {
        dispatch(reduxActions.camera.takePictureFailed(failedMsg))
    },
    recordVideoSuccess: videoUri => {
        dispatch(reduxActions.camera.recordVideoSuccess(videoUri))
    },
    recordVideoWaiting: () => {
        dispatch(reduxActions.camera.recordVideoWaiting())
    },
    recordVideoFailed: failedMsg => {
        dispatch(reduxActions.camera.recordVideoFailed(failedMsg))
    },
    resetCamera: () => {
        dispatch(reduxActions.camera.resetCamera())

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Camera)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
})