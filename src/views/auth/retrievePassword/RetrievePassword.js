import React,{Component} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import globalStyles from '../../../GlobalStyles'
import { Button, WingBlank, WhiteSpace, Icon, List, InputItem } from '@ant-design/react-native'
import RetrievePasswordVCode from './retrievePasswordVCode/RetrievePasswordVCode'
import { reduxForm, getFormValues, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item

class RetrievePassword extends Component{
    render(){
        console.log('props', this.props)
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <InputItem
                        extra={<RetrievePasswordVCode />}
                        styles={{
                            container: styles.container
                        }}
                        placeholder="请输入手机号">手机</InputItem>
                    <Field name='vCode' component={() => {
                        return (
                            <InputItem
                                placeholder="请输入验证码">验证码</InputItem>
                        )
                    }} />
    
                    <Field name='password' component={() => {
                        return (
                            <InputItem
                                placeholder="请输入密码">密码</InputItem>
                        )
                    }} />
    
                    <Field name='reviewPassword' component={({  input }) => {
                        console.log('input', input)
                        return (
                            <InputItem
                                // onChange={txt=>{console.log(txt)}}
                                // onFocus={p1=>{
                                //     console.log('p1',p1)
                                // }}
                                // onBlur={p2=>{
                                //     console.log('p2',p2)
    
                                // }}
                                // value={value}
                                // {...input}
                                placeholder="请输入密码">确认密码</InputItem>
                        )
                    }} />
    
                </List>
                <WhiteSpace size='xl' />
                <WingBlank size='lg'>
                    <Button type="primary" >确认</Button>
                </WingBlank>
            </ScrollView>
    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        retrievePasswordReducer: state.retrievePasswordReducer,
        formValues: getFormValues('RetrievePasswordForm')(state)
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'RetrievePasswordForm',
        onSubmit: (values, dispatch) => {
            dispatch(reduxActions.retrievePassword.retrieve(values))
        }
    })(RetrievePassword))


const styles = StyleSheet.create({
    container: { paddingRight: 0 },
    // extra: { flex: 1,color:'red',width:200 },
    input: { flex: 1, backgroundColor: 'red' },
})


        // <View style={[globalStyles.container, { flex: 1 }]}>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
        //         <View style={{ flex: 1, paddingVertical: 15 }}>
        //             <Text>手机号</Text>
        //         </View>
        //         <View style={{ flex: 2 }}>
        //             {/* <Input /> */}
        //         </View>
        //         <View style={{ flex: 1 }}>
        //             {/* <Button full style={{ flex: 1, borderRadius: 0, backgroundColor: '#1591cf' }}>
        //                 <Text style={{ color: '#fff' }}>获取验证码</Text>
        //             </Button> */}
        //         </View>
        //     </View>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
        //         <View style={{ flex: 1, paddingVertical: 15 }}>
        //             <Text>验证码</Text>
        //         </View>
        //         <View style={{ flex: 3 }}>
        //             {/* <Input /> */}
        //         </View>
        //     </View>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
        //         <View style={{ flex: 1, paddingVertical: 15 }}>
        //             <Text>密码</Text>
        //         </View>
        //         <View style={{ flex: 3 }}>
        //             {/* <Input /> */}
        //         </View>
        //     </View>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#aaa', borderBottomWidth: 0.5, marginLeft: 15 }}>
        //         <View style={{ flex: 1, paddingVertical: 15 }}>
        //             <Text>确认密码</Text>
        //         </View>
        //         <View style={{ flex: 3 }}>
        //             {/* <Input /> */}
        //         </View>
        //     </View>
        //     <Button type="primary">登录</Button>
        // </View>  