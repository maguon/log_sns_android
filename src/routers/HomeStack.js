import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import Home from '../views/home/Home'

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
}, {
    transitionConfig: () => ({ // 跳转时，从右向左，滑入
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
})
