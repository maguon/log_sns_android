import React from 'react'
import { View, Text } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Button } from '@ant-design/react-native'

const Header = props => {
    const { params } = props
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                    <View style={{ margin: 10 }}>
                        <View style={{ backgroundColor: '#000', width: 40, height: 40 }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>昵称</Text>
                        <Text style={{ color: '#777' }}>2019-6-25</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
                    {/* <Button type="primary" size='small' onPress={() => { }}>关注</Button> */}
                    <Button type="ghost" size='small' onPress={() => { }}>已关注</Button>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                <SimpleLineIcons name='location-pin' style={{ marginRight: 2, color: 'orange' }} />
                <Text style={{ color: '#777' }}>金马路金马路金马路金马路金马路</Text>
            </View>
        </View>
    )
}

export default Header