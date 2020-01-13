import React, { Component } from 'react'
import { View, Text, FlatList, InteractionManager } from 'react-native'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../../reduxActions'
import { ListEmpty, ListFooter } from '../../../../components/list'

class TextArticleInfo extends Component {

    componentDidMount() {

        const { navigation } = this.props
        this.props.getCommentWaiting()
        InteractionManager.runAfterInteractions(() => {
            this.props.getComment({ msgId: navigation.state.params.articleInfo._id })
        })
    }

    render() {
        console.log('this.props', this.props)
        const { navigation,textArticleInfoReducer } = this.props
        return (
            <FlatList 
            keyExtractor={(item, index) => `${index}`}
            data={textArticleInfoReducer.data.commentList}
            
            />
            <View>
                <WingBlank size='md'>
                    <WhiteSpace size='md' />
                    <Text>2019-6-5 11:30</Text>
                    <WhiteSpace size='md' />
                    <Text>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</Text>
                    <WhiteSpace size='md' />
                    <View style={{ backgroundColor: '#000', height: 200 }} />
                </WingBlank>
                <WhiteSpace size='md' />
                <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
                    <WingBlank size='md' style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text>评论（70）</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>分享 8</Text>
                            <Text style={{ marginLeft: 5 }}>点赞 32</Text>
                        </View>
                    </WingBlank>
                </View>
                <WhiteSpace size='md' />
                <WingBlank size='md' style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#000', height: 48, width: 48 }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text>昵称昵称</Text>
                        <Text>评论内容评论内容</Text>
                        <WhiteSpace size='sm' />

                        <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
                            <Text>共2条回复 ></Text>
                        </View>
                        <WhiteSpace size='sm' />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, paddingBottom: 5 }}>
                            <Text>2019-6-25 11:20</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>图标</Text>
                                <Text style={{ marginLeft: 10 }}>点赞 3100</Text>
                            </View>
                        </View>
                    </View>
                </WingBlank>
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