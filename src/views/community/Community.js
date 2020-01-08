import React from 'react'
import { View, Text } from 'react-native'
import ArticleListOfFriend from '../articleListOfFriend/ArticleListOfFriend'

const Community = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Community</Text> */}
            <ArticleListOfFriend />
        </View>
    )
}

export default Community