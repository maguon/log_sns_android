import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon } from '@ant-design/react-native'


const UserRegister = props => {
    return (
        <View style={[globalStyles.container, { flex: 1 }]}>
            <View style={{ alignItems: 'center', marginVertical: 90, marginHorizontal: 10 }}>
                <Text style={globalStyles.xxlText}>欢迎加入司机部落</Text>
            </View>
            <WingBlank size="lg">
                <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', borderRadius: 25, alignItems: 'center' }}>
                    <Icon name="user" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                    <TextInput style={{ flex: 1, marginRight: 15 }} placeholder='请输入账号' />
                </View>
            </WingBlank>
            <WhiteSpace size='md' />
            <WingBlank size="lg">
                <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', borderRadius: 25, alignItems: 'center' }}>
                    <Icon name="lock" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                    <TextInput style={{ flex: 1 }} placeholder='请输入密码' />
                    <Icon name="eye" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                    <Icon name="eye-invisible" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                </View>
            </WingBlank>
            <WhiteSpace size='md' />
            <WingBlank size="lg">
                <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', borderRadius: 25, alignItems: 'center' }}>
                    <Icon name="lock" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                    <TextInput style={{ flex: 1 }} placeholder='请再次输入密码' />
                    <Icon name="eye" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                    <Icon name="eye-invisible" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                </View>
            </WingBlank>
            <WhiteSpace size='xl' />
            <WingBlank size="lg">
                <Button type="primary">注册</Button>
            </WingBlank>
        </View>
    )
}

export default UserRegister