import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthStack from './AuthStack'
import TabsStack from './TabsStack'

const RouteConfigs = {
    initialRouteName: 'TabsStack'
}


export default createAppContainer(createSwitchNavigator({
    Auth: AuthStack,
    TabsStack: TabsStack,

}, RouteConfigs))