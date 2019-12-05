import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Container, Icon, Input, Item, Content, Button } from 'native-base'
import globalStyles from '../../GlobalStyles'

const UserRegister = props => {
    return (
        <Container style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
            <View style={{ alignItems: 'center', marginVertical: 90, marginHorizontal: 10 }}>
                <Text style={globalStyles.xlText}>欢迎加入司机部落</Text>
            </View>
            <View style={{ height: 50, margin: 10 }}>
                <Item rounded style={{ height: 50 }}>
                    <Icon active name='ios-person' style={{ marginLeft: 10 }} />
                    <Input placeholder='请输入账号' onChangeText={() => { }} />

                </Item>
            </View>
            <View style={{ height: 50, margin: 10 }}>
                <Item rounded style={{ height: 50 }}>
                    <Icon active name='ios-lock' style={{ marginLeft: 10 }} />
                    <Input placeholder='请输入密码' onChangeText={() => { }} />
                    <Icon active name='ios-eye' style={{ marginRight: 10 }} />
                    <Icon active name='ios-eye-off' style={{ marginRight: 10 }} />
                </Item>
            </View>
            <View style={{ height: 50, margin: 10 }}>
                <Item rounded style={{ height: 50 }}>
                    <Icon active name='ios-lock' style={{ marginLeft: 10 }} />
                    <Input placeholder='请输入密码' onChangeText={() => { }} />
                    <Icon active name='ios-eye' style={{ marginRight: 10 }} />
                    <Icon active name='ios-eye-off' style={{ marginRight: 10 }} />
                </Item>
            </View>
            <View style={{ margin: 10, height: 30 }}>
                <Button full style={{ backgroundColor: '#1591cf' }} onPress={() => { console.log(1111) }} >
                    <Text style={{ color: '#fff' }}>注册</Text>
                </Button>
            </View>
        </Container>
    )
}

export default UserRegister