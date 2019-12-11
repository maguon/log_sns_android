import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { Icon } from '@ant-design/react-native'
import HomeStack from './HomeStack'
import CommunityStack from './CommunityStack'
import MessageStack from './MessageStack'
import PersonStack from './PersonStack'


const TabScreens = createBottomTabNavigator(
    {
        HomeStack: {
            screen: HomeStack,
            navigationOptions: {
                title: '首页'
            }
        },
        CommunityStack: {
            screen: CommunityStack,
            navigationOptions: {
                title: '社区'
            }
        },
        MessageStack: {
            screen: MessageStack,
            navigationOptions: {
                title: '消息'
            }
        },
        PersonStack: {
            screen: PersonStack,
            navigationOptions: {
                title: '个人'
            }
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if (routeName === 'HomeStack') {
                    iconName = 'home'
                } else if (routeName === 'CommunityStack') {
                    iconName = 'team'
                } else if (routeName === 'MessageStack') {
                    iconName = 'message'
                } else if (routeName === 'PersonStack') {
                    iconName = 'user'

                }
                return <Icon name={iconName} size='md'  color={tintColor}/>
            },
        }),
        tabBarOptions: {
            activeTintColor: '#1083e6',
            inactiveTintColor: 'gray',
        }
    }
)

export default TabScreens