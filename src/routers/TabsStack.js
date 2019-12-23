import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from '@ant-design/react-native'
import PersonCenter from '../views/person/personCenter/PersonCenter'
import MessageList from '../views/message/messageList/MessageList'
import Community from '../views/community/Community'
import Home from '../views/home/Home'


const TabScreens = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: '首页'
            }
        },
        Community: {
            screen: Community,
            navigationOptions: {
                title: '社区'
            }
        },
        Message: {
            screen: MessageList,
            navigationOptions: {
                title: '消息'
            }
        },
        Person: {
            screen: PersonCenter,
            navigationOptions: {
                title: '个人'
            }
        }
    },
    {
        initialRouteName: 'Person',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if (routeName === 'Home') {
                    iconName = 'home'
                } else if (routeName === 'Community') {
                    iconName = 'team'
                } else if (routeName === 'Message') {
                    iconName = 'message'
                } else if (routeName === 'Person') {
                    iconName = 'user'
                }
                return <Icon name={iconName} size='md' color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: '#1083e6',
            inactiveTintColor: 'gray',
        }
    }
)

export default TabScreens