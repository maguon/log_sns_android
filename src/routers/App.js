import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const RouteConfigs = {
    initialRouteName: 'MainStack',
    resetOnBlur: false,
    backBehavior:'none'
}

export default createAppContainer(createSwitchNavigator({
    Auth: AuthStack,
    MainStack
}, RouteConfigs))