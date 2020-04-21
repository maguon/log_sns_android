import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Easing
} from 'react-native'

class CameraProgress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: this.props.percent,
      borderWidth: 6,
      textStyle: this.props.textStyle ? this.props.textStyle : null,
    };
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

  componentDidMount(){
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
    }, 200)
  }

  onPressOutProgressBtn() {
    if (this.cameraType === 1) {
      this.progressAnimationStop()
      this.pressTimerStop()
      this.cameraType = 0

    } else if (this.cameraType === 0) {
      this.pressTimerStop()
      console.log('拍照片')
    }

    this.progressAnimationOut()
  }

  progressAnimationInit() {
    this.animation = Animated.sequence([
      Animated.timing(this.radius, {
        toValue: 1,
        duration: 200,
        easing: Easing.spring,
      }),
      Animated.timing(this.rightTransformerDegree, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
      }),
      Animated.timing(this.leftTransformerDegree, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
      })
    ])
  }

  progressAnimationOut(){
    Animated.timing(this.radius, {
      toValue: 0,
      duration: 200,
      easing: Easing.spring,
    }).start()
    this.leftTransformerDegree.setValue(0)
    this.rightTransformerDegree.setValue(0)
  }

  progressAnimationStart() {
    console.log('拍视频开始')
    this.animation.start(() => {
      console.log('拍视频结束')
    })
  }

  progressAnimationStop() {
    this.animation.stop()
  }

  render() {

    const radius = this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 50]
    })

    const diameter=this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 100]
    })

    const halfRadius=this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 25]
    })
    const minusHalfRadius=this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [-15, -25]
    })

    const minusRadius=this.radius.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, -50]
    })

    const leftTransformerDegree = this.leftTransformerDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })

    const rightTransformerDegree = this.rightTransformerDegree.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })

    console.log('radius',radius)
    console.log('leftTransformerDegree',leftTransformerDegree)
    console.log('rightTransformerDegree',rightTransformerDegree)

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={this.onPressInProgressBtn}
        onPressOut={this.onPressOutProgressBtn}>
        <Animated.View
          style={[styles.circle, {
            width: diameter,
            height: diameter,
            borderRadius: radius,
            backgroundColor: this.props.bgcolor
          }]}>
          <Animated.View style={[styles.leftWrap, {
            width: radius,
            height: diameter,
            left: 0,
          }]}>
            <Animated.View style={[styles.loader, {
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
            <Animated.View style={[styles.loader, {
              left: minusRadius,
              width: radius,
              height: diameter,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
              transform: [{ translateX: halfRadius}, { rotate: rightTransformerDegree }, { translateX: minusHalfRadius }],
            }]}>
            </Animated.View>
          </Animated.View>
          {/* <Animated.View style={[styles.innerCircle, {
            width: (radius - this.state.borderWidth) * 2,
            height: (radius - this.state.borderWidth) * 2,
            borderRadius: radius - this.state.borderWidth,
            backgroundColor: this.props.innerColor,
          }]}>
            {this.props.children ? this.props.children :
              <Text style={[styles.text, this.state.textStyle]}></Text>}
          </Animated.View> */}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

// set some attributes default value
CameraProgress.defaultProps = {
  bgcolor: '#e3e3e3',
  innerColor: '#fff'
};

export default CameraProgress


const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  leftWrap: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  rightWrap: {
    position: 'absolute',
  },

  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 1000,
  },

  innerCircle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#888',
  },
});
