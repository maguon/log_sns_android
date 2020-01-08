import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, Content as CardContent, Footer, HeaderForFollow, Video, Image, Map } from '../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import FriendInfo from './friendInfo/FriendInfo'
import reduxActions from '../../reduxActions'
import { styleColor } from '../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../components/list'
import { connect } from 'react-redux'


const ArticleListOfFriend = props => {
    return (
        <View style={{ flex: 1 }}>
            {/* <WhiteSpace size='md' /> */}
            <FlatList
                keyExtractor={(item, index) => `${index}`}
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
                // refreshControl={
                //     <RefreshControl
                //         colors={[styleColor]}
                //         refreshing={articleAllListReducer.getArticleAllList.isResultStatus == 1}
                //         onRefresh={() => {
                //             props.getArticleListOfFriendWaiting()
                //             props.getArticleListOfFriend()
                //         }}
                //     />
                // }
                // onEndReachedThreshold={0.2}
                // onEndReached={() => {
                //     if (articleAllListReducer.getArticleAllList.isResultStatus == 2 && !articleAllListReducer.data.isCompleted) {
                //         props.getArticleAllListMore()
                //     }
                // }}
                // ListEmptyComponent={articleAllListReducer.getArticleAllList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                // ListFooterComponent={articleAllListReducer.getArticleAllListMore.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        friendInfoReducer: state.friendInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleListOfFriend: reqParams => {
        dispatch(reduxActions.articleListOfFriend.getArticleListOfFriend(reqParams))
    },
    getArticleListOfFriendWaiting: () => {
        dispatch(reduxActions.articleListOfFriend.getArticleListOfFriendWaiting())
    },
    getArticleListOfFriendMore: reqParams => {
        dispatch(reduxActions.articleListOfFriend.getArticleListOfFriendMore(reqParams))
    },
    getFriendInfo: reqParams => {
        dispatch(reduxActions.friendInfo.getFriendInfo(reqParams))
    },
    getFriendInfoWaiting: () => {
        dispatch(reduxActions.friendInfo.getFriendInfoWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListOfFriend)
