import React, { Component } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { List, Switch } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

class PrivacySetting extends Component {
    componentDidMount() {
        this.props.getPrivacySettingWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getPrivacySetting()
        })
    }

    changePrivacySetting(key) {
        let { privacySettingReducer: { data: { privacyInfo } } } = this.props
        for (let index in privacyInfo) {
            if (key == index) {
                privacyInfo[index] = privacyInfo[index] ? 0 : 1
                break
            }
        }
        this.props.changePrivacySetting(privacyInfo)
    }

    render() {
        console.log(this.props)
        const { privacySettingReducer: { data: { privacyInfo } } } = this.props
        return (
            <List>
                <List.Item extra={<Switch checked={privacyInfo.name == 1} onChange={() => { this.changePrivacySetting('name') }} />}>显示姓名</List.Item>
                <List.Item extra={<Switch checked={privacyInfo.phone == 1} onChange={() => { this.changePrivacySetting('phone') }} />}>显示电话</List.Item>
                <List.Item extra={<Switch checked={privacyInfo.city == 1} onChange={() => { this.changePrivacySetting('city') }} />}>显示城市</List.Item>
                <List.Item extra={<Switch checked={privacyInfo.car == 1} onChange={() => { this.changePrivacySetting('car') }} />}>显示车辆资料</List.Item>
                <List.Item extra={<Switch checked={privacyInfo.recommend_to_friends == 1} onChange={() => { this.changeNoticeSetting('recommend_to_friends') }} />}>允许将我推荐给好友</List.Item>
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        privacySettingReducer: state.privacySettingReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPrivacySetting: () => {
        dispatch(reduxActions.privacySetting.getPrivacySetting())
    },
    changePrivacySetting: reqParams => {
        console.log('reqParams', reqParams)
        dispatch(reduxActions.privacySetting.changePrivacySetting(reqParams))
    },
    getPrivacySettingWaiting: () => {
        dispatch(reduxActions.privacySetting.getPrivacySettingWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivacySetting)