import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native'
import { List, TextareaItem, Icon, Switch, Toast } from '@ant-design/react-native'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'
import { required, requiredObj } from '../../utils/validators'
import CurrentLocation from '../../components/inputs/currentlocation/CurrentLocation'
import ImageList from '../../components/inputs/ImageList'
import * as host from '../../utils/host'

const Item = List.Item

const requiredValidator = required('必填')

const infoField = props => {
    const { input, meta: { error } } = props

    // console.log('props', props)
    // console.log('!!error', !!error)

    return (
        <TextareaItem rows={8}
            placeholder="输入文章内容"
            count={100}
            error={error}
            onErrorClick={() => Toast.info(error, 1, undefined, false)}
            {...input} />
    )
}

class PushBlogPicture extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('componentDidMount')

        const { navigation: { state: { params } }, formValues } = this.props
        if (params.imageUri) {
            const { dispatch, change } = this.props
            const imageList = formValues ? formValues.imageList : []
            dispatch(change('imageList', [...imageList, params.imageUri]))
        }
    }

    render() {
        console.log('this.props', this.props)
        const { navigation } = this.props
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
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
                <Field name='imageList'
                    component={ImageList}
                    openSources={() => { navigation.navigate('Camera') }}
                    openPictureViewer={(index,imageList) =>{
                        // console.log(index)
                        // console.log(imageList)
                        navigation.navigate('PictureViewer', { imageIndex: index ,imageList:imageList.map(imageUriItem => `${host.image_host}/${imageUriItem}`)})
                    }}  />
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishPictureBlogReducer: state.publishPictureBlogReducer,
        initialValues: {
            imageList: [],
            info:'',
            addressShow:{
                switchChecked:false
            }
        },
        formValues: getFormValues('publishPictureBlog')(state)
    }
}


export default connect(mapStateToProps)(
    reduxForm({
        form: 'publishPictureBlog',
        destroyOnUnmount: false,
        onSubmit: (values, dispatch, props) => {
            console.log('values', values)
            let reqParams
            if (values.addressShow.switchChecked) {
                reqParams = {
                    type: 1,
                    carrier: 2,
                    info: values.info,
                    address: [values.addressShow.data.longitude, values.addressShow.data.latitude],
                    addressName: values.addressShow.data.currentAddrName,
                    addressReal: values.addressShow.data.currentAddrReal,
                    addressShow: 1,
                    media: values.imageList.map(item => {
                        return {
                            url: `${host.image_host}/${item}`
                        }
                    })
                }
            } else {
                reqParams = {
                    type: 1,
                    carrier: 2,
                    info: values.info,
                    addressShow: 0,
                    media: values.imageList.map(item => {
                        return {
                            url: `${host.image_host}/${item}`
                        }
                    })
                }
            }
            dispatch(reduxActions.publishPictureBlog.createPictureBlog(reqParams))
        }
    })(PushBlogPicture))