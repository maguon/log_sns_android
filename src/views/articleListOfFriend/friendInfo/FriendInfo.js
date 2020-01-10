import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const FriendInfo = props => {
    // console.log('props', props)
    const { friendInfoReducer: { data: { friendInfo, contactInfo, relationInfo } } } = props
    return (
        <View style={{ backgroundColor: '#6e6e6e' }}>
            <WingBlank size="lg">
                <WhiteSpace size='xl' />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, margin: 5 }}>
                        <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#000' }} />
                    </View>
                    <View style={{ flex: 3, margin: 5 }}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>{friendInfo.user_detail_info && friendInfo.user_detail_info[0] && friendInfo.user_detail_info[0].nick_name ? `${friendInfo.user_detail_info[0].nick_name}` : `${friendInfo.phone}`}</Text>
                        <Text style={{ color: '#fff' }}>
                            关注 {friendInfo.user_detail_info && friendInfo.user_detail_info[0] && friendInfo.user_detail_info[0].follow_num ? `${friendInfo.user_detail_info[0].follow_num}` : '0'} |
                        粉丝 {friendInfo.user_detail_info && friendInfo.user_detail_info[0] && friendInfo.user_detail_info[0].attention_num ? `${friendInfo.user_detail_info[0].attention_num}` : '0'}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SimpleLineIcons name='location-pin' style={{ marginRight: 2, color: 'orange' }} />
                            <Text style={{ flex: 1, color: '#fff' }}>{friendInfo.user_detail_info && friendInfo.user_detail_info[0] && friendInfo.user_detail_info[0].city_name ? `${friendInfo.user_detail_info[0].city_name}` : '0'}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-around', alignSelf: 'stretch', flex: 1, margin: 5 }}>
                        {relationInfo._user_by_id != friendInfo._id &&
                            <Button
                                onPress={() => { props.follow({ friendId: friendInfo._id }) }}
                                onLongPress={() => { props.follow({ friendId: friendInfo._id }) }}
                                type='primary' size='small'
                                style={{ backgroundColor: 'orange', borderColor: 'orange' }}>关注</Button>}
                        {relationInfo._user_by_id == friendInfo._id &&
                            <Button
                                onPress={() => { props.removeFollow({ friendId: friendInfo._id }) }}
                                onLongPress={() => { props.removeFollow({ friendId: friendInfo._id }) }}
                                type='ghost' size='small'
                                styles={{ ghostRawText: { color: '#fff' } }}>取消关注</Button>}
                        <Button type='primary' size='small' style={{ backgroundColor: 'orange', borderColor: 'orange' }}>查看电话</Button>
                    </View>
                </View>
                <WhiteSpace size='sm' />
                <Text style={{ color: '#fff' }}>{friendInfo.user_detail_info && friendInfo.user_detail_info[0] && friendInfo.user_detail_info[0].intro ? `${friendInfo.user_detail_info[0].intro}` : '0'}</Text>
                <WhiteSpace size='xl' />
            </WingBlank>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        friendInfoReducer: state.friendInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFollow: reqParams => {
        dispatch(reduxActions.friendInfo.removeFollow(reqParams))
    },
    follow: reqParams => {
        dispatch(reduxActions.friendInfo.follow(reqParams))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(FriendInfo)
