import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, InteractionManager } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item

const Settings = props => {
    const { navigation } = props
    console.log('navigation', navigation)
    return (

        <ScrollView style={globalStyles.container}>
            <List>
                <Item arrow="horizontal"
                    onPress={() => {
                        navigation.navigate('ChangePassword')
                    }}
                    onLongPress={() => {
                        navigation.navigate('ChangePassword')
                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    修改密码</Item>
                <Item arrow="horizontal"
                    onPress={() => {
                        navigation.navigate('ChangePhone')
                    }}
                    onLongPress={() => {
                        navigation.navigate('ChangePhone')
                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    换绑手机</Item>
            </List>
            <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
            <List>
                <Item arrow="horizontal"
                    onPress={() => {
                        navigation.navigate('PrivacySetting')

                    }}
                    onLongPress={() => {
                        navigation.navigate('PrivacySetting')

                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    隐私设置</Item>
                <Item arrow="horizontal"
                    onPress={() => {
                        navigation.navigate('NoticeSetting')

                    }}
                    onLongPress={() => {
                        navigation.navigate('NoticeSetting')

                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    通知设置</Item>
            </List>
            <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />
            <List>
                <Item arrow="horizontal"
                    onPress={() => {
                        navigation.navigate('About')
                    }}
                    onLongPress={() => {
                        navigation.navigate('About')
                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    关于我们</Item>
                <Item arrow="horizontal"
                    onPress={() => {

                    }}
                    onLongPress={() => {

                    }}
                    thumb={<Icon name="file-text" style={{ marginRight: 15 }} />} >
                    清理缓存</Item>
            </List>
            <WhiteSpace size='md' style={globalStyles.containerBackgroundColor} />

        </ScrollView >

    )
}


export default Settings