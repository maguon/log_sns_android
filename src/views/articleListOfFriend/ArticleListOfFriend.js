import React, { Component } from 'react'
import { View, Text, FlatList, InteractionManager, RefreshControl, TouchableOpacity } from 'react-native'
import { Card, Content as CardContent, Footer, Header, ImageContent, VideoContent, Map } from '../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import FriendInfo from './friendInfo/FriendInfo'
import reduxActions from '../../reduxActions'
import { styleColor } from '../../GlobalStyles'
import { ListEmpty, ListFooter } from '../../components/list'
import { connect } from 'react-redux'


class ArticleListOfFriend extends Component {

    componentDidMount() {
        const { navigation: { state: { params: { userInfo } } } } = this.props
        this.props.getArticleListOfFriendWaiting()
        this.props.getFriendInfoWaiting()
        this.props.getFelationInfoWaiting()
        this.props.getContactInfoWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getFriendInfo({ friendId: userInfo._user_id })
            this.props.getFelationInfo({ friendId: userInfo._user_id })
            this.props.getContactInfo({ friendId: userInfo._user_id })
            this.props.getArticleListOfFriend({ friendId: userInfo._user_id })
        })
    }

    render() {
        // console.log('props', this.props)
        const { articleListOfFriendReducer, navigation: { state: { params: { userInfo } } }, navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                {/* <WhiteSpace size='md' /> */}
                <FlatList
                    keyExtractor={(item, index) => `${index}`}
                    ListHeaderComponent={<View><FriendInfo {...this.props} /><WhiteSpace size='md' /></View>}
                    data={articleListOfFriendReducer.data.articleList}
                    renderItem={({ item }) => {
                        return (<WingBlank size='md'>
                            <Card>
                                <Header
                                    params={{
                                        nick: item.user_detail_info[0].nick_name,
                                        date: item.created_at,
                                        address: item.address_name,
                                        avatar: item.user_detail_info[0].avatar
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('TextArticleInfo', {
                                            articleInfo: item
                                        })
                                    }}>
                                    <CardContent
                                        params={{ content: item.info }}
                                    />
                                    {item.type == 1 && item.carrier == 4 && <Map />}
                                    {item.type == 1 && item.carrier == 2 && <ImageContent
                                        openPictureViewer={(index, imageList) => {
                                            navigation.navigate('PictureViewer', { imageIndex: index, imageList })
                                        }}
                                        imageList={item.media.map(imageUriItem => `${imageUriItem.url}`)} />}

                                </TouchableOpacity>
                                {item.type == 1 && item.carrier == 3 && <VideoContent preview={item.media[0].preview} video={item.media[0].url} />}
                                <Footer
                                    msgCount={item.commentsNum}
                                    likeCount={item.agreeNum}
                                    // msgOnPress={() => { console.log('msgOnPress') }}
                                    likeOnPress={() => { this.props.likeArticle({ messageId: item._id }) }}
                                />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>)
                    }}
                    refreshControl={
                        <RefreshControl
                            colors={[styleColor]}
                            refreshing={articleListOfFriendReducer.getArticleListOfFriend.isResultStatus == 1}
                            onRefresh={() => {
                                this.props.getArticleListOfFriendWaiting()
                                this.props.getArticleListOfFriend({ friendId: userInfo._user_id })
                            }}
                        />
                    }
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        if (articleListOfFriendReducer.getArticleListOfFriend.isResultStatus == 2 && !articleListOfFriendReducer.data.isCompleted) {
                            this.props.getArticleListOfFriendMore({ friendId: userInfo._user_id })
                        }
                    }}
                    ListEmptyComponent={articleListOfFriendReducer.getArticleListOfFriend.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                    ListFooterComponent={articleListOfFriendReducer.getArticleListOfFriendMore.isResultStatus == 1 ? <ListFooter /> : <View />}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleListOfFriendReducer: state.articleListOfFriendReducer
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
    },
    getFelationInfoWaiting: () => {
        dispatch(reduxActions.friendInfo.getFelationInfoWaiting())
    },
    getFelationInfo: reqParams => {
        dispatch(reduxActions.friendInfo.getFelationInfo(reqParams))
    },
    getContactInfoWaiting: () => {
        dispatch(reduxActions.friendInfo.getContactInfoWaiting())
    },
    getContactInfo: reqParams => {
        dispatch(reduxActions.friendInfo.getContactInfo(reqParams))
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.articleListOfFriend.likeArticle(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListOfFriend)
