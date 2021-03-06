import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Footer = props => {
    const {  msgCount = 0, likeCount = 0,
        msgOnPress = () => console.log("msgOnPress"),
        likeOnPress = () => console.log("likeOnPress") } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 15 }}>
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