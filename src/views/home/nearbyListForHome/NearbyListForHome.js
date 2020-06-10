import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList,RefreshControl,VideoContent, InteractionManager } from 'react-native'
import { Card, Content as CardContent, Footer, Header,ImageContent, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import globalStyles, { styleColor } from '../../../GlobalStyles'

class NearbyListForHome extends Component {

    componentDidMount() {
        this.props.getNearbyListForHomeWaiting()
        InteractionManager.runAfterInteractions(this.props.getNearbyListForHome)
    }

    componentWillUnmount() {
        // this.props.rmArticleAllList()
    }

    render() {
        console.log('this.props', this.props)
        const { nearbyListForHomeReducer, navigation } = this.props
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={nearbyListForHomeReducer.data.articleList}
                renderItem={params => {
                    const { item, index } = params
                    // console.log('item', item)
                    // console.log('item',item.media)
                    return (
                        <WingBlank size='md'>
                            {index == 0 && <WhiteSpace size='md' />}
                            <Card>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('ArticleListOfFriend', {
                                            userInfo: item.user_detail_info[0]
                                        })
                                    }}>
                                    <Header
                                        params={{
                                            nick: item.user_detail_info[0].nick_name,
                                            date: item.created_at,
                                            address: item.address_name,
                                            avatar: item.user_detail_info[0].avatar
                                        }}
                                    />
                                </TouchableOpacity>
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
                                    msgCount={item.comment_num}
                                    likeCount={item.agree_num}
                                    // delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                                    msgOnPress={() => {
                                        navigation.navigate('LvOneCommentList', {
                                            articleInfo: item
                                        })
                                    }}
                                    likeOnPress={() => {
                                        this.props.likeArticle({
                                            msgId: item._id,
                                            msgUserId: item._user_id
                                        })
                                    }}
                                />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={nearbyListForHomeReducer.getNearbyListForHome.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getNearbyListForHomeWaiting()
                            this.props.getNearbyListForHome()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (nearbyListForHomeReducer.getNearbyListForHome.isResultStatus == 2 && !nearbyListForHomeReducer.data.isCompleted) {
                        this.props.getNearbyListForHomeMore()
                    }
                }}
                ListEmptyComponent={nearbyListForHomeReducer.getNearbyListForHome.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={nearbyListForHomeReducer.getNearbyListForHome.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nearbyListForHomeReducer: state.nearbyListForHomeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getNearbyListForHome: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHome())
    },
    getNearbyListForHomeWaiting: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHomeWaiting())
    },
    getNearbyListForHomeMore: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHomeMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyListForHome)