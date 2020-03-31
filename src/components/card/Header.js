import React from 'react'
import { View, Text, Image } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'

const Header = props => {
    const { params = {} } = props
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ margin: 10 }}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={{
                            uri: params.avatar ? params.avatar : 'personalicon',
                            cache :'force-cache'
                        }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>{params.nick ? `${params.nick}` : ''}</Text>
                    <Text style={{ color: '#777' }}>{params.date ? `${moment(params.date).format('YYYY-MM-DD')}` : ''}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                <SimpleLineIcons name='location-pin' style={{ marginRight: 2, color: 'orange' }} />
                <Text style={{ color: '#777' }}>{params.address ? `${params.address}` : ''}</Text>
            </View>
        </View>
    )
}

export default Header