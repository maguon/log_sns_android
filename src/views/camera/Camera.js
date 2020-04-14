import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CameraProgress from '../../components/CameraProgress'

export default class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBase64: ''
        }
    }

    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    'title': 'Camera Permission',
                    'message': 'the project needs access to your camera ' +
                        'so you can take awesome pictures.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("你已获取了相机权限")
            } else {
                console.log("获取相机失败")
            }
        } catch (err) {
            console.log(err.toString())
        }
    }

    render() {
        // console.log('RNCamera.Constants.CameraStatus',RNCamera.Constants.CameraStatus)
        const baseImg = `data:image/png;base64,${this.state.imageBase64}`;
        // console.log('baseImg',baseImg)
        return (
            <View style={styles.container}>
                {/* <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
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
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                /> */}
                <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
                    <Ionicons name="ios-reverse-camera" size={30} style={{ color: "#fff" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }}>
                    <Ionicons name="ios-flash" size={30} style={{ color: "#fff" }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 50 }}>
                    <CameraProgress percent={30} radius={20}/>
                </View>

                {/* <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }}>
                    <Ionicons name="ios-flash-off" size={30} style={{  color: "#fff" }} />
                </TouchableOpacity> */}
                {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: baseImg }} />
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View> */}
                {/* <TouchableOpacity onPress={this.requestCarmeraPermission.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity> */}
            </View>
        )
    }


    takePicture = async () => {
        console.log('takePicture')
        if (this.camera) {
            const options = {
                quality: 0.5,
                base64: true,
                width: 900,
                pauseAfterCapture: true
            };
            const data = await this.camera.takePictureAsync(options);
            console.log('data.uri', data.uri)
            this.setState({ imageBase64: data.base64 })
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});