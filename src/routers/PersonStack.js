import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import PersonCenter from '../views/personCenter/PersonCenter'

export default createStackNavigator({
    PersonCenter: {
        screen: PersonCenter,
        navigationOptions: {
            header: null
        }
    }
}, {
    transitionConfig: () => ({ // 跳转时，从右向左，滑入
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
})
