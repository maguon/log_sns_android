import React, { Component } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import { List, Switch } from '@ant-design/react-native'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

class NoticeSetting extends Component {
    componentDidMount() {
        this.props.getNoticeSettingWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getNoticeSetting()
        })
    }

    changeNoticeSetting(key) {
        let { noticeSettingReducer: { data: { noticeInfo } } } = this.props
        for (let index in noticeInfo) {
            if (key == index) {
                noticeInfo[index] = noticeInfo[index] ? 0 : 1
                break
            }
        }
        this.props.changeNoticeSetting(noticeInfo)
    }


    render() {
        console.log(this.props)
        const { noticeSettingReducer: { data: { noticeInfo } } } = this.props
        return (
            <List>
                <List.Item extra={<Switch checked={noticeInfo.sysmsg == 1} onChange={() => { this.changeNoticeSetting('sysmsg') }} />}>消息</List.Item>
                <List.Item extra={<Switch checked={noticeInfo.praise == 1} onChange={() => { this.changeNoticeSetting('praise') }} />}>赞</List.Item>
                <List.Item extra={<Switch checked={noticeInfo.comment == 1} onChange={() => { this.changeNoticeSetting('comment') }} />}>评论</List.Item>
                <List.Item extra={<Switch checked={noticeInfo.attention == 1} onChange={() => { this.changeNoticeSetting('attention') }} />}>被关注</List.Item>
                <List.Item extra={<Switch checked={noticeInfo.others == 1} onChange={() => { this.changeNoticeSetting('others') }} />}>@</List.Item>
                <List.Item extra={<Switch checked={noticeInfo.follow_addmsg == 1} onChange={() => { this.changeNoticeSetting('follow_addmsg') }} />}>关注人发布作品</List.Item>
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noticeSettingReducer: state.noticeSettingReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getNoticeSetting: () => {
        dispatch(reduxActions.noticeSetting.getNoticeSetting())
    },
    changeNoticeSetting: reqParams => {
        dispatch(reduxActions.noticeSetting.changeNoticeSetting(reqParams))
    },
    getNoticeSettingWaiting: () => {
        dispatch(reduxActions.noticeSetting.getNoticeSettingWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NoticeSetting)