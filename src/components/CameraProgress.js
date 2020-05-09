import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing
} from 'react-native'

class CameraProgress extends Component {

  constructor(props) {
    super(props)
    this.leftTransformerDegree = new Animated.Value(0)
    this.rightTransformerDegree = new Animated.Value(0)
    this.radius = new Animated.Value(0)
    this.cameraType = 0
    this.pressTimerStart = this.pressTimerStart.bind(this)
    this.pressTimerStop = this.pressTimerStop.bind(this)
    this.onPressInProgressBtn = this.onPressInProgressBtn.bind(this)
    this.onPressOutProgressBtn = this.onPressOutProgressBtn.bind(this)
    this.progressAnimationInit = this.progressAnimationInit.bind(this)
    this.progressAnimationStart = this.progressAnimationStart.bind(this)
    this.progressAnimationStop = this.progressAnimationStop.bind(this)
  }

  componentDidMount() {
    this.radius.setValue(0)
  }

  pressTimerStart(callback, time) {
    this.pressTimer = setTimeout(callback, time)
  }

  pressTimerStop() {
    clearTimeout(this.pressTimer)
  }

  onPressInProgressBtn() {
    this.pressTimerStart(() => {
      this.leftTransformerDegree.setValue(0)
      this.rightTransformerDegree.setValue(0)
      this.progressAnimationInit()
      this.progressAnimationStart()
      this.cameraType = 1
    }, this.props.pressTimeOut)
  }

  onPressOutProgressBtn() {
    if (this.cameraType === 1) {
      this.progressAnimationStop()
      this.pressTimerStop()
      this.cameraType = 0

    } else if (this.cameraType === 0) {
      this.pressTimerStop()
      this.props.takePicture()
    }

    this.progressAnimationOut()
  }

  progressAnimationInit() {
    this.animation = Animated.sequence([
      Animated.timing(this.radius, {
        toValue: 1,
        duration: this.props.pressAnimationDuration,
        easing: Easing.spring,
      }),
      Animated.timing(this.rightTransformerDegree, {
        toValue: 1,
        duration: this.props.progressAnimationDuration / 2,
        easing: Easing.linear,
      }),
      Animated.timing(this.leftTransformerDegree, {
        toValue: 1,
        duration: this.props.progressAnimationDuration / 2,
        easing: Easing.linear,
      })
    ])
  }

  progressAnimationOut() {
    Animated.timing(this.radius, {
      toValue: 0,
      duration: this.props.pressAnimationDuration,
      easing: Easing.spring,
    }).start()
    this.leftTransformerDegree.setValue(0)
    this.rightTransformerDegree.setValue(0)
  }

  progressAnimationStart() {
    this.props.recordVideoStart()
    this.animation.start(() => {
      this.props.recordVideoStop()
    })
  }

  progressAnimationStop() {
    this.animation.stop()
  }

  render() {

    const radius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.minOuterRadius, this.props.maxOuterRadius]
    })
    const diameter = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.minOuterRadius * 2, this.props.maxOuterRadius * 2]
    })
    const halfRadius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.minOuterRadius / 2, this.props.maxOuterRadius / 2]
    })
    const minusHalfRadius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [-this.props.minOuterRadius / 2, -this.props.maxOuterRadius / 2]
    })
    const minusRadius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [-this.props.minOuterRadius, -this.props.maxOuterRadius]
    })
    const middleDiameter = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.minMiddleRadius * 2, this.props.maxMiddleRadius * 2]
    })
    const middleRadius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.minMiddleRadius, this.props.maxMiddleRadius]
    })
    const innerDiameter = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.maxInnerRadius * 2, this.props.minInnerRadius * 2]
    })
    const innerRadius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.maxInnerRadius, this.props.minInnerRadius]
    })
    const leftTransformerDegree = this.leftTransformerDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    const rightTransformerDegree = this.rightTransformerDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={this.onPressInProgressBtn}
        onPressOut={this.onPressOutProgressBtn}>
        <Animated.View
          style={[styles.container, {
            width: diameter,
            height: diameter,
            borderRadius: radius,
            backgroundColor: this.props.bgcolor
          }]}>
          <Animated.View style={[styles.leftWrap, {
            width: radius,
            height: diameter,
            left: 0
          }]}>
            <Animated.View style={[styles.progress, {
              left: radius,
              width: radius,
              height: diameter,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: this.props.color,
              transform: [{ translateX: minusHalfRadius }, { rotate: leftTransformerDegree }, { translateX: halfRadius }],
            }]}></Animated.View>
          </Animated.View>
          <Animated.View style={[styles.leftWrap, {
            left: radius,
            width: radius,
            height: diameter
          }]}>
            <Animated.View style={[styles.progress, {
              left: minusRadius,
              width: radius,
              height: diameter,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
              transform: [{ translateX: halfRadius }, { rotate: rightTransformerDegree }, { translateX: minusHalfRadius }],
            }]}>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[styles.middle, {
              width: middleDiameter,
              height: middleDiameter,
              borderRadius: middleRadius,
              backgroundColor: this.props.bgcolor
            }]}>
            <Animated.View style={[styles.innerContainer, {
              width: innerDiameter,
              height: innerDiameter,
              borderRadius: innerRadius,
              backgroundColor: this.props.innerColor,
            }]} />
          </Animated.View>

        </Animated.View>
      </TouchableOpacity>
    );
  }
}

CameraProgress.defaultProps = {
  bgcolor: '#e3e3e3',
  innerColor: '#fff',
  color:'#93C90F',
  minOuterRadius: 30,
  maxOuterRadius: 50,
  minMiddleRadius: 25,
  maxMiddleRadius: 45,
  minInnerRadius: 15,
  maxInnerRadius: 25,
  pressTimeOut: 300,
  pressAnimationDuration: 200,
  progressAnimationDuration: 20000,
  recordVideoStart: () => { console.log('拍视频开始') },
  recordVideoStop: () => { console.log('拍视频结束') },
  takePicture: () => { console.log('拍照片') }
}

export default CameraProgress


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  leftWrap: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  rightWrap: {
    position: 'absolute',
  },
  progress: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
