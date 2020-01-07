import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const FriendInfo = props => {
    return (
        <View style={{ backgroundColor: '#6e6e6e' }}>
            <WingBlank size="lg">
                <WhiteSpace size='xl' />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, margin: 5 }}>
                        <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#000' }} />
                    </View>
                    <View style={{ flex: 3, margin: 5 }}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>昵称</Text>
                        <Text style={{ color: '#fff' }}>关注 420 | 粉丝 120</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SimpleLineIcons name='location-pin' style={{ marginRight: 2, color: 'orange' }} />
                            <Text style={{ flex: 1, color: '#fff' }}>辽宁大连甘井子区</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-around', alignSelf: 'stretch', flex: 1, margin: 5 }}>
                        <Button type='primary' size='small' style={{ backgroundColor: 'orange', borderColor: 'orange' }}>关注</Button>
                        {/* <Button type='ghost' size='small' styles={{ghostRawText:{color:'#fff'}}}>取消关注</Button> */}
                        <Button type='primary' size='small' style={{ backgroundColor: 'orange', borderColor: 'orange' }}>查看电话</Button>
                    </View>
                </View>
                <WhiteSpace size='sm' />
                <Text style={{ color: '#fff' }}>个性签名个性签名个性签名个性签名</Text>
                <WhiteSpace size='xl' />
            </WingBlank>
        </View>
    )
}

export default FriendInfo