import React, { Component } from 'react'
import { View, Text, FlatList, InteractionManager, RefreshControl, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { ListEmpty, ListFooter } from '../../../../components/list'
import { styleColor } from '../../../../GlobalStyles'
import moment from 'moment'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

class TextArticleInfo extends Component {

    componentDidMount() {

        const { navigation } = this.props
        this.props.getCommentWaiting()
        this.props.getTextArticleInfoWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getComment({ msgId: navigation.state.params.articleInfo._id })
            this.props.getTextArticleInfo({ msgId: navigation.state.params.articleInfo._id })
        })
    }

    render() {
        const { navigation, textArticleInfoReducer } = this.props
        const { data: { articleInfo } } = textArticleInfoReducer
        return (
            <View style={{flex:1}}>
                <FlatList
                    keyExtractor={(item, index) => `${index}`}
                    data={textArticleInfoReducer.data.commentList}
                    ListHeaderComponent={
                        <View>
                            <WingBlank size='md'>
                                <WhiteSpace size='md' />
                                <Text>{articleInfo.created_at ? `${moment(articleInfo.created_at).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
                                <WhiteSpace size='md' />
                                <Text>{articleInfo.info ? `${articleInfo.info}` : ''}</Text>
                                <WhiteSpace size='md' />
                                <View style={{ backgroundColor: '#000', height: 200 }} />
                            </WingBlank>
                            <WhiteSpace size='md' />
                            <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
                                <WingBlank size='md' style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>评论（{articleInfo.comment_num ? `${articleInfo.comment_num}` : '0'}）</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>收藏 {articleInfo.collect_num ? `${articleInfo.collect_num}` : '0'}</Text>
                                        <Text style={{ marginLeft: 5 }}>点赞 {articleInfo.agree_num ? `${articleInfo.agree_num}` : '0'}</Text>
                                    </View>
                                </WingBlank>
                            </View>
                            <WhiteSpace size='md' />
                        </View>
                    }
                    renderItem={({ item }) => {
                        return (
                            <WingBlank size='md' style={{ flexDirection: 'row' }}>
                                <View style={{ height: 48, width: 48 }} >
                                    <Image source={{ uri: item.user_detail_info[0] && item.user_detail_info[0].avatar ? item.user_detail_info[0].avatar : 'personalicon' }} style={{ width: 48, height: 48, borderRadius: 24, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text>{item.user_detail_info[0] ? `${item.user_detail_info[0].nick_name}` : ''}</Text>
                                    <Text>{item.comment ? `${item.comment}` : ''}</Text>
                                    <WhiteSpace size='sm' />
                                    {item.comment_num > 0 && <View>
                                        <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
                                            <Text>共{item.comment_num ? `${item.comment_num}` : '0'}条回复 ></Text>
                                        </View>
                                        <WhiteSpace size='sm' />
                                    </View>}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, paddingBottom: 5 }}>
                                        <Text>{item.created_at ? `${moment(item.created_at).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <SimpleLineIcons name="speech" />
                                            <SimpleLineIcons name="like" style={{ marginLeft: 20 }} />
                                            <Text style={{ marginLeft: 5 }}>{item.agree_num ? `${item.agree_num}` : '0'}</Text>
                                        </View>
                                    </View>
                                    <WhiteSpace size='lg' />
                                </View>
                            </WingBlank>
                        )
                    }}
                    refreshControl={
                        <RefreshControl
                            colors={[styleColor]}
                            refreshing={textArticleInfoReducer.getComment.isResultStatus == 1}
                            onRefresh={() => {
                                this.props.getCommentWaiting()
                                this.props.getTextArticleInfoWaiting()
                                this.props.getComment({ msgId: navigation.state.params.articleInfo._id })
                                this.props.getTextArticleInfo({ msgId: navigation.state.params.articleInfo._id })
                            }}
                        />
                    }
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        // console.log('onEndReached')
                        if (textArticleInfoReducer.getComment.isResultStatus == 2 && !textArticleInfoReducer.data.isCompleted) {
                            this.props.getCommentMore({ msgId: navigation.state.params.articleInfo._id })
                        }
                    }}
                    ListEmptyComponent={textArticleInfoReducer.getComment.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                    ListFooterComponent={textArticleInfoReducer.getCommentMore.isResultStatus == 1 ? <ListFooter /> : <View />}
                />
                <TextInput
                    ref="input2"
                    style={{
                        height: 60,
                        width:'100%',
                    
                        color: '#333333',
                        backgroundColor: '#eee',
                        borderRadius: 60,
                        paddingHorizontal: 20,
                        paddingVertical: 0
                    }}
                    placeholderTextColor='#999999'
                    placeholder={'输入代码、名称或简拼'}
                    underlineColorAndroid="transparent" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        textArticleInfoReducer: state.textArticleInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getComment: reqParams => {
        dispatch(reduxActions.textArticleInfo.getComment(reqParams))
    },
    getCommentMore: reqParams => {
        dispatch(reduxActions.textArticleInfo.getCommentMore(reqParams))
    },
    getCommentWaiting: () => {
        dispatch(reduxActions.textArticleInfo.getCommentWaiting())
    },
    getTextArticleInfo: reqParams => {
        dispatch(reduxActions.textArticleInfo.getTextArticleInfo(reqParams))
    },
    getTextArticleInfoWaiting: () => {
        dispatch(reduxActions.textArticleInfo.getTextArticleInfoWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextArticleInfo)