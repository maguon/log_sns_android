import React from 'react'
import { View, Text } from 'react-native'
import ArticleListOfFriend from './articleListOfFriend/ArticleListOfFriend'
import FriendInfo from './friendInfo/FriendInfo'

const Friend = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <FriendInfo {...props} /> */}
            <ArticleListOfFriend {...props} />
        </View>
    )
}

export default Friend