import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import ChangePasswordVCode from './changePasswordVCode/ChangePasswordVCode'
import { reduxForm, getFormValues, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item

const VCode = props => {
    return (
        <InputItem
            {...props.input}
            extra={<ChangePasswordVCode phoneNo={props.input.value} />}
            styles={{
                container: styles.container
            }}
            placeholder="请输入验证码">验证码</InputItem>
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
            <InputItem {...this.props.input}
                type={this.state.secureTextEntryStatus ? 'password' : 'text'}
                placeholder={this.props.placeholder}
                extra={<Icon name={this.state.secureTextEntryStatus ? "eye" : 'eye-invisible'} size="md" color="#000" style={{ marginHorizontal: 15 }} />}
                onExtraClick={() => {
                    this.setState({ secureTextEntryStatus: !this.state.secureTextEntryStatus })
                }}>{this.props.title}</InputItem>
        )
    }
}

class ChangePassword extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <Field name='vCode' component={VCode} />
                    <Field name='password' component={Password} title={'密码'} placeholder={'请输入密码'} />
                    <Field name='reviewPassword' component={Password} title={'确认密码'} placeholder={'请输入确认密码'} />
                </List>
                <WhiteSpace size='xl' />
                <WingBlank size='lg'>
                    <Button type="primary" onPress={handleSubmit} >确认</Button>
                </WingBlank>
            </ScrollView>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        changePasswordReducer: state.changePasswordReducer,
        formValues: getFormValues('ChangePasswordForm')(state)
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'ChangePasswordForm',
        onSubmit: (values, dispatch) => {
            // console.log('values',values)
            if (values.password == values.reviewPassword) {
                dispatch(reduxActions.changePassword.changePassword(values))
            } else {
                ToastAndroid.show('两次输入的密码不一致', 10)
            }
        }
    })(ChangePassword))


const styles = StyleSheet.create({
    container: { paddingRight: 0 },
    // extra: { flex: 1,color:'red',width:200 },
    input: { flex: 1, backgroundColor: 'red' }
})