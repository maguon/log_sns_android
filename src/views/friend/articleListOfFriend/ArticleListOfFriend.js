import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, Content as CardContent, Footer, HeaderForFollow, Video, Image, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import FriendInfo from '../friendInfo/FriendInfo'

const ArticleListOfFriend = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <WhiteSpace size='md' /> */}
            <FlatList
                ListHeaderComponent={<View><FriendInfo {...props} /><WhiteSpace size='md' /></View>}
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => {
                    return (<WingBlank size='md'>
                        <Card>
                            <HeaderForFollow />
                            <CardContent />
                            <Video />
                            <Footer />
                        </Card>
                        <WhiteSpace size='md' />
                    </WingBlank>)
                }}
            />
        </View>
    )
}

export default ArticleListOfFriend