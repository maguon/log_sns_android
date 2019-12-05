import React from 'react'
import { View, Text } from 'react-native'
import { Container, Button, ListItem, Input } from 'native-base'

const RetrievePassword = props => {
    return (
        <Container>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <Text>手机号</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Input />
                </View>
                <View style={{ flex: 1 }}>
                    <Button full style={{ flex: 1, borderRadius: 0, backgroundColor: '#1591cf' }}>
                        <Text style={{ color: '#fff' }}>获取验证码</Text>
                    </Button>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <Text>验证码</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Input />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <Text>密码</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Input />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <Text>确认密码</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Input />
                </View>
            </View>
            <Button full style={{ marginHorizontal: 20, marginTop: 50, borderRadius: 5, backgroundColor: '#1591cf' }}>
                <Text style={{ color: '#fff' }}>确定</Text>
            </Button>
        </Container>
    )
}

export default RetrievePassword