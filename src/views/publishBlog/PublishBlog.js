import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native'
import { List, TextareaItem, Icon, Switch } from '@ant-design/react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'

const Item = List.Item
const Brief = Item.Brief

const Textarea = props => {
    console.log('props', props)
    const { input: { onChange, value } } = props
    console.log('value', value)

    return (
        <TextareaItem rows={8} placeholder="输入文章内容" count={100} onChange={txt => {
            console.log('txt', txt)
            // console.log('onChange', onChange)
            onChange(txt)
        }} value={value} />
    )
}



class PublishBlog extends Component {

    async getCurrentPosition() {
        try {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
            await init({ android: '1c3897e56e825478d31561767f184a5b' })
            // console.log("startgetCurrentPosition");
            Geolocation.getCurrentPosition(({ coords }) => {
                // console.log("coords", coords);
                this.props.getCurrentAddr({ longitude: coords.longitude, latitude: coords.latitude })
            })
        } catch (err) {
            // console.log("err", err);
        }
    }

    render() {
        const { navigation, handleSubmit, publishBlogReducer: { data: { currentAddr } } } = this.props
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List>
                    <Field name='contain' component={Textarea} />
                    {/* <TextareaItem rows={5} placeholder="输入文章内容" count={100} /> */}
                    <Item
                        multipleLine
                        thumb={
                            <View style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                                <Icon name="environment" color='orange' style={{ marginRight: 15 }} />
                            </View>
                        }>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 17 }}>显示定位</Text>
                            <Switch checked={true} onChange={(checked) => {
                                this.getCurrentPosition()
                            }} />
                        </View>
                        <Brief>{currentAddr ? `${currentAddr}` : ''}</Brief>
                    </Item>
                </List>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishBlogReducer: state.publishBlogReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentAddr: reqParams => {
        dispatch(reduxActions.publishBlog.getCurrentAddr(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'publishBlog',// a unique name for this form
        onSubmit: (values) => {
            console.log('values', values)
        }
    })(PublishBlog))