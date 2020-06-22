import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import ChangePhoneVCode from './changePhoneVCode/ChangePhoneVCode'
import { reduxForm, getFormValues, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item

const Phone = props => {
    return (
        <InputItem
            {...props.input}
            extra={<ChangePhoneVCode phoneNo={props.input.value} />}
            styles={{
                container: styles.container
            }}
            placeholder="请输入手机号">手机</InputItem>
    )
}

const VCode = props => {
    return (
        <InputItem
            {...props.input}
            placeholder="请输入验证码">验证码</InputItem>
    )
}

class ChangePhone extends Component {

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
                    <Field name='phone' component={Phone} />
                    <Field name='vCode' component={VCode} />
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
        changePhoneReducer: state.changePhoneReducer,
        formValues: getFormValues('ChangePhoneForm')(state)
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'ChangePhoneForm',
        onSubmit: (values, dispatch) => {
            // if (values.password == values.reviewPassword) {
            //     dispatch(reduxActions.retrievePassword.retrieve(values))
            // } else {
            //     ToastAndroid.show('两次输入的密码不一致', 10)
            // }
        }
    })(ChangePhone))


const styles = StyleSheet.create({
    container: { paddingRight: 0 },
    // extra: { flex: 1,color:'red',width:200 },
    input: { flex: 1, backgroundColor: 'red' }
})