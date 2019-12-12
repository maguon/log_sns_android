import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon } from '@ant-design/react-native'


const Login = props => {
    const { navigation } = props
    return (
        <View style={[globalStyles.container, { flex: 1 }]}>
            <View style={{ alignItems: 'center', marginVertical: 90 }}>
                <Text style={globalStyles.xxlText}>欢迎登录司机部落</Text>
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
            <WhiteSpace size='xl' />
            <WingBlank size="lg">
                <Button type="primary" onPress={() => navigation.navigate('TabsStack')}>登录</Button>
            </WingBlank>
            <WhiteSpace size='md' />
            <WingBlank size="lg">
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('UserRegister') }}>
                        <Text >注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('RetrievePassword') }}>
                        <Text >忘记密码</Text>
                    </TouchableOpacity>
                </View>
            </WingBlank>
        </View>
    )
}

export default Login