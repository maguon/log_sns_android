import React, { Component } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { validatePhoneNotField } from '../../../../utils/validators'

const UserRegisterVCode = props => {
    const { userRegisterVCodeReducer: { data: { countDownTime }, countDown } } = props
    return (
        <Button type="primary" style={{ width: 100 }}
            disabled={countDown.isResultStatus == 1} onPress={() => {
                const warnMsg = validatePhoneNotField('您输入的手机号码不正确，请重新输入！')(props.phoneNo)
                if (!warnMsg) {
                    props.getVCode({
                        phoneNo: props.phoneNo
                    })
                } else {
                    ToastAndroid.show(warnMsg, 10)
                }
            }}>
                {countDown.isResultStatus == 0 && '验证码'}
                {countDown.isResultStatus == 1 && `${countDownTime}`}
        </Button>
    )
}


const mapStateToProps = (state) => {
    return {
        userRegisterVCodeReducer: state.userRegisterVCodeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVCode: reqParams => {
        dispatch(reduxActions.userRegisterVCode.getVCode(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterVCode) 