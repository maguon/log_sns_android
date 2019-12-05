import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Footer = props => {
    const { shareCount = 0, msgCount = 0, likeCount = 0,
        shareOnPress = () => console.log("shareOnPress"),
        msgOnPress = () => console.log("msgOnPress"),
        likeOnPress = () => console.log("likeOnPress") } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 15 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={shareOnPress}>
                <SimpleLineIcons name="share-alt" />
                <Text style={{ marginLeft: 10 }}>{shareCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={msgOnPress}>
                <SimpleLineIcons name="speech" />
                <Text style={{ marginLeft: 10 }}>{msgCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={likeOnPress}>
                <SimpleLineIcons name="like" />
                <Text style={{ marginLeft: 10 }}>{likeCount}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer