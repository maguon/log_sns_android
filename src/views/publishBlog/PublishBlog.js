import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid, TextInput } from 'react-native'
import { List, TextareaItem, Icon, Switch } from '@ant-design/react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'

const Item = List.Item
const Brief = Item.Brief

class PublishBlog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { publishBlogReducer: { data: { currentAddrName } }, publishBlogForm = {} } = this.props
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <Field name='info' component={({ input: { value, onChange } }) => <TextareaItem rows={8} placeholder="输入文章内容" count={100} value={value} onChange={onChange} />} />
                    <Item
                        multipleLine
                        thumb={
                            <View style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                                <Icon name="environment" color='orange' style={{ marginRight: 15 }} />
                            </View>
                        }>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 17 }}>显示定位</Text>
                            <Field name='addressShow' component={({ input: { value, onChange } }) => {
                                return (
                                    <Switch checked={value} onChange={async (checked) => {
                                        onChange(checked)
                                        if (checked) {
                                            try {
                                                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
                                                await init({ android: '1c3897e56e825478d31561767f184a5b' })
                                                Geolocation.getCurrentPosition(({ coords }) => {
                                                    this.props.getCurrentAddr({ longitude: coords.longitude, latitude: coords.latitude })
                                                })
                                            } catch (err) { }
                                        } else {
                                            this.props.removeCurrentAddr()
                                        }
                                    }} />
                                )
                            }} />
                        </View>
                        {publishBlogForm.addressShow && <Brief>{currentAddrName ? `${currentAddrName}` : ''}</Brief>}
                    </Item>
                </List>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishBlogReducer: state.publishBlogReducer,
        publishBlogForm: getFormValues('publishBlog')(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentAddr: reqParams => {
        dispatch(reduxActions.publishBlog.getCurrentAddr(reqParams))
    },
    removeCurrentAddr: () => {
        dispatch(reduxActions.publishBlog.removeCurrentAddr())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'publishBlog',
        onSubmit: (values, dispatch, props) => {
            dispatch(reduxActions.publishBlog.createArticle(values))
        }
    })(PublishBlog))