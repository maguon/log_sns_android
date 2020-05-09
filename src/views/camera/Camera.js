import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Easing, Button, Text, Image, Animated, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CameraProgress from '../../components/CameraProgress'
import * as CacheManager from 'react-native-http-cache'
import reduxActions from '../../reduxActions'
import { connect } from 'react-redux'

class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBase64: '',
            type: RNCamera.Constants.Type.back,   //front   back
            flashMode: RNCamera.Constants.FlashMode.off,   //on  auto  torch
            takePictureCompleted: false,
            recordVideoCompleted: false
        }
    }

    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'Camera Permission',
                    'message': 'the project needs access to your camera ' +
                        'so you can take awesome pictures.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE")
            } else {
                console.log("获取相机失败")
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
        const { uploadImage } = this.props

        try {
            console.log('/storage/emulated/0/DCIM/Camera/')
            if (this.camera) {
                const options = {
                    quality: 1,
                    // base64: true,
                    width: 900,
                    // pauseAfterCapture: true,
                    // path: "/storage/emulated/0/Download"
                    // path: "/storage/emulated/0/DCIM/Camera"
                };
                const data = await this.camera.takePictureAsync(options)
                console.log('data',data)
                const filePathArr = data.uri.split('/')
                uploadImage({ uri: data.uri, imgName: filePathArr[filePathArr.length - 1] })
                // console.log(filePathArr[filePathArr.length-1])
                // console.log(filePathArr)
                // console.log('data.uri', data.uri)

                // this.setState({ imageBase64: data.base64 })
            }
        } catch (err) {
            console.log('err', err)
        }

    }

    recordVideoStart = async () => {
        if (this.camera) {
            const options = {
                quality: 0.5,
                // base64: true,
                width: 900,
                path: '/storage/emulated/0/Download/11.mp4',
                // path: "/storage/emulated/0/DCIM/Camera/"

            }
            const data = await this.camera.recordAsync(options)
            console.log('data', data)
        }
    }

    recordVideoStop = () => {
        if (this.camera) {
            this.camera.stopRecording()
        }
    }

    render() {
        const { navigation, uploadImage } = this.props
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
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
                <TouchableOpacity
                    style={{ position: 'absolute', top: 20, left: 20 }}
                    onPress={this.changeCameraFlashMode}>
                    {this.state.flashMode === RNCamera.Constants.FlashMode.auto && <MaterialIcons name='flash-auto' size={30} style={{ color: "#fff" }} />}
                    {this.state.flashMode === RNCamera.Constants.FlashMode.off && <MaterialIcons name='flash-off' size={30} style={{ color: "#fff" }} />}
                    {this.state.flashMode === RNCamera.Constants.FlashMode.on && <MaterialIcons name='flash-on' size={30} style={{ color: "#fff" }} />}
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 50, bottom: 60 }}
                    onPress={() => navigation.pop()}>
                    <Ionicons name="ios-arrow-down" size={40} style={{ color: "#fff" }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 20, right: 20 }}
                    onPress={this.changeCameraType}>
                    <Ionicons name="ios-reverse-camera" size={30} style={{ color: "#fff" }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 50 }}>
                    <CameraProgress
                        color={'#93C90F'}
                        recordVideoStart={this.recordVideoStart}
                        recordVideoStop={this.recordVideoStop}
                        takePicture={this.takePicture} />
                </View>
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
    uploadImage: reqParams => {
        dispatch(reduxActions.camera.uploadImage(reqParams))
    },
    uploadVideo: reqParams => {
        dispatch(reduxActions.camera.uploadVideo(reqParams))
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