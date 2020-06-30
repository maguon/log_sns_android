import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon } from '@ant-design/react-native'
import { reduxForm, Field } from 'redux-form'
import reduxActions from '../../../reduxActions'
import { connect } from 'react-redux'


const UserNameText = props => {
    const { input } = props
    return (
        <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', borderRadius: 25, alignItems: 'center' }}>
            <Icon name="user" size="md" color="#000" style={{ marginHorizontal: 15 }} />
            <TextInput
                style={{ flex: 1, marginRight: 15 }}
                placeholder='请输入账号'
                {...input} />
        </View>
    )
}


class PassWordText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureTextEntryStatus: true
        }
    }

    render() {
        const { input } = this.props
        return (
            <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', borderRadius: 25, alignItems: 'center' }}>
                <Icon name="lock" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                <TextInput
                    style={{ flex: 1 }}
                    placeholder='请输入密码'
                    secureTextEntry={this.state.secureTextEntryStatus}
                    {...input} />
                {this.state.secureTextEntryStatus && <TouchableOpacity onPress={() => { this.setState({ secureTextEntryStatus: false }) }}>
                    <Icon name="eye" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                </TouchableOpacity>}
                {!this.state.secureTextEntryStatus && <TouchableOpacity onPress={() => { this.setState({ secureTextEntryStatus: true }) }}>
                    <Icon name="eye-invisible" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                </TouchableOpacity>}
            </View>
        )
    }

}


const Login = props => {
    const { navigation, handleSubmit } = props
    return (
        <View style={[globalStyles.container, { flex: 1 }]}>
            <View style={{ alignItems: 'center', marginVertical: 90 }}>
                <Text style={globalStyles.xxlText}>欢迎登录司机部落</Text>
            </View>
            <WingBlank size="lg">
                <Field name='username' component={UserNameText} />
            </WingBlank>
            <WhiteSpace size='md' />
            <WingBlank size="lg">
                <Field name='password' component={PassWordText} />
            </WingBlank>
            <WhiteSpace size='xl' />
            <WingBlank size="lg">
                <Button type="primary" onPress={() => {
                    handleSubmit()
                }}>登录</Button>
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


const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}

export default connect(mapStateToProps)(reduxForm({
    form: 'loginForm',
    onSubmit: (values, dispatch, props) => {
        if (!values.username) {
            console.log('账号不能为空')
            return
        }
        if (!values.password) {
            console.log('密码不能为空')
            return
        }
        dispatch(reduxActions.login.login(values))
    }
})(Login))