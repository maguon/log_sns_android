import React, { Component } from 'react'
import { View, Text, FlatList, RefreshControl, InteractionManager, TouchableOpacity } from 'react-native'
import { Card, Content as CardContent, Footer, Header, VideoContent, ImageContent, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import globalStyles, { styleColor } from '../../../GlobalStyles'

class SeekHelpListForCommunity extends Component {

    componentDidMount() {
        this.props.getSeekHelpListWaiting()
        InteractionManager.runAfterInteractions(this.props.getSeekHelpList)
    }

    render() {
        const { seekHelpListForCommunityReducer, navigation } = this.props
        //console.log('seekHelpListForCommunityReducer', seekHelpListForCommunityReducer)
        return (
            // <View style={{ flex: 1 }}>
            //     <Text>NewestArticleListForCommunity</Text>
            // </View>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={seekHelpListForCommunityReducer.data.articleList}
                renderItem={params => {
                    const { item, index } = params
                    // console.log('item', item)
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
                                    {item.type == 2 && item.carrier == 4 && <Map />}
                                    {item.type == 2 && item.carrier == 2 && <ImageContent
                                        openPictureViewer={(index, imageList) => {
                                            navigation.navigate('PictureViewer', { imageIndex: index, imageList })
                                        }}
                                        imageList={item.media.map(imageUriItem => `${imageUriItem.url}`)} />}
                                   
                                </TouchableOpacity>
                                {item.type == 2 && item.carrier == 3 && <VideoContent preview={item.media[0].preview} video={item.media[0].url}/>}
                                <Footer
                                    msgCount={item.comment_num}
                                    likeCount={item.agree_num}
                                    // delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                                    // msgOnPress={() => { console.log('msgOnPress') }}
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
                        refreshing={seekHelpListForCommunityReducer.getSeekHelpList.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getSeekHelpListWaiting()
                            this.props.getSeekHelpList()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (seekHelpListForCommunityReducer.getSeekHelpList.isResultStatus == 2 && !seekHelpListForCommunityReducer.data.isCompleted) {
                        this.props.getSeekHelpListMore()
                    }
                }}
                ListEmptyComponent={seekHelpListForCommunityReducer.getSeekHelpList.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={seekHelpListForCommunityReducer.getSeekHelpList.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        seekHelpListForCommunityReducer: state.seekHelpListForCommunityReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSeekHelpList: () => {
        dispatch(reduxActions.seekHelpListForCommunity.getSeekHelpList())
    },
    getSeekHelpListWaiting: () => {
        dispatch(reduxActions.seekHelpListForCommunity.getSeekHelpListWaiting())
    },
    getSeekHelpListMore: () => {
        dispatch(reduxActions.seekHelpListForCommunity.getSeekHelpListMore())
    },
    likeArticle: reqParams => {
        dispatch(reduxActions.seekHelpListForCommunity.likeArticle(reqParams))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeekHelpListForCommunity)