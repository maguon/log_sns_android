import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { List, Button, Icon } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item
const Brief = Item.Brief

const RequestContactList = props => {
    return (
        <ScrollView>
            <List>
                <Item
                    wrap={true}
                    multipleLine={false}
                    thumb={
                        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#000', borderWidth: 0.5, alignSelf: 'flex-start', marginTop: 16, marginRight: 16 }} />
                    }>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 17 }}>昵称昵称昵</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button type='ghost' size='small' >拒绝</Button>
                            <Button type='primary' size='small' style={{ marginLeft: 5 }}> 同意</Button>
                        </View>
                    </View>
                    <Brief>2019-06-05</Brief>
                    <Text numberOfLines={1}>辅助文字内容辅助文字内容辅助文辅助文字内容辅助文字内容辅助文辅助文字内容辅助文字内容辅助文</Text>
                </Item>
                <Item
                    thumb={
                        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#000', borderWidth: 0.5, alignSelf: 'flex-start', marginTop: 16, marginRight: 16 }} />
                    }>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 17 }}>昵称昵称昵</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button type='ghost' size='small' >拒绝</Button>
                            <Button type='primary' size='small' style={{ marginLeft: 5 }}> 同意</Button>
                        </View>
                    </View>
                    <Brief>2019-06-05</Brief>
                    <Text numberOfLines={1}>辅助文字内容辅助文字</Text>
                </Item>
            </List>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        requestContactListReducer: state.requestContactListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRequestContactListWaiting: () => {
        dispatch(reduxActions.requestContactList.getRequestContactListWaiting())
    },
    getRequestContactList: () => {
        dispatch(reduxActions.requestContactList.getRequestContactList())
    },
    getRequestContactListMore: () => {
        dispatch(reduxActions.requestContactList.getRequestContactListMore())
    },
    agreeRequestContact: () => {
        dispatch(reduxActions.requestContactList.agreeRequestContact())
    },
    refuseRequestContact: () => {
        dispatch(reduxActions.requestContactList.refuseRequestContact())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestContactList)
