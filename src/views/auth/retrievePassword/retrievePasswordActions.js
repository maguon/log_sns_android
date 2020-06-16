import reduxActionTypes from '../../../reduxActionTypes'
import httpRequest from '../../../utils/HttpRequest'
import * as host from '../../../utils/host'

export const register = (props) => async (dispatch, getState) => {
    try {
        const { RegisterReducer: { account, password, pass_word, code } } = getState()
        console.log(props)
        console.log(getState())
        if (account == '') {
            Toast.info("请您输入手机号")
        } else if (account.length != 11) {
            Toast.info("手机号不足11位，请重新输入")
        } else {
            // let res = await HttpRequest.post(apiHost + `/phone/${account}/regSms`);
            // if(res.success){
            //  console.log('res',res)
            // }

            if (code == '') {
                Toast.info("请您输入验证码")
            } else if (password == '') {
                Toast.info("您设置的密码不能为空")
            } else if (password.length < 6 || password.length > 15) {
                Toast.info("设置的密码不得小于6位或大于15位")
            } else if (password != pass_word) {
                Toast.info("两次密码输入不一致")
            } else if (props.navigation.state.routeName == "Registered") {
                //注册
                let params = {
                    phone: account,
                    password: password,
                    captcha: code,
                    type: 0,
                }
                let res = await httpRequest.post(apiHost + `/user`, params)
                if (res.success) {
                    Toast.loading('Loading...', 0.5, () => {
                        Alert.alert("", "注册成功，返回登录", [{ text: "确定", onPress: () => props.navigation.goBack() }])
                    })
                } else {
                    Toast.loading('Loading...', 0.5, () => {
                        Alert.alert("", res.msg, [{ text: "确定" }])
                    })
                }

            } else {
                //忘记密码
                let params = {
                    code: code,
                    newPassword: password,
                }
                let res = await httpRequest.put(apiHost + `/phone/${account}/password`, params)

                if (res.success) {
                    Toast.loading('Loading...', 0.5, () => {
                        Alert.alert("", "修改成功，返回登录", [{ text: "确定", onPress: () => props.navigation.goBack() }])
                    })
                } else {
                    Toast.loading('Loading...', 0.5, () => {
                        Alert.alert("", res.msg, [{ text: "确定" }])
                    })
                }
            }
        }

    } catch (err) {

    }
};

