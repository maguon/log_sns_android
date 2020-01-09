import React, { Component } from 'react'
import { View, FlatList, RefreshControl, InteractionManager, TouchableOpacity } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import globalStyles, { styleColor } from '../../../GlobalStyles'

class HotListForHome extends Component {

    componentDidMount() {
        this.props.getHotListForHomeWaiting()
        InteractionManager.runAfterInteractions(this.props.getHotListForHome)
    }

    componentWillUnmount() {
        // this.props.rmArticleAllList()
    }

    render() {
        const { hotListForHomeReducer, navigation } = this.props
        // console.log('hotListForHomeReducer', hotListForHomeReducer)
        // console.log('this.props', this.props)
        return (
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={hotListForHomeReducer.data.articleList}
                renderItem={params => {
                    const { item, index } = params
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
                                <CardContent
                                    params={{ content: item.info }}
                                />
                                {item.type == 1 && item.carrier == 4 && <Map />}
                                {item.type == 1 && item.carrier == 2 && <Image />}
                                {item.type == 1 && item.carrier == 3 && <Video />}
                                <Footer
                                    msgCount={item.commentsNum}
                                    likeCount={item.agreeNum}
                                // delOnPress={() => { this.props.delArticle({ messageId: item._id }) }}
                                // msgOnPress={() => { console.log('msgOnPress') }}
                                // likeOnPress={() => { this.props.likeArticle({ messageId: item._id }) }}
                                />
                            </Card>
                            <WhiteSpace size='md' />
                        </WingBlank>
                    )
                }}
                refreshControl={
                    <RefreshControl
                        colors={[styleColor]}
                        refreshing={hotListForHomeReducer.getHotListForHome.isResultStatus == 1}
                        onRefresh={() => {
                            this.props.getHotListForHomeWaiting()
                            this.props.getHotListForHome()
                        }}
                    />
                }
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (hotListForHomeReducer.getHotListForHome.isResultStatus == 2 && !hotListForHomeReducer.data.isCompleted) {
                        this.props.getHotListForHomeMore()
                    }
                }}
                ListEmptyComponent={hotListForHomeReducer.getHotListForHome.isResultStatus != 1 && <ListEmpty title='暂无文章' />}
                ListFooterComponent={hotListForHomeReducer.getHotListForHome.isResultStatus == 1 ? <ListFooter /> : <View />}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hotListForHomeReducer: state.hotListForHomeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getHotListForHome: () => {
        dispatch(reduxActions.hotListForHome.getHotListForHome())
    },
    getHotListForHomeWaiting: () => {
        dispatch(reduxActions.hotListForHome.getHotListForHomeWaiting())
    },
    getHotListForHomeMore: () => {
        dispatch(reduxActions.hotListForHome.getHotListForHomeMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HotListForHome)