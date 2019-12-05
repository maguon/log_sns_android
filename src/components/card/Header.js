import React from 'react'
import { View, Text } from 'react-native'
import { Thumbnail, Button, Icon } from 'native-base'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Header = props => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                    <View style={{ margin: 10 }}>
                        <Thumbnail quare style={{ backgroundColor: '#000', width: 40, height: 40 }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>昵称</Text>
                        <Text style={{ color: '#777' }}>2019-6-25</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
                    <Button full rounded small transparent style={{ borderWidth: 0.5, borderColor: 'orange' }}>
                        <Text style={{ color: 'orange' }}>关注</Text>
                    </Button>
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