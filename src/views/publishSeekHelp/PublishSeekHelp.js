import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native'
import { List, TextareaItem, Icon, Switch ,Toast } from '@ant-design/react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'
import { required, requiredObj } from '../../utils/validators'

const Item = List.Item
const Brief = Item.Brief

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

class PublishSeekHelp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { publishSeekHelpReducer: { data: { currentAddrName } }, publishSeekHelpForm = {} } = this.props
        console.log('publishSeekHelpForm',publishSeekHelpForm)
        console.log('props',this.props)
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
                        {publishSeekHelpForm.addressShow && <Brief>{currentAddrName ? `${currentAddrName}` : ''}</Brief>}
                    </Item>
                </List>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishSeekHelpReducer: state.publishSeekHelpReducer,
        publishSeekHelpForm: getFormValues('publishSeekHelp')(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentAddr: reqParams => {
        console.log('reqParams',reqParams)
        dispatch(reduxActions.publishSeekHelp.getCurrentAddr(reqParams))
    },
    removeCurrentAddr: () => {
        dispatch(reduxActions.publishSeekHelp.removeCurrentAddr())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'publishSeekHelp',
        onSubmit: (values, dispatch, props) => {
            // console.log('onSubmit')
            dispatch(reduxActions.publishSeekHelp.createSeekHelp(values))
        }
    })(PublishSeekHelp))