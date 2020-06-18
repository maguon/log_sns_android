import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'

const RetrievePasswordVCode = props => {

    return (
        <Button type="primary" style={{ width: 100 }} onPress={()=>{

            // if (!this.props.server) {
            //     ToastAndroid.show('服务器不能为空！', 10)
            //     return
            // }
            // const warnMsg = validatePhoneNotField('您输入的手机号码不正确，请重新输入！')(this.props.mobileNo)
            // if (!warnMsg) {
            //     getVCode({
            //         mobileNo: this.props.mobileNo,
            //         server: this.props.server
            //     })
            // } else {
            //     ToastAndroid.show(warnMsg, 10)
            // }


        }}>
            验证码
            
            
            
            </Button>
    )
}


const mapStateToProps = (state) => {
    return {
        retrievePasswordVCodeReducer: state.retrievePasswordVCodeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVCode: reqParams => {
        dispatch(reduxActions.retrievePasswordVCode.getVCode(reqParams))
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(RetrievePasswordVCode) 