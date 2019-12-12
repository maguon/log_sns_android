import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../views/auth/login/Login'
import UserRegister from '../views/auth/userRegister/UserRegister'
import RetrievePassword from '../views/auth/retrievePassword/RetrievePassword'
import NavBar from './navBar/NavBar'
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'

export default createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    UserRegister: {
        screen: UserRegister,
        navigationOptions: {    
            title: '注册',
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return NavBar({ scene, previous, navigation })
            }
        }
    },
    RetrievePassword: {
        screen: RetrievePassword,
        navigationOptions: {
            title: '找回密码',
            header: ({ scene, previous, navigation }) => {
                // console.log('props',props)
                return NavBar({ scene, previous, navigation })
            }
        }
    },
}, {
    transitionConfig: () => ({ // 跳转时，从右向左，滑入
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
})
