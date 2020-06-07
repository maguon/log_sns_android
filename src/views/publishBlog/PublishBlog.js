import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native'
import { List, TextareaItem, Icon, Switch, Toast } from '@ant-design/react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'
import { required, requiredObj } from '../../utils/validators'
import CurrentLocation from '../../components/inputs/currentlocation/CurrentLocation'

const Item = List.Item

const requiredValidator = required('必填')

const infoField = props => {
    const { input, meta: { error } } = props
    console.log('error',error)
    return (
        <TextareaItem rows={8}
            placeholder="输入文章内容"
            count={100}
            error={error}
            onErrorClick={() => Toast.info(error, 1, undefined, false)}
            {...input} />
    )
}

class PublishBlog extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <List>
                    <Field
                        name='info'
                        component={infoField}
                        validate={[requiredValidator]} />

                    <Item
                        multipleLine
                        thumb={
                            <View style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                                <Icon name="environment" color='orange' style={{ marginRight: 15 }} />
                            </View>
                        }>
                        <Field name='addressShow' component={CurrentLocation} />
                    </Item>
                </List>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishBlogReducer: state.publishBlogReducer,
        initialValues:{
            info:'',
            addressShow:{
                switchChecked:false
            }
        }
        
    }
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'publishBlog',
        onSubmit: (values, dispatch, props) => {
            let reqParams
            if(values.addressShow.switchChecked){
                reqParams={
                    type: 1,
                    carrier: 1,
                    info: values.info,
                    address: [values.addressShow.data.longitude, values.addressShow.data.latitude],
                    addressName: values.addressShow.data.currentAddrName,
                    addressReal: values.addressShow.data.currentAddrReal,
                    addressShow: 1,
                }
            }else{
                reqParams={
                    type: 1,
                    carrier: 1,
                    info: values.info,
                    addressShow: 0
                }
            }
            dispatch(reduxActions.publishBlog.createArticle(reqParams))
        }
    })(PublishBlog))