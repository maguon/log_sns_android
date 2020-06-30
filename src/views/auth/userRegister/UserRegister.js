import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import UserRegisterVCode from './userRegisterVCode/UserRegisterVCode'
import { reduxForm, getFormValues, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Phone = props => {
    return (
        <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="phone" size="md" color="#000" style={{ marginHorizontal: 15 }} />
            <TextInput style={{ flex: 1, marginRight: 15 }} {...props.input} placeholder='请输入手机' />
            <UserRegisterVCode phoneNo={props.input.value} />
        </View>
    )
}

const VCode = props => {
    return (
        <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="user" size="md" color="#000" style={{ marginHorizontal: 15 }} />
            <TextInput style={{ flex: 1, marginRight: 15 }} {...props.input} placeholder="请输入验证码" />
        </View>

    )
}


class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureTextEntryStatus: true
        }
    }

    render() {
        return (
            <View style={{ height: 50, borderWidth: 0.5, borderColor: '#777', flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="lock" size="md" color="#000" style={{ marginHorizontal: 15 }} />
                <TextInput style={{ flex: 1 }}
                    {...this.props.input}
                    secureTextEntry={this.state.secureTextEntryStatus}
                    placeholder={this.props.placeholder} />
                <TouchableOpacity onPress={() => { this.setState({ secureTextEntryStatus: !this.state.secureTextEntryStatus }) }}>
                    <Icon name={this.state.secureTextEntryStatus ? "eye" : 'eye-invisible'} size="md" color="#000" style={{ marginHorizontal: 15 }} />
                </TouchableOpacity>
            </View>
        )
    }
}

class UserRegister extends Component {
    render() {
        return (
            <View style={[globalStyles.container, { flex: 1 }]}>
                <View style={{ alignItems: 'center', marginVertical: 50, marginHorizontal: 10 }}>
                    <Text style={globalStyles.xxlText}>欢迎加入司机部落</Text>
                </View>
                <WingBlank size="lg">
                    <Field name='phone' component={Phone} />
                </WingBlank>
                <WhiteSpace size='md' />
                <WingBlank size="lg">
                    <Field name='vCode' component={VCode} />
                </WingBlank>
                <WhiteSpace size='md' />
                <WingBlank size="lg">
                    <Field name='password' component={Password} placeholder='输入密码' />
                </WingBlank>
                <WhiteSpace size='md' />
                <WingBlank size="lg">
                    <Field name='reviewPassword' component={Password} placeholder='请再次输入密码' />
                </WingBlank>
                <WhiteSpace size='xl' />
                <WingBlank size="lg">
                    <Button type="primary" onPress={this.props.handleSubmit}>注册</Button>
                </WingBlank>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userRegisterReducer: state.userRegisterReducer,
        formValues: getFormValues('UserRegisterForm')(state)
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'UserRegisterForm',
        onSubmit: (values, dispatch) => {
            if (values.password == values.reviewPassword) {
                dispatch(reduxActions.userRegister.register(values))
            } else {
                ToastAndroid.show('两次输入的密码不一致', 10)
            }
        }
    })(UserRegister))
