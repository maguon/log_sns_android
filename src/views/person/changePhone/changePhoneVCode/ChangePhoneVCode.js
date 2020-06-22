import React, { Component } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { validatePhoneNotField } from '../../../../utils/validators'

const ChangePhoneVCode = props => {
    const { changePhoneVCodeReducer: { data: { countDownTime }, countDown } } = props
    return (
        <Button type="primary" style={{ width: 100 }}
            disabled={countDown.isResultStatus == 1} onPress={() => {
                props.getVCode()
            }}>
                {countDown.isResultStatus == 0 && '验证码'}
                {countDown.isResultStatus == 1 && `${countDownTime}`}
        </Button>
    )
}


const mapStateToProps = (state) => {
    return {
        changePhoneVCodeReducer: state.changePhoneVCodeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVCode: () => {
        dispatch(reduxActions.changePhoneVCode.getVCode())
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePhoneVCode) 