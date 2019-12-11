import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Community from '../views/community/Community'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'


export default createStackNavigator({
    Community: {
        screen: Community,
        navigationOptions: {
            header: null
        }
    }
}, {
    transitionConfig: () => ({ // 跳转时，从右向左，滑入
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
})
